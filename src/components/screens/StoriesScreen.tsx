import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface ScreenProps {
  onNext: () => void;
}

export const StoriesScreen: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-between px-6 py-6 sm:py-10 select-none text-center text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-pink-400 filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-purple-900 filter blur-3xl opacity-50 pointer-events-none" />

      {/* Top / Middle: Overlapping Tilted Testimonial Cards */}
      <div className="relative z-10 w-full h-[250px] sm:h-[270px] flex items-center justify-center my-auto">
        {/* Left Tilted Card */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -15 }}
          animate={{ opacity: 0.9, x: -30, rotate: -8, y: 10 }}
          transition={{ type: 'spring', damping: 14, stiffness: 100, delay: 0.2 }}
          className="absolute w-44 sm:w-48 h-52 sm:h-56 bg-white text-gray-900 rounded-3xl p-3.5 shadow-xl border border-white/50 flex flex-col justify-between text-left"
        >
          <div>
            <Quote className="w-4 h-4 text-[#FF2E93] fill-pink-100 mb-1" />
            <p className="text-[11px] font-bold text-gray-800 leading-snug line-clamp-3">
              "Felt like our mutual best friends set us up. We skipped the awkward dry texting and met right away."
            </p>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
              alt="Avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <p className="text-[11px] font-bold text-gray-900">Chloe & Sam</p>
              <p className="text-[9px] text-gray-500">San Francisco</p>
            </div>
          </div>
        </motion.div>

        {/* Right / Front Tilted Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 12, y: 30 }}
          animate={{ opacity: 1, scale: 1, rotate: 6, y: -5 }}
          transition={{ type: 'spring', damping: 14, stiffness: 100, delay: 0.3 }}
          className="absolute z-10 w-48 sm:w-52 h-56 sm:h-60 bg-white text-gray-900 rounded-3xl p-4 shadow-2xl flex flex-col justify-between border border-pink-100 text-left"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <Quote className="w-5 h-5 text-[#FF2E93] fill-pink-100" />
              <span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">
                Vetted Match
              </span>
            </div>
            <p className="text-xs font-extrabold text-gray-900 leading-snug italic">
              "He is so not my type usually... but the matchers saw what I missed. Celebrating 6 months together!"
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Maya & Kieran"
              className="w-8 h-8 rounded-full object-cover border-2 border-[#FF2E93]"
            />
            <div>
              <p className="text-xs font-extrabold text-gray-900 leading-tight">
                Maya & Kieran
              </p>
              <p className="text-[10px] text-gray-500">New York</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Headline in Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 max-w-xs mx-auto py-2"
      >
        <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white">
          Real people, <br />
          Real lives, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-100 to-white">
            Real stories.
          </span>
        </h2>
      </motion.div>

      {/* Bottom Button: Get Rivet */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 pt-2 pb-2"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="px-6 py-2.5 rounded-full bg-white text-[#8A0041] text-xs font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          Get Rivet
        </button>
      </motion.div>
    </div>
  );
};

