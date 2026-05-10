import Header from "@/components/recruitment/Header";
import RecruitmentClient from "@/components/recruitment/RecruitmentClient";
export default function RecruitmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto w-full h-full flex flex-col space-y-6">
      <Header />
      <RecruitmentClient />
    </div>
  );
}
