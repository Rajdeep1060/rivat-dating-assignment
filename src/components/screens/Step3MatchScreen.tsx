import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

interface ScreenProps {
  onNext: () => void;
}

export const Step3MatchScreen: React.FC<ScreenProps> = () => {
  const [introduced, setIntroduced] = useState(false);

  const handleIntroduce = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playMatch();
    setIntroduced(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#FF2E93', '#FF007A', '#FFB703', '#ffffff'],
    });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-between px-6 py-4 sm:py-8 select-none text-center text-white">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="text-8xl sm:text-9xl font-black tracking-tighter text-white rotate-12 sm:rotate-0">
          DATING
        </span>
      </div>

      {/* Floating 3D Balloons on Left & Right */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-10, 6, -10],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-2 z-20"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF007A] via-[#FF2E93] to-pink-300 p-0.5 shadow-xl shadow-pink-500/40 flex items-center justify-center">
          <Heart className="w-6 h-6 fill-white text-white drop-shadow" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [6, -6, 6],
          rotate: [8, -8, 8],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-2 z-20"
      >
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 p-0.5 shadow-lg shadow-pink-500/30 flex items-center justify-center">
          <Heart className="w-5 h-5 fill-white text-white drop-shadow" />
        </div>
      </motion.div>

      {/* Center Match Preview Card: "Its Riveting Match" */}
      <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 14, stiffness: 100, delay: 0.15 }}
          className="w-full bg-[#1C1826] text-white rounded-[32px] p-4 shadow-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 text-pink-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Its Riveting Match</span>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300">
              98% Approved
            </span>
          </div>

          {/* Matched Couple Photo */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"
              alt="Matched pair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
              <div className="text-left">
                <p className="text-sm font-bold leading-tight">Liam & Chloe</p>
                <p className="text-[11px] text-pink-200">Indie vinyls & trail running</p>
              </div>
            </div>
          </div>

          {/* Action Button: Let's introduce */}
          <button
            onClick={handleIntroduce}
            className={`w-full py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 ${
              introduced
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-gradient-to-r from-[#D6006B] via-[#FF007A] to-[#FF4D8D] text-white shadow-lg shadow-pink-500/40 hover:brightness-105'
            }`}
          >
            {introduced ? (
              <span>🎉 Introduction Sent!</span>
            ) : (
              <>
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Let's introduce</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Bottom Step Indicator & Headline with Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-2 pb-4 max-w-xs mx-auto"
      >
        <div className="w-7 h-7 rounded-full bg-[#FF2E93] text-white flex items-center justify-center text-xs font-black shadow-md shadow-pink-500/30">
          3
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
          Promising pairs <br />
          become introductions
        </h2>
        <p className="text-[11px] text-pink-200/80 leading-relaxed max-w-[260px]">
          When enough people see something there, Rivet introduces them to you. Less endless swiping. More people actually worth meeting.
        </p>
      </motion.div>
    </div>
  );
};

