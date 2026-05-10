import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Recruitment Board
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track applications across hiring stages.
        </p>
      </div>
    </div>
  );
}
