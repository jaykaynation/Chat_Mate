// components/ChatMessageList.tsx
import { useChatStore } from '../store/chatStore';
import ChatMessage from './ChatMessage';

export const ChatMessageList = () => {
  const messages = useChatStore((s) => s.messages);

  return (
    <div className="flex flex-col space-y-2">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} message={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
};
