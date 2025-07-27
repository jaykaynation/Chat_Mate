import { themes } from '../constants/themes';
import { useTheme } from '../context/ThemeContext';

export const ThemePreview = () => {
  const { setVariant, theme } = useTheme();

  const getCardStyle = (name: string) => {
    switch (name) {
      case 'messenger':
        return theme === 'dark'
          ? 'bg-blue-800 text-white hover:bg-blue-700'
          : 'bg-blue-100 text-blue-900 hover:bg-blue-200';

      case 'terminal':
        return theme === 'dark'
          ? 'bg-black text-green-400 hover:bg-gray-900'
          : 'bg-green-100 text-green-900 hover:bg-green-200';

      case 'glass':
        return 'bg-white/10 backdrop-blur-md border border-white/10 text-white';

      case 'ios':
        return theme === 'dark'
          ? 'bg-gray-700 text-white hover:bg-gray-600'
          : 'bg-gray-100 text-black hover:bg-gray-200';

      case 'minimalist':
        return theme === 'dark'
          ? 'bg-black text-white border border-gray-700'
          : 'bg-white text-black border border-gray-300';

      default:
        return theme === 'dark'
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'bg-gray-100 text-black hover:bg-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {themes.map((themeOption) => (
        <div
          key={themeOption.name}
          onClick={() => setVariant(themeOption.name)}
          className={`p-4 rounded cursor-pointer transition duration-200 ${getCardStyle(
            themeOption.name
          )}`}
        >
          <h3 className="font-bold">{themeOption.label}</h3>
          <p className="text-sm opacity-80">{themeOption.description}</p>
        </div>
      ))}
    </div>
  );
};
