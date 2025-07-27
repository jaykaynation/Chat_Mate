//PersonaSelector Component
import { personas } from '../constants/personas';
import { useChatStore } from '../store/chatStore';

export const PersonaSelector = () => {
  const setPersona = useChatStore((s) => s.setPersona);

  return (
    <div className="grid grid-cols-2 gap-4">
      {personas.map((persona) => (
        <button
          key={persona.name}
          onClick={() => setPersona(persona)}
          className="p-4 rounded border hover:bg-blue-100 dark:hover:bg-blue-900"
        >
          <div className="text-lg font-semibold">{persona.name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{persona.style}</div>
        </button>
      ))}
    </div>
  );
};
