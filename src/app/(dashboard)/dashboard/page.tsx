import React from "react";
import { Users, Briefcase, Zap, Brain, TrendingUp, Clock } from "lucide-react";

export default function AnalyticsDashboardPage() {
  // Mock data for Hiring Metrics
  const hiringStats = [
    { label: "Total Candidates", value: "1,248", change: "+12%", icon: Users },
    { label: "Active Interviews", value: "42", change: "+4", icon: Briefcase },
    { label: "AI Matches", value: "156", change: "+28%", icon: Zap },
  ];

  // Mock data for AI Usage Insights
  const aiInsights = [
    { label: "Resumes Processed", value: "843", icon: Brain },
    { label: "Est. Time Saved", value: "142 hrs", icon: Clock },
  ];

  // Mock data for Recruitment Trend
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
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Overview of your recruitment metrics, pipeline trends, and AI
          utilization.
        </p>
      </div>

      {/* Hiring Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hiringStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4 hover:border-blue-500/50 transition-colors"
          >
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
              <div className="flex items-baseline space-x-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </h2>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recruitment Trend Mockup */}
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
                className="flex flex-col items-center w-full group"
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

        {/* AI Usage Insights */}
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
      </div>
    </div>
  );
}
