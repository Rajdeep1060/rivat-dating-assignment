import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

interface ScreenProps {
  onReset: () => void;
}

export const CtaFooterScreen: React.FC<ScreenProps> = ({ onReset }) => {
  const triggerCelebration = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playMatch();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF2E93', '#FF007A', '#3A86FF', '#FFBE0B'],
    });
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col justify-between px-6 py-4 sm:py-8 select-none text-center">
      {/* Top Floating Photo Accents */}
      <div className="relative z-10 w-full flex items-center justify-between pt-1">
        {/* Left Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ type: 'spring', delay: 0.1 }}
          className="w-20 sm:w-24 h-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform -translate-y-1"
        >
          <img
            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=300&q=80"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Center 3D Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF007A] via-[#FF2E93] to-pink-300 p-0.5 shadow-xl shadow-pink-500/40 flex items-center justify-center rotate-6"
        >
          <Heart className="w-6 h-6 fill-white text-white drop-shadow" />
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ type: 'spring', delay: 0.15 }}
          className="w-16 sm:w-20 h-20 sm:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform -translate-y-1"
        >
          <img
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=300&q=80"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main Headline & CTA */}
      <div className="relative z-10 text-center my-auto space-y-3 max-w-xs mx-auto py-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-black text-gray-900 leading-[1.12]"
        >
          Let people find <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6006B] via-[#FF007A] to-pink-500">
            your person.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-gray-600 max-w-[280px] mx-auto leading-relaxed"
        >
          Only people can spot chemistry. That's why Matchers on Rivet vet your matches before you do.
        </motion.p>

        {/* Big Magenta CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="pt-1.5"
        >
          <button
            onClick={triggerCelebration}
            className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#D6006B] via-[#FF007A] to-[#FF2E93] text-white font-black text-xs sm:text-sm shadow-xl shadow-pink-500/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Download Rivet Dating</span>
          </button>
        </motion.div>

        {/* "Get it now" sticker & Social link */}
        <div className="pt-1 flex flex-col items-center gap-1.5">
          <span className="inline-block px-3 py-0.5 rounded-full bg-pink-100 text-[#FF007A] font-black text-[10px] tracking-wide uppercase">
            Get it now
          </span>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-600">
            <Instagram className="w-3.5 h-3.5 text-[#FF2E93]" />
            <span>Follow us on</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#FF2E93] underline hover:text-pink-600"
            >
              @rivetdating
            </a>
          </div>
        </div>
      </div>

      {/* Footer Legal Links & Replay */}
      <div className="relative z-10 pt-3 border-t border-gray-100 flex flex-col items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReset();
          }}
          className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3 text-pink-600" />
          <span>Replay Experience</span>
        </button>

        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-0.5 text-[10px] text-gray-400">
          <span>Terms & Conditions</span>
          <span>•</span>
          <span>Image Guidelines</span>
          <span>•</span>
          <span>Community Guidelines</span>
          <span>•</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
