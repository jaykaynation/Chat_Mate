// navbar.tsx
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Paintbrush,
  Play,
  Settings,
  Info,
  LogOut,
  LogIn,
  LayoutDashboard,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const NAVBAR_HEIGHT = 56;

export const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const { user, logout } = useAuth();
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIcon(theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />);
  }, [theme]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md relative z-50" style={{ height: NAVBAR_HEIGHT }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <Link href="/" className="text-xl font-bold">
          ChatMate
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-4 items-center h-full">
          <Link href="/" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Home size={18} /> Home
          </Link>
          <Link href="/themes" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Paintbrush size={18} /> Themes
          </Link>
          <Link href="/playground" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Play size={18} /> Playground
          </Link>
          <Link href="/settings" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Settings size={18} /> Settings
          </Link>
          <Link href="/about" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Info size={18} /> About
          </Link>

          {user && (
            <Link href="/dashboard" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          )}

          {!user ? (
            <Link href="/login" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <LogIn size={18} /> Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <LogOut size={18} /> Logout
            </button>
          )}

          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {icon}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex flex-col space-y-4"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="self-end mb-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <X size={20} />
            </button>

            <Link href="/" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
              <Home size={18} /> Home
            </Link>
            <Link href="/themes" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
              <Paintbrush size={18} /> Themes
            </Link>
            <Link href="/playground" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
              <Play size={18} /> Playground
            </Link>
            <Link href="/settings" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
              <Settings size={18} /> Settings
            </Link>
            <Link href="/about" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
              <Info size={18} /> About
            </Link>

            {user && (
              <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" onClick={handleLinkClick}>
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            )}

            {!user ? (
              <Link
                href="/login"
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={handleLinkClick}
              >
                <LogIn size={18} /> Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  handleLinkClick();
                }}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <LogOut size={18} /> Logout
              </button>
            )}

            {mounted && (
              <button
                onClick={() => {
                  toggleTheme();
                  handleLinkClick();
                }}
                aria-label="Toggle Theme"
                className="mt-4 flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
