import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubData } from '../../api/github/github-service';

export async function GET(request: NextRequest) {
  console.log("GitHub API route called");
  
  // Debug token presence
  const hasToken = !!process.env.GITHUB_TOKEN;
  console.log(`GitHub token exists: ${hasToken}`);
  
  // Get repos from URL query parameters
  const url = new URL(request.url);
  const reposParam = url.searchParams.get('repos');
  
  if (!reposParam) {
    console.log("Error: No repositories specified in request");
    return NextResponse.json(
      { error: 'No repositories specified' },
      { status: 400 }
    );
  }

  // Parse the repos parameter
  const repos = reposParam.split(',');
  console.log(`Fetching data for repositories: ${repos.join(', ')}`);
  
  // Fetch the GitHub data
  console.time('GitHub API fetch duration');
  const data = await fetchGitHubData(repos);
  console.timeEnd('GitHub API fetch duration');
  
  // Log results summary without exposing sensitive data
  console.log(`API results: ${data.recentActivity.length} activities, ${data.contributors.length} contributors, authenticated: ${data.usingAuthentication}, error: ${data.error ? 'yes' : 'no'}`);
  
  // Log repository status
  if (data.repoStatuses && data.repoStatuses.length > 0) {
    console.log("Repository status summary:");
    data.repoStatuses.forEach(status => {
      console.log(`- ${status.name}: ${status.isAccessible ? 'OK' : `Error (${status.errorCode}): ${status.errorMessage}`}`);
    });
  }
  
  // Return the data
  return NextResponse.json(data);
}