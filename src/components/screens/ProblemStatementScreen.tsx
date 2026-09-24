import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ScreenProps {
  onNext: () => void;
}

export const ProblemStatementScreen: React.FC<ScreenProps> = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col justify-between px-6 py-6 sm:py-10 select-none text-left text-white">
      {/* Radiant Magenta Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FF007A] via-[#9B0050] to-[#FF2E93] filter blur-[80px] pointer-events-none"
      />

      {/* Top Floating Mini Cutouts and 3D Heart Balloon */}
      <div className="relative z-10 w-full flex items-center justify-between pt-2">
        {/* Floating Mini Photo 1 */}
        <motion.div
          animate={{ y: [-4, 4, -4], rotate: [-8, -2, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shadow-pink-900/40"
        >
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
            alt="Person"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 3D Floating Foil Heart Balloon */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [4, -4, 4],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF007A] via-[#FF2E93] to-pink-300 p-0.5 shadow-2xl shadow-pink-500/60 flex items-center justify-center rotate-6">
            <Heart className="w-8 h-8 fill-white text-white drop-shadow-md" />
          </div>
        </motion.div>

        {/* Floating Mini Photo 2 */}
        <motion.div
          animate={{ y: [4, -4, 4], rotate: [8, 2, 8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shadow-pink-900/40"
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
            alt="Person"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main Narrative Display Typography */}
      <div className="relative z-10 my-auto space-y-4 py-4 max-w-sm">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.18] text-white"
        >
          Every love story <br />
          used to have <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-white">
            witnesses.
          </span>{' '}
          Now <br />
          the search <br />
          happens alone, on <br />
          a screen built <br />
          for one.
        </motion.h2>

        {/* Floating Avatars / Witnesses */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-2 flex items-center gap-2.5"
        >
          <div className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
              'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Witness"
                className="w-7 h-7 rounded-full border-2 border-[#180010] object-cover"
              />
            ))}
          </div>
          <span className="text-[11px] text-pink-200 font-medium">
            Join thousands of real matchers
          </span>
        </motion.div>
      </div>

      {/* Bottom Subtitle Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-left"
      >
        <span className="text-[11px] uppercase tracking-widest text-pink-400 font-bold">
          Rivet brings the human village back
        </span>
      </motion.div>
    </div>
  );
};

