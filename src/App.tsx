import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCREENS, ScreenId } from './types';
import { Header } from './components/Header';
import { SplashScreen } from './components/screens/SplashScreen';
import { HeroScreen } from './components/screens/HeroScreen';
import { SenseScreen } from './components/screens/SenseScreen';
import { ProblemStatementScreen } from './components/screens/ProblemStatementScreen';
import { Step1ProfileScreen } from './components/screens/Step1ProfileScreen';
import { Step2ChemistryScreen } from './components/screens/Step2ChemistryScreen';
import { Step3MatchScreen } from './components/screens/Step3MatchScreen';
import { StoriesScreen } from './components/screens/StoriesScreen';
import { FaqScreen } from './components/screens/FaqScreen';
import { sounds } from './utils/sound';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction === 0 ? 0 : direction > 0 ? 50 : -50,
    opacity: direction === 0 ? 1 : 0,
    scale: direction === 0 ? 1 : 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export const App: React.FC = () => {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const lastNavTimeRef = React.useRef<number>(0);

  // Clean any residual query parameters from previous tests so URL stays clean
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const activeScreen = SCREENS[currentIndex];

  const goToNext = useCallback(() => {
    const now = Date.now();
    if (now - lastNavTimeRef.current < 400) return;
    lastNavTimeRef.current = now;

    sounds.playTap();
    setPage(([curr]) => {
      if (curr < SCREENS.length - 1) {
        return [curr + 1, 1];
      }
      return [curr, 0];
    });
  }, []);

  const goToPrev = useCallback(() => {
    const now = Date.now();
    if (now - lastNavTimeRef.current < 400) return;
    lastNavTimeRef.current = now;

    sounds.playTap();
    setPage(([curr]) => {
      if (curr > 0) {
        return [curr - 1, -1];
      }
      return [curr, 0];
    });
  }, []);

  const resetAll = useCallback(() => {
    sounds.playTap();
    lastNavTimeRef.current = Date.now();
    setPage([0, -1]);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Home') {
        resetAll();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, resetAll]);

  const renderScreen = (id: ScreenId) => {
    switch (id) {
      case 'splash':
        return <SplashScreen onNext={goToNext} />;
      case 'hero':
        return <HeroScreen onNext={goToNext} />;
      case 'sense':
        return <SenseScreen onNext={goToNext} />;
      case 'problem':
        return <ProblemStatementScreen onNext={goToNext} />;
      case 'step1':
        return <Step1ProfileScreen onNext={goToNext} />;
      case 'step2':
        return <Step2ChemistryScreen onNext={goToNext} />;
      case 'step3':
        return <Step3MatchScreen onNext={goToNext} />;
      case 'stories':
        return <StoriesScreen onNext={goToNext} />;
      case 'faq':
        return <FaqScreen onNext={goToNext} />;
      default:
        return null;
    }
  };

  // Determine phone screen background color
  const getScreenBgClass = () => {
    if (activeScreen.id === 'problem') return 'bg-[#0D000C]';
    if (activeScreen.id === 'stories') return 'bg-[#8A0041]';
    if (activeScreen.id === 'splash') return 'bg-gradient-to-b from-[#FACFA9] via-[#FDA7BD] to-[#FF1BB8]';
    return 'bg-[#FAF9F7]';
  };

  // Handle page click to advance unless an interactive control was clicked
  const handlePageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, textarea, select, [role="button"], [data-no-advance="true"]')) {
      return;
    }
    goToNext();
  };

  return (
    <div
      onClick={handlePageClick}
      className={`relative min-h-[100dvh] w-full flex flex-col justify-between transition-colors duration-500 overflow-x-hidden cursor-pointer select-none ${getScreenBgClass()}`}
    >
      {/* Website Header */}
      {activeScreen.id !== 'splash' && (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6">
          <Header
            currentScreen={activeScreen}
            onReset={resetAll}
          />
        </div>
      )}

      {/* Main Animated Screen Stage */}
      <main className="relative flex-1 w-full max-w-4xl mx-auto flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8">
        <div className="w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex items-center justify-center"
            >
              {renderScreen(activeScreen.id)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
