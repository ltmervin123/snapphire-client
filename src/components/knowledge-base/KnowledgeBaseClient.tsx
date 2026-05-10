"use client";

import { useState } from "react";
import { UploadDocumentModal } from "@/components/knowledge-base/UploadDocumentModal";

interface Document {
  id: number;
  name: string;
  type: string;
  size: string;
  updated: string;
}

export default function KnowledgeBaseClient({
  documents,
}: {
  documents: Document[];
}) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  return (
    <>
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

      <div className="bg-white border rounded-lg shadow-sm overflow-hidden text-sm mt-8">
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
        onClose={() => setIsUploadModalOpen(false)}
        isOpen={isUploadModalOpen}
      />
    </>
  );
}
