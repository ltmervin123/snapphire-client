"use client";

import React, { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: string[];
}

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm the SnappHire HR Assistant. I can help answer questions based on your company's uploaded Knowledge Base documents. What can I help you with today?",
    },
    {
      id: "2",
      role: "user",
      content: "What is the policy on taking personal leave?",
    },
    {
      id: "3",
      role: "assistant",
      content:
        "According to the **Employee Handbook 2026**, full-time employees are entitled to 3 days of personal leave per year. Personal leave requires at least 48 hours notice and approval from your direct manager. It cannot be rolled over to the next year.",
      citations: ["Employee Handbook 2026 - Page 14"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm a mock AI assistant. In a real environment, I would perform a retrieval-augmented generation (RAG) query against your documents to answer that. Let me know if you need any other dummy data!",
      };
      setMessages((prev) => [...prev, newAiMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">HR AI Assistant</h1>
          <p className="text-sm text-slate-500">
            Powered by Retrieval-Augmented Generation (RAG)
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-2xl rounded-2xl px-5 py-4 ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-white border text-slate-800 shadow-sm rounded-bl-none"
              }`}
            >
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>

              {/* Citations */}
              {msg.citations && msg.citations.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Sources:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {msg.citations.map((cite, idx) => (
                      <li
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border inline-flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                        {cite}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <form
          onSubmit={handleSendMessage}
          className="max-w-4xl mx-auto flex gap-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question about HR policies..."
            className="flex-1 border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-900"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-indigo-600 text-white rounded-full p-3 h-12 w-12 flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg
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
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
