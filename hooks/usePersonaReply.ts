//persona reply component
import { BotPersona } from '../types';

export const usePersonaReply = () => {
  const simulateReply = (persona: BotPersona, input: string): Promise<string> => {
    return new Promise((resolve) => {
      const delay = 1000 + Math.random() * 1000;
      setTimeout(() => {
        const greetings = [
          persona.greeting,
          `Ah, ${persona.name} has something to say...`,
          `${persona.name} replies:`
        ];
        const chosen = greetings[Math.floor(Math.random() * greetings.length)];
        const reply = `${chosen}\n\n${generateResponse(persona, input)}`;
        resolve(reply);
      }, delay);
    });
  };

  const generateResponse = (persona: BotPersona, input: string) => {
    switch (persona.style) {
      case 'poetic':
        return `O user dear, thou asked so wise,\nThine query now meets bot’s reply:\n"${input}", a noble thought,\nIn circuits deep, response is wrought.`;
      case 'technical':
        return `Analyzing "${input}"...\nResponse: Ensure all parameters are optimized and follow proper syntax.`;
      case 'casual':
      default:
        return `Hey! I saw you said "${input}", and that’s cool. Wanna know more? :)`;
    }
  };

  return { simulateReply };
};
