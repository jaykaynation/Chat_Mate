// bot personas
import { BotPersona } from '../types';

export const personas: BotPersona[] = [
  {
    name: 'ShakespeareBot',
    style: 'poetic',
    greeting: 'Hark! I am here to answer thee.',
    avatar: '/avatars/shakespeare.png',
    colorTheme: 'rose',
  },
  {
    name: 'TechSupportBot',
    style: 'technical',
    greeting: 'Hello, I am here to assist with technical issues.',
    avatar: '/avatars/tech.png',
    colorTheme: 'blue',
  },
  {
    name: 'FriendBot',
    style: 'casual',
    greeting: 'Hey buddy! Let’s chat 🙂',
    avatar: '/avatars/friend.png',
    colorTheme: 'green',
  },
];
