import React from "react";
import { TrendingUp } from "lucide-react";

export default function RecruitmentTrend() {
  const trendData = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 80 },
    { day: "Fri", value: 55 },
    { day: "Sat", value: 20 },
    { day: "Sun", value: 15 },
  ];

  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
          <TrendingUp className="mr-2 text-slate-400" size={20} />
          Recruitment Trend (Weekly)
        </h3>
      </div>

      {/* Simple CSS Grid/Bar Chart */}
      <div className="h-64 flex items-end justify-between space-x-2 md:space-x-6 px-2">
        {trendData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-end w-full h-full group"
          >
            <div
              className="w-full bg-blue-100 hover:bg-blue-500 dark:bg-blue-950 dark:hover:bg-blue-600 transition-all rounded-t-md relative"
              style={{ height: `${item.value}%` }}
            >
              <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                {item.value}
              </div>
            </div>
            <span className="text-sm font-medium text-slate-500 mt-4">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
