// components/AuthCard.tsx
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import React from 'react';

type AuthProfile = {
  name: string;
  role: 'Guest' | 'Developer' | 'Recruiter';
  avatar?: string;
};

type Props = {
  profile: AuthProfile;
  onSelect: (profile: AuthProfile) => void;
};

const AuthCard: React.FC<Props> = ({ profile, onSelect }) => {
  return (
    <div
      className="cursor-pointer bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition"
      onClick={() => onSelect(profile)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
      {profile.avatar ? (
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full mb-4"
        />
      ) : (
        <User className="w-16 h-16 text-zinc-500 dark:text-zinc-300 mb-4" />
      )}
      <h3 className="text-lg font-semibold">{profile.name}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.role}</p>
      </motion.div>
    </div>
  );
};

export default AuthCard;
