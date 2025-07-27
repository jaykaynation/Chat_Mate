import React, { useState, useRef, useEffect } from 'react';
import { ChatMessageList } from '../components/ChatMessageList';
import { ChatInput } from '../components/ChatInput';
import { useChatStore } from '../store/chatStore';
import { Bot } from 'lucide-react';

const Home = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { sendMessage, messages } = useChatStore();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!hasInteracted) setHasInteracted(true);
    setLoading(true);
    await sendMessage(input.trim());
    setInput('');
    setLoading(false);
  };

  return (
    <>
      {!hasInteracted && messages.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Bot className="w-32 h-32 text-gray-300 dark:text-zinc-600 opacity-30" />
        </div>
      )}

      <div className="relative h-screen flex flex-col">
        <main className="flex-1 overflow-y-auto p-4 pb-32">
          <ChatMessageList />
          <div ref={bottomRef} />
        </main>

        <ChatInput
          input={input}
          loading={loading}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Home;
