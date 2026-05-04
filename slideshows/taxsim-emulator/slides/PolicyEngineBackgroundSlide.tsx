import React from 'react';
import Image from 'next/image';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { assetPath } from '@/lib/assetPath';

export default function PolicyEngineBackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What is PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="two-col">
        <div className="space-y-6">
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Open-source microsimulation</p>
            <p className="text-lg text-gray-600 mt-1">Transparent, auditable tax and benefit calculations</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Comprehensive US tax code</p>
            <p className="text-lg text-gray-600 mt-1">Federal and state income taxes, credits, deductions, and benefits</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Modern Python architecture</p>
            <p className="text-lg text-gray-600 mt-1">Built on policyengine-us with vectorized computations</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Policy reform modeling</p>
            <p className="text-lg text-gray-600 mt-1">Simulate the impact of policy changes — something TAXSIM cannot do</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="content-card overflow-hidden">
            <Image
              src={assetPath("/screenshots/pe-homepage.png")}
              alt="PolicyEngine homepage"
              width={560}
              height={350}
              className="w-full h-auto"
            />
          </div>
          <a
            href="https://policyengine.org/us"
            className="text-lg font-medium text-pe-teal hover:text-pe-dark transition-colors underline underline-offset-4"
          >
            policyengine.org
          </a>
        </div>
      </div>
    </Slide>
  );
}
