// chat input
import { Send, Loader2 } from 'lucide-react';

interface Props {
  input: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInput = ({ input, loading, onChange, onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="fixed bottom-0 left-0 w-full px-4 py-3 border-t bg-white dark:bg-gray-800 z-50"
    >
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 border-gray-300 dark:border-gray-600"
          placeholder="Type your message…"
          value={input}
          onChange={onChange}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white p-2 rounded-lg flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <Send className="h-5 w-5" />}
        </button>
      </div>
    </form>
  );
};
