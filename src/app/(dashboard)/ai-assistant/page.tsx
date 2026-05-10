import Header from "@/components/ai-assistant/Header";
import ChatClient from "@/components/ai-assistant/ChatClient";

export default function AiAssistantPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-50">
      <Header />
      <ChatClient />
    </div>
  );
}
