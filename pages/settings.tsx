// pages/settings.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import { Gauge, Moon, Sun } from 'lucide-react';

export default function SettingsPage() {
  const {
    theme,
    toggleTheme,
    animationSpeed,
    setAnimationSpeed,
    mounted,
  } = useTheme();

  const [icon, setIcon] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    setIcon(theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />);
  }, [theme]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Theme toggle */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            {icon}
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Toggle {mounted ? `(${theme})` : ''}
          </button>
        </div>

        {/* Animation speed selector */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Gauge size={18} />
            Animation Speed
          </span>
          <select
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(e.target.value as 'normal' | 'fast')}
            className="rounded border px-3 py-2 pr-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>
      </div>
    </div>
  );
}
