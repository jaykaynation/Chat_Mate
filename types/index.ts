// types/index.ts
export type BotPersona = {
  name: string;
  style: 'casual' | 'technical' | 'poetic';
  greeting: string;
  avatar: string;
  colorTheme: string;
};

export type AuthProfile = {
  name: string;
  role: 'Guest' | 'Developer' | 'Recruiter';
  avatar?: string;
};
