import React from 'react';
import Image from 'next/image';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { assetPath } from '@/lib/assetPath';

export default function EmulatorIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The next chapter of TAXSIM</SlideTitle>
      </SlideHeader>

      <div className="two-col">
        <div className="space-y-6">
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Drop-in replacement</p>
            <p className="text-lg text-gray-600 mt-1">Same 35 input variables, same CSV format, same output — powered by PolicyEngine</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Year-stitching</p>
            <p className="text-lg text-gray-600 mt-1">2021+ uses PolicyEngine; earlier years route to TAXSIM-35 automatically</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">CLI, Web, API, and R</p>
            <p className="text-lg text-gray-600 mt-1">Use it however you work — from the command line, browser, REST API, or R package</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Built-in validation</p>
            <p className="text-lg text-gray-600 mt-1">Compare mode runs both engines side-by-side with an interactive dashboard</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="content-card overflow-hidden">
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
            className="text-xl font-semibold text-pe-teal hover:text-pe-dark transition-colors underline underline-offset-4"
          >
            policyengine.org/us/taxsim
          </a>
        </div>
      </div>
    </Slide>
  );
}
