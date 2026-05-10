import { Message } from "@/hooks/ai-assistant/useAIAssistant";
import React from "react";

export default function ChatArea({ messages }: { messages: Message[] }) {
  return (
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
  );
}
