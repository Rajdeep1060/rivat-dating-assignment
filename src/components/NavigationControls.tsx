import React from 'react';

interface NavigationControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <div
      className="absolute inset-0 z-10 cursor-pointer select-none"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Don't intercept if clicking an interactive control
        if (
          target.closest('button') ||
          target.closest('input') ||
          target.closest('a') ||
          target.closest('[role="button"]')
        ) {
          return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;

        // Left 15% edge goes back, remaining 85% advances
        if (clickX < rect.width * 0.15) {
          onPrev();
        } else {
          onNext();
        }
      }}
      title="Click or tap to advance"
    />
  );
};
