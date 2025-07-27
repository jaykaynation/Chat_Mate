// components/Layout.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { NavbarWrapper } from './NavbarWrapper';
import { useTheme } from '../context/ThemeContext';

interface Props {
  children: React.ReactNode;
}

const NAVBAR_HEIGHT = 56;

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { theme, variant } = useTheme();

  const getBackgroundClass = () => {
    switch (variant) {
      case 'messenger':
        return theme === 'dark'
          ? 'bg-blue-900 text-white'
          : 'bg-blue-50 text-gray-900';
      case 'terminal':
        return theme === 'dark'
          ? 'bg-black text-green-400'
          : 'bg-green-50 text-green-900';
      case 'ios':
        return theme === 'dark'
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-gray-900';
      case 'minimalist':
        return theme === 'dark'
          ? 'bg-black text-white'
          : 'bg-white text-gray-900';
      default:
        return theme === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-gray-100 text-gray-900';
    }
  };

  return (
    <div
      className={`flex flex-col h-screen transition-colors duration-1000 ${getBackgroundClass()}`}
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarWrapper />
      </div>

      <main className="flex-1 overflow-y-auto pt-[56px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
