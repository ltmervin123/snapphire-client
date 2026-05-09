"use client";

import React, { useState } from "react";
import { UploadDocumentModal } from "@/components/knowledge-base/UploadDocumentModal";

export default function KnowledgeBasePage() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Knowledge Base</h1>
          <p className="text-slate-500 mt-1">
            Manage documents that feed the AI assistant.
          </p>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
          Upload Document
        </button>
      </div>

      <div className="bg-white border rounded-lg shadow-sm overflow-hidden text-sm">
        <div className="grid grid-cols-12 bg-slate-50 border-b p-4 font-medium text-slate-600">
          <div className="col-span-6 md:col-span-5">Document Name</div>
          <div className="col-span-3 hidden md:block">Type</div>
          <div className="col-span-2 hidden md:block">Size</div>
          <div className="col-span-6 md:col-span-2 text-right md:text-left">
            Last Updated
          </div>
        </div>
        <div className="divide-y">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="grid grid-cols-12 p-4 items-center hover:bg-slate-50 transition-colors"
            >
              <div className="col-span-6 md:col-span-5 font-medium text-slate-900 flex items-center gap-3">
                <svg
                  className="text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {doc.name}
              </div>
              <div className="col-span-3 hidden md:block text-slate-500">
                {doc.type}
              </div>
              <div className="col-span-2 hidden md:block text-slate-500">
                {doc.size}
              </div>
              <div className="col-span-6 md:col-span-2 text-right md:text-left text-slate-500">
                {doc.updated}
              </div>
            </div>
          ))}
        </div>
      </div>

      <UploadDocumentModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
}
