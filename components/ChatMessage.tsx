// components/ChatMessage.tsx
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import React from 'react';

type Props = {
  message: string;
  sender: 'user' | 'bot';
};

const ChatMessage = ({ message, sender }: Props) => {
  const isUser = sender === 'user';
  const { variant, theme } = useTheme();

  const baseClasses =
    'max-w-[80%] px-4 py-2 rounded-lg shadow text-sm whitespace-pre-wrap';

  let bubbleStyle = '';

  switch (variant) {
    case 'messenger':
      bubbleStyle = isUser
        ? 'ml-auto bg-blue-600 text-white'
        : theme === 'dark'
        ? 'mr-auto bg-gray-700 text-white'
        : 'mr-auto bg-gray-200 text-gray-900';
      break;

    case 'terminal':
      bubbleStyle = isUser
        ? 'ml-auto bg-green-600 text-black font-mono'
        : theme === 'dark'
        ? 'mr-auto bg-black text-green-400 font-mono'
        : 'mr-auto bg-green-100 text-green-900 font-mono';
      break;

    case 'ios':
      bubbleStyle = isUser
        ? 'ml-auto bg-blue-500 text-white'
        : theme === 'dark'
        ? 'mr-auto bg-gray-500 text-white'
        : 'mr-auto bg-gray-300 text-black';
      break;

    case 'minimalist':
      bubbleStyle = isUser
        ? 'ml-auto bg-transparent text-blue-600 border border-blue-600'
        : theme === 'dark'
        ? 'mr-auto bg-transparent text-gray-200 border border-gray-600'
        : 'mr-auto bg-transparent text-gray-800 border border-gray-400';
      break;

    default:
      bubbleStyle = isUser
        ? 'ml-auto bg-blue-600 text-white'
        : theme === 'dark'
        ? 'mr-auto bg-gray-700 text-white'
        : 'mr-auto bg-gray-200 text-gray-900';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      {...({ className: `${baseClasses} ${bubbleStyle}` } as HTMLMotionProps<"div">)}
    >
      {message}
    </motion.div>
  );
};

export default ChatMessage;
