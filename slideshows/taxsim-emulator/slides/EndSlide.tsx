import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
        <SlideTitle isCover>
          Questions?
        </SlideTitle>

        <p className="text-2xl text-white/80 font-light text-center max-w-2xl">
          Try it out and let us know what you think.
        </p>

        <div className="flex gap-8 mt-8">
          <a
            href="https://github.com/PolicyEngine/policyengine-taxsim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium transition-colors"
          >
            github.com/PolicyEngine/policyengine-taxsim
          </a>
        </div>

        <div className="mt-12 text-white/60 text-sm">
          PolicyEngine &middot; Demo Day &middot; May 2026
        </div>
      </div>
    </Slide>
  );
}
