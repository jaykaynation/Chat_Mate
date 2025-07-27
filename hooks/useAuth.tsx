// // hooks/useAuth.tsx
// import { createContext, useContext, useState, ReactNode } from 'react';

// interface User {
//   name: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// }

// // Create context with default empty functions
// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login: (u: User) => setUser(u),
//         logout: () => setUser(null),
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
