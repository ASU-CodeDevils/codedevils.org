// lib/github-service.ts
// Define types for GitHub API responses
export type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export type Commit = {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
  } | null;
  html_url: string;
};

export type CommitActivity = {
  username: string;
  avatar: string;
  message: string;
  date: string;
  repo: string;
  url: string;
  id: string;
};

export type ContributorStats = {
  username: string;
  avatar: string;
  totalCommits: number;
  profileUrl?: string;
  repositories: {
    [repo: string]: number;
  };
};

export type GitHubData = {
  recentActivity: CommitActivity[];
  contributors: ContributorStats[];
  error?: string;
};

// Helper function to get auth headers
const getAuthHeaders = (): Record<string, string> => {
  // Server-side environment variable access
  const token = process.env.GITHUB_TOKEN || "";
  
  // Safe debug logging - only show if token exists and first/last few chars
  if (token) {
    const tokenPrefix = token.substring(0, 4);
    const tokenSuffix = token.substring(token.length - 4);
    console.log(`GitHub token loaded - starts with: ${tokenPrefix}... ends with: ...${tokenSuffix}`);
    console.log(`Token length: ${token.length} characters`);
  } else {
    console.log("WARNING: No GitHub token found in environment variables");
  }

  // Always return a Record<string, string> to satisfy TypeScript
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  // Conditionally add Authorization if token exists
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

// Helper function to format dates
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// Main function to fetch GitHub data
export async function fetchGitHubData(repos: string[]): Promise<GitHubData> {
  try {
    const headers = getAuthHeaders();
    const usingAuth = headers.hasOwnProperty("Authorization");

    const allCommits: CommitActivity[] = [];
    const contributorMap: Record<string, ContributorStats> = {};

    for (let i = 0; i < repos.length; i++) {
      const repo = repos[i];

      try {        
        // Log that we're fetching for this repo
        console.log(`Fetching commits for ${repo}...`);

        // Fetch rate limit info first to confirm auth is working
        const rateResponse = await fetch(
          "https://api.github.com/rate_limit",
          { headers }
        );
        
        if (rateResponse.ok) {
          const rateData = await rateResponse.json();
          console.log(`GitHub API Rate Limits:`);
          console.log(`- Remaining core requests: ${rateData.resources.core.remaining}/${rateData.resources.core.limit}`);
          console.log(`- Reset time: ${new Date(rateData.resources.core.reset * 1000).toLocaleTimeString()}`);
          
          // Authenticated users get 5000 requests/hour, unauthenticated get 60/hour
          if (rateData.resources.core.limit > 60) {
            console.log("✅ Authentication confirmed - using higher rate limits");
          } else {
            console.log("⚠️ WARNING: Using unauthenticated rate limits - token may be invalid");
          }
        }

        // Fetch recent commits
        console.log(`Making request to GitHub API: https://api.github.com/repos/${repo}/commits`);
        console.log(`Using Authorization header: ${headers.Authorization ? 'Bearer [token]' : 'None'}`);
        
        // Test the token directly with a simple API call first
        const userResponse = await fetch('https://api.github.com/user', { headers });
        if (userResponse.status === 401) {
          console.error('GitHub token is invalid or expired. Please generate a new token.');
          console.error(`GitHub API response: ${userResponse.status} ${userResponse.statusText}`);
          
          // Try to get more details about the error
          try {
            const errorData = await userResponse.json();
            console.error('GitHub error details:', errorData);
          } catch (e) {
            console.error('Could not parse error response');
          }
          
          return {
            recentActivity: [],
            contributors: [],
            error: `GitHub authentication failed: Your token is invalid or expired`
          };
        }
        
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo}/commits?per_page=30`,
          { headers }
        );

        // Handle rate limiting
        if (commitsResponse.status === 403) {
          return {
            recentActivity: [],
            contributors: [],
            error: `GitHub API rate limit exceeded. Please try again later.`
          };
        }

        if (!commitsResponse.ok) {
          console.error(
            `Failed to fetch commits for ${repo}: ${commitsResponse.status}`
          );
          continue; // Skip to next repo
        }

        const commits: Commit[] = await commitsResponse.json();

        // Process commits
        commits.forEach((commit) => {
          // Make sure all required fields exist before adding the commit
          if (
            commit.author?.login &&
            commit.author?.avatar_url &&
            commit.commit?.message &&
            commit.commit?.author?.date &&
            commit.html_url &&
            commit.sha
          ) {
            // Extract repository name safely
            const repoParts = repo.split("/");
            const repoName = repoParts.length > 1 ? repoParts[1] : repo;

            // Add to recent activity - using commit.sha as a unique ID
            allCommits.push({
              username: commit.author.login,
              avatar: commit.author.avatar_url,
              message:
                commit.commit.message.split("\n")[0].substring(0, 60) +
                (commit.commit.message.length > 60 ? "..." : ""),
              date: formatDate(commit.commit.author.date),
              repo: repoName,
              url: commit.html_url,
              id: commit.sha,
            });

            // Update contributor stats
            const username = commit.author.login;
            if (!contributorMap[username]) {
              contributorMap[username] = {
                username,
                avatar: commit.author.avatar_url,
                totalCommits: 0,
                repositories: {},
              };
            }
            contributorMap[username].totalCommits += 1;
            contributorMap[username].repositories[repo] =
              (contributorMap[username].repositories[repo] || 0) + 1;
          }
        });

        // Fetch contributors for more accurate commit counts
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repo}/contributors`,
          { headers }
        );

        if (contributorsResponse.ok) {
          const repoContributors: Contributor[] =
            await contributorsResponse.json();

          repoContributors.forEach((contributor) => {
            const username = contributor.login;
            if (!contributorMap[username]) {
              contributorMap[username] = {
                username,
                avatar: contributor.avatar_url,
                totalCommits: 0,
                repositories: {},
              };
            }
            // Update with more accurate count from GitHub
            contributorMap[username].repositories[repo] =
              contributor.contributions;
            contributorMap[username].totalCommits = Object.values(
              contributorMap[username].repositories
            ).reduce((sum, count) => sum + count, 0);
          });
        }
      } catch (repoError) {
        console.error(`Error fetching data for ${repo}:`, repoError);
        // Continue with other repos even if one fails
      }
    }

    // Sort contributors by total commits
    const sortedContributors = Object.values(contributorMap).sort(
      (a, b) => b.totalCommits - a.totalCommits
    );

    // Sort activity by date (recent first)
    const sortedActivity = allCommits
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )

    return {
      recentActivity: sortedActivity,
      contributors: sortedContributors
    };
  } catch (err) {
    console.error("Error fetching GitHub data:", err);
    return {
      recentActivity: [],
      contributors: [],
      error: "Failed to fetch GitHub data. Please try again later."
    };
  }
}