"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import {
  CommitActivity,
  ContributorStats,
} from "../../api/github/github-service";

const DEFAULT_REPOS = [
  "ASU-CodeDevils/CD-Academy",
  "ASU-CodeDevils/codedevils.org",
  "ASU-CodeDevils/CD-GameDev",
  "ASU-CodeDevils/CD-Mobile",
  "ASU-CodeDevils/scraper.codedevils.org",
];

const GitLeaderboard = ({
  className,
  repos = DEFAULT_REPOS,
}: {
  className?: string;
  repos?: string[];
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recentActivity, setRecentActivity] = useState<CommitActivity[]>([]);
  const [contributors, setContributors] = useState<ContributorStats[]>([]);
  const [usingAuth, setUsingAuth] = useState<boolean>(false);
  const [rateLimit, setRateLimit] = useState<{
    limit: number;
    remaining: number;
    reset: string;
  } | null>(null);

  // Function to fetch data from our API endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Prepare the repositories parameter
        const reposParam = repos.join(",");

        // Call our API endpoint
        const response = await fetch(
          `/api/github?repos=${encodeURIComponent(reposParam)}`
        );
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          setLoading(false);
          return;
        }

        // Map the contributor data to include the profile URLs
        const contributorsWithProfiles = (data.contributors || []).map(
          (contributor: ContributorStats) => ({
            ...contributor,
            profileUrl: `https://github.com/${contributor.username}`,
          })
        );

        setRecentActivity(data.recentActivity || []);
        setContributors(contributorsWithProfiles || []);
        setRateLimit(data.rateLimit || null);
        setUsingAuth(data.usingAuthentication || false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [repos]); // Re-run when repos change

  return (
    <div className={`flex flex-col ${className} `}>
      <div className="flex flex-col h-full w-full bg-gray-200 rounded-lg shadow-md overflow-hidden ">
        <h2 className="text-3xl font-bold py-4 self-center flex items-center ">
          <Activity className="mr-2" /> Leaderboard
        </h2>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-700 mb-4"></div>
              <p className="ml-3">Loading contributors data...</p>
            </div>
          ) : error ? (
            <div className="bg-gray-300 p-4 rounded">
              <p className="text-red-700">{error}</p>
              {!usingAuth && (
                <p className="text-gray-700 text-sm mt-2">
                  Consider adding a GitHub token to increase rate limits.
                </p>
              )}
            </div>
          ) : contributors.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-64">
              <Activity className="h-12 w-12 text-gray-500 mb-2" />
              <p className="text-gray-700">No contributor data available</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-200 relative before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-purple-400 before:via-purple-600 before:to-indigo-400 before:rounded-full">
                <thead className="bg-gray-300 sticky top-0 z-10 ">
                  <tr>
                    <th className="py-3 px-4 text-left">Rank</th>
                    <th className="py-3 px-4 text-left">Contributor</th>
                    <th className="py-3 px-4 text-right">Total Commits</th>
                    <th className="py-3 px-4 text-left">Repositories</th>
                  </tr>
                </thead>
                <tbody>
                  {contributors
                    .sort((a, b) => b.totalCommits - a.totalCommits)
                    .map((contributor, index) => (
                      <tr
                        key={`${contributor.username}-${index}`}
                        className={
                          index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
                        }
                      >
                        <td className="py-3 px-4">{index + 1}</td>
                        <td className="py-3 px-4">
                          <a
                            href={contributor.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline"
                          >
                            {contributor.avatar && (
                              <Image
                                src={contributor.avatar}
                                alt={`${contributor.username}'s avatar`}
                                width={24}
                                height={24}
                                className="rounded-full mr-2"
                              />
                            )}
                            {contributor.username}
                          </a>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {contributor.totalCommits}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {Object.entries(contributor.repositories).map(
                              ([repo, commits]) => {
                                // Extract the repo name from the full path
                                const repoName = repo.split("/")[1] || repo;
                                // Create full GitHub repo URL
                                const repoUrl = `https://github.com/${repo}`;
                                return (
                                  <a
                                    key={repo}
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-asumaroon-500 hover:bg-asumaroon-600 text-white text-xs px-2 py-1 rounded transition-colors duration-200"
                                    title={`${commits} commits to ${repo}`}
                                  >
                                    {repoName} ({commits})
                                  </a>
                                );
                              }
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default GitLeaderboard;
