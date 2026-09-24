import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface ScreenProps {
  onNext: () => void;
}

export const SenseScreen: React.FC<ScreenProps> = () => {
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setFloatingHearts((prev) => [...prev, { id: Date.now(), x, y }]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-between px-6 py-4 sm:py-8 select-none text-center">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="text-8xl sm:text-9xl font-black tracking-tighter text-gray-900 rotate-12 sm:rotate-0">
          DATING
        </span>
      </div>

      {/* Main Couple Photo Card with Floating Speech Bubbles */}
      <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] aspect-[4/4.8] my-auto">
        <div
          onClick={handleCardClick}
          className="relative w-full h-full rounded-[36px] overflow-hidden shadow-2xl bg-white border border-gray-100 cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
            alt="Couple laughing"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Bubble 1: Top Left */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 120, delay: 0.2 }}
            className="absolute top-4 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D88FE] text-white shadow-xl max-w-[200px]"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/40 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-bold leading-tight drop-shadow-sm text-left">
              Some people just make sense.
            </p>
          </motion.div>

          {/* Floating Bubble 2: Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 120, delay: 0.35 }}
            className="absolute bottom-6 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D88FE] text-white shadow-xl max-w-[200px]"
          >
            <p className="text-[11px] font-bold leading-tight drop-shadow-sm text-left">
              Some people just make sense.
            </p>
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/40 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mini Circular Photo Cutout at bottom right edge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-2 -right-2 z-30 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg shadow-pink-500/20"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=200&q=80"
              alt="Friends"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Click Burst Floating Hearts */}
          <AnimatePresence>
            {floatingHearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ opacity: 1, scale: 0.5, x: heart.x - 12, y: heart.y - 12 }}
                animate={{ opacity: 0, scale: 1.8, y: heart.y - 90 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute pointer-events-none z-30"
              >
                <Heart className="w-7 h-7 fill-[#FF2E93] text-[#FF2E93] drop-shadow-lg" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 max-w-xs mx-auto pt-2 pb-4"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          Some people <br />
          <span className="text-[#1D88FE]">just make sense</span>
        </h2>
      </motion.div>
    </div>
  );
};

