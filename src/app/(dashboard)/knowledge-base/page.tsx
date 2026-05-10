import React from "react";
import KnowledgeBaseClient from "@/components/knowledge-base/KnowledgeBaseClient";

export default function KnowledgeBasePage() {
  // Simulating data fetch on the server
  const documents = [
    {
      id: 1,
      name: "Employee Handbook 2026",
      type: "PDF",
      size: "2.4 MB",
      updated: "2 days ago",
    },
    {
      id: 2,
      name: "Remote Work Policy",
      type: "PDF",
      size: "1.1 MB",
      updated: "1 week ago",
    },
    {
      id: 3,
      name: "Code of Conduct",
      type: "PDF",
      size: "3.5 MB",
      updated: "1 month ago",
    },
    {
      id: 4,
      name: "Q3 Benefits Overview",
      type: "DOCX",
      size: "800 KB",
      updated: "2 months ago",
    },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-8">
      <KnowledgeBaseClient documents={documents} />
    </div>
  );
}
