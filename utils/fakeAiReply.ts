// utils/fakeAiReply.ts

import type { BotPersona } from '../types';

/**
 * Generates a fake AI response with optional persona.
 * If persona is provided, adjusts tone accordingly.
 */
export const simulatePersonaReply = async (
  persona: BotPersona | null,
  message: string
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = '';

      switch (persona?.style) {
        case 'technical':
          response = `Analyzing input... Based on your message, here’s a detailed explanation.`;
          break;
        case 'poetic':
          response = `Ah, dear soul, you speak with grace. Let me respond in kind.`;
          break;
        case 'casual':
          response = `Hey! Here's what I think: ${message}`;
          break;
        default:
          response = `AI response to: "${message}"`;
      }

      resolve(response);
    }, 1200 + Math.random() * 800); // adds fake delay
  });
};

// For legacy imports
export const fakeAiReply = async (message: string): Promise<string> => {
  return simulatePersonaReply(null, message);
};

export default simulatePersonaReply;
