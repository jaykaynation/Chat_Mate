import { ThemePreview } from '../components/ThemePreview';

export default function ThemesPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Theme Gallery</h1>
      <ThemePreview />
    </div>
  );
}
