import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

interface ScreenProps {
  onNext: () => void;
}

export const Step2ChemistryScreen: React.FC<ScreenProps> = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-between px-6 py-4 sm:py-8 select-none text-center">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="text-8xl sm:text-9xl font-black tracking-tighter text-gray-900 rotate-12 sm:rotate-0">
          DATING
        </span>
      </div>

      {/* Main Chemistry Card with 3D Elements */}
      <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] aspect-[4/4.6] my-auto flex items-center justify-center">
        {/* Floating 3D Heart Balloon (Left) */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-8, 4, -8],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -left-3 z-30"
        >
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-3xl bg-gradient-to-tr from-[#D6006B] via-[#FF007A] to-pink-300 p-0.5 shadow-xl shadow-pink-500/40 flex items-center justify-center">
            <Heart className="w-7 h-7 fill-white text-white drop-shadow" />
          </div>
        </motion.div>

        {/* Floating 3D Chrome Cross Token (Bottom Right) */}
        <motion.div
          animate={{
            y: [5, -5, 5],
            rotate: [12, -6, 12],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-3 -right-3 z-30"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-400 p-0.5 shadow-xl flex items-center justify-center text-white border border-white/20">
            <X className="w-6 h-6 stroke-[3]" />
          </div>
        </motion.div>

        {/* Floating Mini Avatar Top Right */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-2 right-4 z-30 w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md shadow-pink-900/20"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Matcher avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Main Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 14, stiffness: 100, delay: 0.15 }}
          className="w-full h-full bg-white rounded-[34px] p-3 shadow-2xl border border-gray-100"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=800&q=80"
              alt="Chemistry friends"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Step Indicator & Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-2 pb-4"
      >
        <div className="w-7 h-7 rounded-full bg-[#FF2E93] text-white flex items-center justify-center text-xs font-black shadow-md shadow-pink-500/30">
          2
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          Let people spot the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6006B] to-[#FF007A]">
            chemistry
          </span>
        </h2>
      </motion.div>
    </div>
  );
};

