import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../../utils/sound';

interface ScreenProps {
  onNext: () => void;
}

export const SplashScreen: React.FC<ScreenProps> = ({ onNext }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    onNext();
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 select-none overflow-hidden text-center cursor-pointer"
      style={{
        background: 'linear-gradient(180deg, #FACFA9 0%, #FDA7BD 50%, #FF1BB8 100%)',
      }}
    >
      {/* Subtle ambient glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/40 filter blur-[80px] pointer-events-none"
      />

      {/* Center 3D Puffy Balloon Rivet Logo from Figma */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 25 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            scale: { type: 'spring', damping: 14, stiffness: 100, delay: 0.15 },
            opacity: { duration: 0.4, delay: 0.15 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
          className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] flex items-center justify-center px-4"
        >
          <img
            src="/images/Rivet Logo.svg"
            alt="Rivet"
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(255,27,184,0.35)] filter select-none pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};
