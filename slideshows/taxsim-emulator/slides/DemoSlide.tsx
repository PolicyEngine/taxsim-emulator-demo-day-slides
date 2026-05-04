import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function DemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Live Demo</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center h-full -mt-24">
        <a
          href="https://www.policyengine.org/us/taxsim"
          className="text-4xl font-semibold text-pe-teal hover:text-pe-dark transition-colors underline underline-offset-8"
        >
          policyengine.org/us/taxsim
        </a>
      </div>
    </Slide>
  );
}
