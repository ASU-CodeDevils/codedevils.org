"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  User,
  GitCommit,
  Activity,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
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

const GitMonitor = ({
  className,
  repos = DEFAULT_REPOS,
  remove_selection = false,
}: {
  className?: string;
  repos?: string[];
  remove_selection?: boolean;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [recentActivity, setRecentActivity] = useState<CommitActivity[]>([]);
  const [contributors, setContributors] = useState<ContributorStats[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("all");
  const [usingAuth, setUsingAuth] = useState<boolean>(false);
  const [rateLimit, setRateLimit] = useState<{
    limit: number;
    remaining: number;
    reset: string;
  } | null>(null);
  const [showRepoStatus, setShowRepoStatus] = useState<boolean>(false);

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

        setRecentActivity(data.recentActivity || []);
        setContributors(data.contributors || []);

        // Use the authentication status directly from the API response
        setUsingAuth(data.usingAuthentication || false);

        // Set rate limit info if available
        if (data.rateLimit) {
          setRateLimit(data.rateLimit);
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch GitHub data. Please try again later.");
        setLoading(false);
        console.error("Error fetching GitHub data:", err);
      }
    };

    fetchData();
  }, [repos]);

  // Filter activity based on selected repository
  const filteredActivity =
    selectedRepo === "all"
      ? recentActivity
      : recentActivity.filter((activity) => {
          const selectedRepoShortName = selectedRepo.split("/")[1] || "";
          // Compare with the activity's repo field
          return activity.repo === selectedRepoShortName;
        });

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`flex items-center justify-between h-[80px] w-full rounded-t-xl
             font-semibold text-2xl shadow-xl shadow-slate-700
             bg-gradient-to-r from-slate-950 to-zinc-800 text-white px-4
             ${remove_selection ? "invisible" : "visible"}`}
      >
        <div className="flex items-center gap-2">
          <span>Git Activity</span>
        </div>

        <select
          value={selectedRepo}
          onChange={(e) => setSelectedRepo(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm font-normal"
        >
          <option value="all">All Repositories</option>
          {repos.map((repo) => {
            const repoParts = repo.split("/");
            const repoName = repoParts.length > 1 ? repoParts[1] : repo;
            return (
              <option key={repo} value={repo}>
                {repoName}
              </option>
            );
          })}
        </select>
      </div>

      <div
        className="h-[600px] w-full rounded-b-2xl shadow-lg shadow-slate-500 p-4
                     bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-auto"
      >
        {loading ? (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
            <p className="text-white text-sm">Fetching repository data...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col justify-center items-center h-full">
            <Activity className="h-12 w-12 text-red-400 mb-2" />
            <p className="text-red-400 text-center">{error}</p>
            {!usingAuth && (
              <p className="text-slate-400 text-sm text-center mt-2">
                Consider adding a GitHub token to increase rate limits.
              </p>
            )}
          </div>
        ) : filteredActivity.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full">
            <Activity className="h-12 w-12 text-slate-500 mb-2" />
            <p className="text-white opacity-80">No activity yet...</p>

            {selectedRepo !== "all" && (
              <div className="text-slate-400 text-sm text-center mt-2">
                <p className="text-slate-400">
                  Selected repository: {selectedRepo}
                </p>
                <p className="text-slate-400">
                  This repository might not have any recent activity or the
                  repository name might be different in the activity data.
                </p>
                <p className="mt-2 text-slate-400">
                  Repositories in activity data:
                </p>
                <div className="mt-1 flex flex-wrap gap-1 justify-center">
                  {[...new Set(recentActivity.map((a) => a.repo))].map(
                    (repo) => (
                      <span
                        key={repo}
                        className="bg-slate-700/30 px-2 py-1 rounded text-xs"
                      >
                        {repo}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {!usingAuth && (
              <p className="text-slate-400 text-sm text-center mt-2">
                GitHub API rate limit may have been exceeded.
                <br />
                Consider adding a GitHub token for higher limits.
              </p>
            )}
          </div>
        ) : (
          <>
            {/* Repository selection info */}
            {selectedRepo !== "all" && (
              <div className="mb-3 flex items-center">
                <span className="text-xs text-slate-400">
                  Showing activity for:{" "}
                  <span className="text-blue-400">
                    {selectedRepo.split("/")[1]}
                  </span>
                </span>
                <span className="text-xs text-slate-400 ml-2">
                  ({filteredActivity.length} activities)
                </span>
              </div>
            )}

            {/* Recent Activity (with proper keys) */}
            <h3 className="text-white text-sm font-medium mb-2 border-b border-slate-700/50 pb-1">
              Recent Activity
            </h3>
            <ul className="space-y-1">
              {filteredActivity.map((activity) => (
                <li
                  key={activity.id} // Using commit SHA as key
                  className="relative flex items-center w-full py-3 px-2 border-b border-slate-700/40 hover:bg-slate-700/20 transition-colors"
                >
                  <Image
                    src={activity.avatar}
                    alt={activity.username}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center text-sm">
                      <span className="text-white font-medium mr-2">
                        {activity.username}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {activity.repo} • {activity.date}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm mt-1 truncate">
                      {activity.message}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default GitMonitor;
