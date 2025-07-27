// context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Variant = 'default' | 'messenger' | 'terminal' | 'ios' | 'minimalist'; // ✅ 'glass' removed, 'minimal' → 'minimalist' for consistency

interface ThemeContextProps {
  theme: Theme;
  variant: Variant;
  toggleTheme: () => void;
  setVariant: (v: Variant) => void;
  animationSpeed: 'normal' | 'fast';
  setAnimationSpeed: (speed: 'normal' | 'fast') => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [variant, setVariantState] = useState<Variant>('default');
  const [animationSpeed, setAnimationSpeedState] = useState<'normal' | 'fast'>('normal');
  const [mounted, setMounted] = useState(false);

  // Load theme settings from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedVariant = localStorage.getItem('variant') as Variant;
    const savedSpeed = localStorage.getItem('animationSpeed') as 'normal' | 'fast';

    if (savedTheme) setTheme(savedTheme);
    if (savedVariant) setVariantState(savedVariant);
    if (savedSpeed) setAnimationSpeedState(savedSpeed);

    setMounted(true);
  }, []);

  // Apply to <html> and persist in localStorage
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('theme', theme);
    localStorage.setItem('variant', variant);
    localStorage.setItem('animationSpeed', animationSpeed);

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, variant, animationSpeed, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setVariant = (v: Variant) => {
    setVariantState(v);
    if (mounted) {
      localStorage.setItem('variant', v);
    }
  };

  const setAnimationSpeed = (speed: 'normal' | 'fast') => {
    setAnimationSpeedState(speed);
    if (mounted) {
      localStorage.setItem('animationSpeed', speed);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        variant,
        toggleTheme,
        setVariant,
        animationSpeed,
        setAnimationSpeed,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
