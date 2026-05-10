import { Users, Briefcase, Zap } from "lucide-react";

export default function HiringMetrics() {
  const hiringStats = [
    { label: "Total Candidates", value: "1,248", change: "+12%", icon: Users },
    { label: "Active Interviews", value: "42", change: "+4", icon: Briefcase },
    { label: "AI Matches", value: "156", change: "+28%", icon: Zap },
  ];

  return (
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
  );
}
