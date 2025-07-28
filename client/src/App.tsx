import { useState } from 'react';
const API = "http://localhost:4000";
import SplashScreen from './screens/SplashScreen';
import LanguageSelect from './screens/LanguageSelect';
import OtpScreen from './screens/OtpScreen';
import MatchingScreen from './screens/MatchingScreen';
import MoodTracker from './screens/MoodTracker';
import CircleList from './screens/CircleList';

export default function App() {
  // Simple état pour naviguer entre les écrans
  const [screen, setScreen] = useState<"splash" | "lang" | "otp" | "match" | "mood" | "circles">("splash");

  const go = (next: Parameters<typeof setScreen>[0]) => setScreen(next);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-[360px] h-[640px] overflow-hidden">
        {screen === "splash" && <SplashScreen />}
        {screen === "lang" && <LanguageSelect />}
        {screen === "otp" && <OtpScreen />}
        {screen === "match" && <MatchingScreen />}
        {screen === "mood" && <MoodTracker />}
        {screen === "circles" && <CircleList />}
      </div>

      {/* Bouton de démo pour changer d'écran */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {["splash", "lang", "otp", "match", "mood", "circles"].map((s) => (
          <button
            key={s}
            onClick={() => go(s as "splash" | "lang" | "otp" | "match" | "mood" | "circles")}
            className="px-2 py-1 bg-emerald-600 text-white text-xs rounded"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}