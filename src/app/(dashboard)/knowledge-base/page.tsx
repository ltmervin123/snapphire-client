import KnowledgeBaseClient from "@/components/knowledge-base/KnowledgeBaseClient";
import Header from "@/components/knowledge-base/Header";

export default function KnowledgeBasePage() {
  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-8">
      <Header />
      <KnowledgeBaseClient />
    </div>
  );
}
