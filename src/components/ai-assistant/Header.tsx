import React from "react";

export default function Header() {
  return (
    <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-slate-900">HR AI Assistant</h1>
        <p className="text-sm text-slate-500">
          Powered by Retrieval-Augmented Generation (RAG)
        </p>
      </div>
    </div>
  );
}
