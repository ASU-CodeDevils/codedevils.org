"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative">
      <div className="bg-gray-900 p-3 rounded-b-md overflow-auto font-mono text-black relative group">
        <span className="text-green-400">$</span> {command}
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-black text-xs py-1 px-2 rounded group-hover:opacity-100 transition-opacity flex items-center"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" /> Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CopyCommand;
