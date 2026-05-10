import React from "react";
import { Brain, Clock } from "lucide-react";

export default function AiUsageInsights() {
  const aiInsights = [
    { label: "Resumes Processed", value: "843", icon: Brain },
    { label: "Est. Time Saved", value: "142 hrs", icon: Clock },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
        <Brain className="mr-2 text-indigo-500" size={20} />
        AI Usage Insights
      </h3>
      <div className="space-y-6 flex-grow">
        {aiInsights.map((insight, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
              <insight.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {insight.label}
              </p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {insight.value}
              </h4>
            </div>
          </div>
        ))}

        <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Match Accuracy Rate
            </p>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-1 rounded-full">
              Optimal
            </span>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            94%
          </h4>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{ width: "94%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
