import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
        <SlideTitle isCover>
          TAXSIM Emulator
        </SlideTitle>

        <p className="text-3xl text-white/80 font-light text-center">
          Bringing TAXSIM compatibility to PolicyEngine
        </p>

        <div className="flex items-center gap-16 pt-4">
          <div className="flex flex-col items-center space-y-3">
            <SpeakerHeadshot
              name="Pavel Makarchuk"
              imageUrl="/headshots/pavel-makarchuk.jpg"
              size="medium"
              position="center"
            />
            <div className="text-center">
              <p className="text-white font-semibold text-lg">Pavel Makarchuk</p>
              <p className="text-white/70 text-sm">Chief of Staff, PolicyEngine</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <SpeakerHeadshot
              name="Dan Feenberg"
              imageUrl="/headshots/dan-feenberg.jpg"
              size="medium"
              position="center"
            />
            <div className="text-center">
              <p className="text-white font-semibold text-lg">Dan Feenberg</p>
              <p className="text-white/70 text-sm">IT Director, NBER</p>
            </div>
          </div>
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
