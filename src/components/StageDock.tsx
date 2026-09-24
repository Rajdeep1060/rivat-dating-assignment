import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SCREENS, ScreenMetadata } from '../types';

interface StageDockProps {
  currentIndex: number;
  currentScreen: ScreenMetadata;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export const StageDock: React.FC<StageDockProps> = ({
  currentIndex,
  currentScreen,
  onPrev,
  onNext,
  onSelect,
}) => {
  const isDark = currentScreen.theme === 'dark' || currentScreen.theme === 'gradient';

  return (
    <div className="relative z-40 w-full max-w-2xl mx-auto px-4 pb-4 select-none flex flex-col items-center gap-2">
      {/* Interactive Dock Pill */}
      <div
        className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-white/10 backdrop-blur-[24px] border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white'
            : 'bg-white/80 backdrop-blur-[24px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-gray-800'
        }`}
      >
        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={currentIndex === 0}
          className={`p-1.5 rounded-full transition-all disabled:opacity-20 hover:scale-110 active:scale-95 ${
            isDark ? 'hover:bg-white/15' : 'hover:bg-black/5'
          }`}
          title="Previous (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Screen Dots Indicator */}
        <div className="flex items-center gap-1 sm:gap-1.5 px-1 sm:px-2">
          {SCREENS.map((screen, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={screen.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(idx);
                }}
                className={`group relative py-2 px-0.5 focus:outline-none transition-all`}
                title={`${idx + 1}. ${screen.title}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-6 sm:w-8 h-2 bg-gradient-to-r from-[#FF007A] to-[#FF1BB8] shadow-sm shadow-pink-500/50'
                      : isDark
                      ? 'w-2 h-2 bg-white/25 hover:bg-white/60'
                      : 'w-2 h-2 bg-black/20 hover:bg-black/50'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={currentIndex === SCREENS.length - 1}
          className={`p-1.5 rounded-full transition-all disabled:opacity-20 hover:scale-110 active:scale-95 ${
            isDark ? 'hover:bg-white/15' : 'hover:bg-black/5'
          }`}
          title="Next (Space or Right Arrow)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Keyboard Helper text */}
      <div
        className={`text-[11px] font-medium tracking-wide transition-colors ${
          isDark ? 'text-white/40' : 'text-gray-400'
        }`}
      >
        <span>Press </span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[10px] font-mono">
          Space
        </kbd>
        <span> or </span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[10px] font-mono">
          →
        </kbd>
        <span> to advance</span>
      </div>
    </div>
  );
};
