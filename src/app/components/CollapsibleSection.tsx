"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  initiallyExpanded?: boolean;
  className?: string;
}

const CollapsibleSection = ({
  title,
  children,
  initiallyExpanded = true,
  className = "",
}: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`mx-auto w-full mb-6 bg-gray border rounded-md overflow-hidden ${className}`}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer border-b"
        onClick={toggleExpanded}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* Content */}
      {isExpanded && <div className="p-2 sm:p-4 bg-gray-50">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
