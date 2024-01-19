import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative flex h-full flex-col rounded-md bg-white p-4 shadow-md md:shadow-2xl">
      {children}
    </div>
  );
};

export default Card;
