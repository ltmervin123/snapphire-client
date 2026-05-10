import CandidatesClient from "@/components/candidates/CandidatesClient";
import Header from "@/components/candidates/Header";

export default function CandidatesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
      <Header />
      <CandidatesClient />
    </div>
  );
}
