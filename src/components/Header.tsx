import React from 'react';
import { Menu, Play, Apple } from 'lucide-react';
import { ScreenMetadata } from '../types';

interface HeaderProps {
  currentScreen: ScreenMetadata;
  currentIndex?: number;
  totalScreens?: number;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onReset,
}) => {
  const isDark = currentScreen.theme === 'dark' || currentScreen.theme === 'gradient';

  return (
    <header className="relative z-30 w-full flex items-center justify-between px-4 sm:px-6 pt-3 pb-2 select-none">
      {/* Left: Menu button matching screenshot */}
      <button
        onClick={onReset}
        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 ${
          isDark
            ? 'bg-white/10 border border-white/15 text-white hover:bg-white/20'
            : 'bg-white border border-gray-100 text-gray-800 hover:bg-gray-50'
        }`}
        title="Menu / Reset"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Center: Brand cursive logo */}
      <button
        onClick={onReset}
        className="group flex items-center focus:outline-none transition-transform active:scale-95"
        title="Rivet Home"
      >
        <span
          className={`text-3xl sm:text-4xl font-bold tracking-tight font-rivet-logo transition-colors ${
            isDark ? 'text-white' : 'text-[#111116]'
          }`}
        >
          Rivet
        </span>
      </button>

      {/* Right: App store pill */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl shadow-sm transition-colors ${
          isDark
            ? 'bg-white/10 border border-white/15 text-white'
            : 'bg-white border border-gray-100 text-gray-800'
        }`}
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        <Apple className="w-4 h-4 fill-current" />
      </div>
    </header>
  );
};


