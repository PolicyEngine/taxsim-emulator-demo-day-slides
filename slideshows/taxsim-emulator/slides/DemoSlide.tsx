import React from 'react';
import Image from 'next/image';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { assetPath } from '@/lib/assetPath';

export default function DemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Live Demo</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center h-full -mt-24 gap-8">
        <div className="content-card overflow-hidden max-w-2xl">
          <Image
            src={assetPath("/screenshots/pe-taxsim-runner.png")}
            alt="PolicyEngine TAXSIM web runner"
            width={600}
            height={375}
            className="w-full h-auto"
          />
        </div>
        <a
          href="https://www.policyengine.org/us/taxsim"
          className="text-3xl font-semibold text-pe-teal hover:text-pe-dark transition-colors underline underline-offset-8"
        >
          policyengine.org/us/taxsim
        </a>
      </div>
    </Slide>
  );
}
