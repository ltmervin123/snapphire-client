'use client';
import useAIAssistant from "@/hooks/ai-assistant/useAIAssistant";
import ChatArea from "./ChatArea";
import InputArea from "./InputArea";
export default function ChatClient() {
  const {
    messages,
    setMessages,
    inputValue,
    setInputValue,
    handleSendMessage,
  } = useAIAssistant();
  return (
    <>
      <ChatArea messages={messages} />
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
      />
    </>
  );
}
