// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  name: string;
  role?: string;
}

const AuthContext = createContext<{
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from sessionStorage on first mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem('chatmate:user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.name) {
          setUser(parsedUser);
        }
      } catch (err) {
        console.error('Failed to parse stored user:', err);
      }
    }
  }, []);

  const login = (user: User) => {
    sessionStorage.setItem('chatmate:user', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem('chatmate:user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
