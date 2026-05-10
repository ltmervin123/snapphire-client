import React from "react";

export default function DashboardHeader() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Analytics Dashboard
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Overview of your recruitment metrics, pipeline trends, and AI
        utilization.
      </p>
    </div>
  );
}
