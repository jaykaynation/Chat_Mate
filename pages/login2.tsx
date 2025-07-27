import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const credentials = {
  guest: { username: 'guest', password: 'guest123' },
  developer: { username: 'dev', password: 'dev123' },
  recruiter: { username: 'recruiter', password: 'hireme' },
};

const Login2 = () => {
  const router = useRouter();
  const { role } = router.query;
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [roleValidated, setRoleValidated] = useState(false);

  useEffect(() => {
    if (typeof role === 'string' && role in credentials) {
      setError('');
      setRoleValidated(true);
    } else if (role !== undefined) {
      setError('Invalid role selected. Return to login.');
      setRoleValidated(false);
    }
  }, [role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || typeof role !== 'string') return;

    const valid = credentials[role];
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (username === valid.username && password === valid.password) {
        const user = { name: username, role };
        sessionStorage.setItem('chatmate:user', JSON.stringify(user));
        login(user);
        router.push('/dashboard');
      } else {
        setError('Incorrect username or password');
      }
      setLoading(false);
    }, 800);
  };

  if (!roleValidated && !error) {
    return null; // Prevent rendering until role validation is complete
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center capitalize">
          Login as {role}
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Username</label>
          <input
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Authenticating...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login2;
