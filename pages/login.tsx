// pages/login.tsx
import React from 'react';
import AuthCard from '@/components/AuthCard'; // ✅ Make sure this file exists
import { useRouter } from 'next/router';
import { AuthProfile } from '@/types';

const profiles: AuthProfile[] = [
  { name: 'Guest', role: 'Guest' },
  { name: 'Dev Ninja', role: 'Developer' },
  { name: 'Recruiter Jane', role: 'Recruiter' },
];

const LoginPage = () => {
  const router = useRouter();

  const handleSelect = (profile: AuthProfile) => {
    sessionStorage.setItem('chatmate:user', JSON.stringify(profile));

    // Redirect to /login2 with selected role in query string
    router.push({
      pathname: '/login2',
      query: { role: profile.role.toLowerCase() },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
        {profiles.map((p) => (
          <AuthCard key={p.name} profile={p} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
