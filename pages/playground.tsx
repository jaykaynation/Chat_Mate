import { PersonaSelector } from '../components/PersonaSelector';
import { useChatStore } from '../store/chatStore';

export default function PlaygroundPage() {
  const activePersona = useChatStore((s) => s.persona);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Persona Playground</h1>
      <PersonaSelector />
      {activePersona && (
        <div className="p-4 rounded border mt-4 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold">Active Persona: {activePersona.name}</h2>
          <p>{activePersona.greeting}</p>
        </div>
      )}
    </div>
  );
}
