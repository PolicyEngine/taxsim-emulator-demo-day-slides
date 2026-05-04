import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-14 relative z-10">
        <SlideTitle isCover>
          TAXSIM Emulator
        </SlideTitle>

        <p className="text-3xl text-white/80 font-light text-center">
          Bringing TAXSIM compatibility to PolicyEngine
        </p>

        <div className="flex items-center gap-8 pt-4">
          <p className="text-white/70 text-lg">Pavel Makarchuk</p>
        </div>

        <div className="flex items-center gap-10 pt-2">
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Demo Day</p>
            <p className="text-white font-medium text-lg">May 2026</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
