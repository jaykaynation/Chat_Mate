import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChatMe</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
        A minimal, modern chat experience powered by AI.
      </p>
      <div className="space-x-4">
        {!user && (
          <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Login
          </Link>
        )}
        <Link href="/dashboard" className="bg-gray-200 dark:bg-zinc-700 px-6 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
