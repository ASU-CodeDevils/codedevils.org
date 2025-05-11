"use client";

import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const SubmitButton = ({
  isLoading = false,
  disabled = false,
  label = "Submit",
  onClick,
  type = "submit",
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-4 py-3 sm:py-2 w-full sm:w-auto bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center transition-colors ${
        disabled || isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {label}
    </button>
  );
};

export default SubmitButton;
