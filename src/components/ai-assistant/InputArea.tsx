import React from "react";
interface InputAreaProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function InputArea({
  inputValue,
  setInputValue,
  handleSendMessage,
}: InputAreaProps) {
  return (
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
  );
}
