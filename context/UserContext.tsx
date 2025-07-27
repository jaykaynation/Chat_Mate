// context/UserContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type User = {
  name: string;
  role: 'Guest' | 'Developer' | 'Recruiter';
  avatar?: string;
} | null;

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('chatmate:user');
    if (stored) setUserState(JSON.parse(stored));
  }, []);

  const setUser = (newUser: User) => {
    setUserState(newUser);
    if (newUser) {
      sessionStorage.setItem('chatmate:user', JSON.stringify(newUser));
    } else {
      sessionStorage.removeItem('chatmate:user');
    }
  };

  const clearUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
