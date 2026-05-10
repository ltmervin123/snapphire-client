import AiUsageInsights from "@/components/dashboard/ai-usage-insights";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import HiringMetrics from "@/components/dashboard/hiring-metrics";
import RecruitmentTrend from "@/components/dashboard/recruitment-trend";

export default function AnalyticsDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader />
      <HiringMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecruitmentTrend />
        <AiUsageInsights />
      </div>
    </div>
  );
}
