import React from 'react';
import { Apple, Play } from 'lucide-react';

interface ScreenProps {
  onNext: () => void;
}

export const HeroScreen: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div
      data-no-advance="true"
      className="relative w-full max-w-xl mx-auto min-h-[660px] sm:min-h-[720px] md:min-h-[760px] flex flex-col items-center justify-center px-4 py-8 select-none text-center"
    >
      <style>{`
        @keyframes heroCornerTL {
          0% {
            opacity: 0;
            transform: translate3d(-40px, -35px, 0) scale(0.88);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes heroCornerTR {
          0% {
            opacity: 0;
            transform: translate3d(40px, -35px, 0) scale(0.88);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes heroCornerBL {
          0% {
            opacity: 0;
            transform: translate3d(-40px, 35px, 0) scale(0.88);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes heroCornerBR {
          0% {
            opacity: 0;
            transform: translate3d(40px, 35px, 0) scale(0.88);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes heroFloatTL {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.6deg); }
        }
        @keyframes heroFloatTR {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(6px) rotate(-0.6deg); }
        }
        @keyframes heroFloatBL {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-0.5deg); }
        }
        @keyframes heroFloatBR {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(0.5deg); }
        }
        @keyframes heroTextLine {
          0% {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes heroBtnEntrance {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .anim-corner-tl {
          animation: heroCornerTL 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .anim-corner-tr {
          animation: heroCornerTR 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .anim-corner-bl {
          animation: heroCornerBL 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
        }
        .anim-corner-br {
          animation: heroCornerBR 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
        }

        .anim-float-tl {
          animation: heroFloatTL 5s ease-in-out 0.7s infinite;
        }
        .anim-float-tr {
          animation: heroFloatTR 5.5s ease-in-out 0.8s infinite;
        }
        .anim-float-bl {
          animation: heroFloatBL 4.8s ease-in-out 0.9s infinite;
        }
        .anim-float-br {
          animation: heroFloatBR 5.2s ease-in-out 1.0s infinite;
        }

        .anim-text-1 {
          animation: heroTextLine 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }
        .anim-text-2 {
          animation: heroTextLine 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.52s both;
        }
        .anim-text-3 {
          animation: heroTextLine 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both;
        }
        .anim-text-4 {
          animation: heroTextLine 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.72s both;
        }

        .anim-btn {
          animation: heroBtnEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.88s both;
        }
      `}</style>

      {/* Top-Left: Couple on sofa (Image_02.svg) */}
      <div className="absolute -top-4 -left-6 sm:-left-10 md:-left-14 w-36 sm:w-48 md:w-56 pointer-events-none z-0 anim-corner-tl">
        <div className="anim-float-tl">
          <img
            src="/images/Image_02.svg"
            alt="Couple"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('.png')) target.src = '/images/Image_02.png';
            }}
            className="w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Top-Right: Smiling friends with drink (Image_04.svg) */}
      <div className="absolute -top-2 -right-6 sm:-right-10 md:-right-14 w-40 sm:w-52 md:w-60 pointer-events-none z-0 anim-corner-tr">
        <div className="anim-float-tr">
          <img
            src="/images/Image_04.svg"
            alt="Friends"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('.png')) target.src = '/images/Image_04.png';
            }}
            className="w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom-Left: Record listeners (Image_03.svg) */}
      <div className="absolute -bottom-6 -left-6 sm:-left-10 md:-left-12 w-36 sm:w-48 md:w-54 pointer-events-none z-0 anim-corner-bl">
        <div className="anim-float-bl">
          <img
            src="/images/Image_03.svg"
            alt="Music vibe"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('.png')) target.src = '/images/Image_03.png';
            }}
            className="w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom-Right: Smiling selfie (Image_01.svg) */}
      <div className="absolute -bottom-6 -right-6 sm:-right-10 md:-right-12 w-38 sm:w-50 md:w-56 pointer-events-none z-0 anim-corner-br">
        <div className="anim-float-br">
          <img
            src="/images/Image_01.svg"
            alt="Smiling girls"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('.png')) target.src = '/images/Image_01.png';
            }}
            className="w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Center: Big Headline & Download Button */}
      <div className="relative z-10 my-auto py-10 flex flex-col items-center justify-center max-w-sm sm:max-w-md mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111116] leading-[1.06] select-none text-center">
          <div className="anim-text-1">Better</div>
          <div className="text-[#FF1BB8] anim-text-2">introductions,</div>
          <div className="anim-text-3">brought to you</div>
          <div className="anim-text-4">
            by <span className="text-[#FF1BB8]">people</span>
          </div>
        </h1>

        {/* Download Button */}
        <div className="pt-6 sm:pt-8 anim-btn">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="group px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-[#0D0D12] hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-xl flex items-center gap-3.5 active:scale-95 transition-all mx-auto cursor-pointer"
          >
            <span>Download Rivet</span>
            <div className="flex items-center gap-2 text-white/90">
              <Play className="w-3.5 h-3.5 fill-white" />
              <Apple className="w-4 h-4 fill-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
