// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ThemeProvider } from '../context/ThemeContext';
import { ChatProvider } from '../context/ChatContext';
import { UserProvider } from '../context/UserContext';
import { AuthProvider, useAuth } from '../context/AuthContext';

import '../styles/globals.css';
import Layout from '../components/Layout';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  const publicRoutes = ['/', '/login', '/login2'];
  const isPublic = publicRoutes.includes(router.pathname);

  useEffect(() => {
    if (!user && !isPublic) {
      router.replace('/login');
    }
  }, [user, isPublic, router]);

  if (!user && !isPublic) return null;

  return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ChatMate • AI Chat UI Showcase</title>
        <meta name="description" content="A polished AI chat interface demo project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider>
        <UserProvider>
          <ChatProvider>
            <AuthProvider>
              <Layout>
                <AuthGuard>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={router.route}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Component {...pageProps} />
                    </motion.div>
                  </AnimatePresence>
                </AuthGuard>
              </Layout>
            </AuthProvider>
          </ChatProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
