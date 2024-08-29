import { NextRequest, NextResponse } from "next/server";

interface RateLimitOptions {
  windowMs: number; // Window duration in milliseconds
  max: number; // Maximum number of requests per window
}

// Simple in-memory store for rate limiting (not for production use)
const requestCounts: Record<string, { count: number; lastRequest: number }> =
  {};

function rateLimit(options: RateLimitOptions) {
  return {
    async check(req: NextRequest) {
      const ip =
        req.headers.get("x-forwarded-for") ||
        req.headers.get("remote-addr") ||
        "unknown";

      const currentTime = Date.now();
      const requestCount = requestCounts[ip] || {
        count: 0,
        lastRequest: currentTime,
      };

      // Check if the time window has passed
      if (currentTime - requestCount.lastRequest > options.windowMs) {
        requestCount.count = 1; // Reset count
        requestCount.lastRequest = currentTime; // Update the last request time
      } else {
        requestCount.count++;
      }

      // Update the store
      requestCounts[ip] = requestCount;

      // Check if the maximum request limit has been exceeded
      if (requestCount.count > options.max) {
        return NextResponse.json(
          { error: "Too many requests, please try again later." },
          { status: 429 }
        );
      }
    },
  };
}

export default rateLimit;
