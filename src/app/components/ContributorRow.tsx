"use client";

import { X } from "lucide-react";
import SubmitButton from "src/app/components/SubmitButton";

interface ContributorRowProps {
  gitHubUser: string | String;
  asuEmail: string;
  editable?: boolean;
  onEmailChange?: (email: string) => void;
  onRemove?: () => void;
  showRemoveButton?: boolean;
}

const ContributorRow = ({
  gitHubUser,
  asuEmail,
  editable = false,
  onEmailChange,
  onRemove,
  showRemoveButton = false,
}: ContributorRowProps) => {
  return (
    <div className="flex items-center space-x-2">
      {/* GitHub Username */}
      <div className="w-1/3 p-2 bg-white border">{gitHubUser}</div>

      {/* "is" label */}
      <div className="w-8 text-center">is</div>

      {/* ASU Email (editable or read-only) */}
      {editable ? (
        <div className="w-2/3">
          <input
            type="text"
            value={asuEmail}
            onChange={(e) => onEmailChange?.(e.target.value)}
            className="w-full p-2 border"
            placeholder="ASU email"
          />
        </div>
      ) : (
        <div className="w-1/3 p-2 border">{asuEmail}</div>
      )}

      {/* Remove button or "v" indicator */}
      <div className="w-8 text-center">
        {showRemoveButton && (
          <button
            type="button"
            className="text-red-500 hover:text-red-700"
            onClick={onRemove}
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContributorRow;
