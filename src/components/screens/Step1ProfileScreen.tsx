import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Pause } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface ScreenProps {
  onNext: () => void;
}

export const Step1ProfileScreen: React.FC<ScreenProps> = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playTap();
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-between px-6 py-4 sm:py-8 select-none text-center">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="text-8xl sm:text-9xl font-black tracking-tighter text-gray-900 rotate-12 sm:rotate-0">
          DATING
        </span>
      </div>

      {/* Main Profile Card Container */}
      <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center my-auto">
        {/* Floating Speech Bubble Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, type: 'spring' }}
          className="self-end mr-2 -mb-2 z-20 px-3.5 py-1.5 rounded-2xl rounded-br-none bg-[#FF2E93] text-white text-[11px] font-bold shadow-lg shadow-pink-500/25"
        >
          Personally fitting, really.
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 14, stiffness: 100, delay: 0.15 }}
          className="w-full bg-white rounded-[32px] p-3 shadow-2xl border border-gray-100"
        >
          {/* Photo */}
          <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80"
              alt="Sander Botscheber"
              className="w-full h-full object-cover"
            />

            {/* Verified Badge */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm">
              <CheckCircle2 className="w-3 h-3 text-[#FF2E93] fill-pink-100" />
              <span className="text-[10px] font-bold text-gray-800">Verified</span>
            </div>

            {/* User Name & Handle */}
            <div className="absolute bottom-2.5 left-3 right-3 text-left text-white drop-shadow-md">
              <h3 className="text-sm font-extrabold leading-tight">Sander Botscheber</h3>
              <p className="text-[11px] text-white/80 font-medium">@digitalhorizon</p>
            </div>
          </div>

          {/* Voice Note Audio Waveform Player */}
          <div className="mt-2.5 px-3 py-2 rounded-2xl bg-[#0A0E12] text-white flex items-center gap-2.5">
            <button
              onClick={toggleAudio}
              className="w-8 h-8 rounded-full bg-[#FF2E93] text-white flex items-center justify-center transition-all shadow-md shadow-pink-500/30 flex-shrink-0 active:scale-95"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
            </button>

            {/* Animated Waveform Bars */}
            <div className="flex-1 flex items-center gap-0.5 h-6 px-1">
              {[40, 75, 55, 90, 60, 30, 85, 45, 100, 65, 40, 80, 50, 70, 35, 60, 45].map((height, idx) => (
                <motion.div
                  key={idx}
                  animate={
                    isPlayingAudio
                      ? {
                          height: [
                            `${Math.max(25, height * 0.4)}%`,
                            `${Math.min(100, height * 1.25)}%`,
                            `${Math.max(20, height * 0.3)}%`,
                          ],
                        }
                      : { height: `${height * 0.6}%` }
                  }
                  transition={
                    isPlayingAudio
                      ? {
                          duration: 0.6 + (idx % 4) * 0.1,
                          repeat: Infinity,
                          repeatType: 'mirror',
                          ease: 'easeInOut',
                        }
                      : { duration: 0.3 }
                  }
                  className="w-1 rounded-full bg-[#FF2E93]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <span className="text-[11px] font-semibold text-white/70 font-mono">
              {isPlayingAudio ? '0:18' : '0:34'}
            </span>
          </div>

          {/* Pink Quote Description Pill */}
          <div className="mt-2 p-2.5 rounded-xl bg-pink-50 border border-pink-100 text-left">
            <p className="text-[11px] text-pink-900 font-medium leading-relaxed">
              Personally fitting, really. No awkward questionnaires—just your natural voice.
            </p>
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
          1
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          Make a profile that <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6006B] to-[#FF007A]">
            feels like you
          </span>
        </h2>
      </motion.div>
    </div>
  );
};

