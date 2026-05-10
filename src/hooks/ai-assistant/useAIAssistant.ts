"use client";
import { useState } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: string[];
}

export default function useAIAssistant() {
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

  return {
    messages,
    setMessages,
    inputValue,
    setInputValue,
    handleSendMessage,
  };
}
