import { create } from 'zustand';
import { BotPersona } from '../types';
import { personas } from '../constants/personas';
import simulatePersonaReply from '../utils/fakeAiReply';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

interface ChatStore {
  messages: Message[];
  loading: boolean;
  persona: BotPersona;
  sendMessage: (text: string) => void;
  setPersona: (persona: BotPersona) => void;
  resetChat: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  loading: false,
  persona: personas[0],

  sendMessage: async (text: string) => {
    const { persona, messages } = get();

    const userMessage: Message = { text, sender: 'user' };
    set({ messages: [...messages, userMessage], loading: true });

    try {
      const reply = await simulatePersonaReply(persona, text);
      const botMessage: Message = { text: reply, sender: 'bot' };

      set((state) => ({
        messages: [...state.messages, botMessage],
        loading: false,
      }));
    } catch (error) {
      const errorMessage: Message = {
        text: '⚠️ Error generating response.',
        sender: 'bot',
      };
      set((state) => ({
        messages: [...state.messages, errorMessage],
        loading: false,
      }));
    }
  },

  setPersona: (persona: BotPersona) => {
    set({ persona });
  },

  resetChat: () => {
    set({ messages: [] });
  },
}));
