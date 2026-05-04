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

      <div className="flex flex-col items-center justify-center flex-1 mt-8">
        <div className="code-block w-full max-w-4xl">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/50 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content text-lg">
            <p className="text-green-400">$ policyengine-taxsim &lt; input.csv</p>
            <p className="text-gray-500 mt-4"># TAXSIM-compatible input</p>
            <p className="text-yellow-300">taxsimid,year,state,mstat,pwages</p>
            <p className="text-gray-300">1,2024,1,2,75000</p>
            <p className="text-gray-500 mt-4"># PolicyEngine-powered output</p>
            <p className="text-yellow-300">taxsimid,year,state,fiitax,siitax</p>
            <p className="text-gray-300">1,2024,1,7543.00,2891.00</p>
          </div>
        </div>

        <p className="text-2xl text-gray-500 mt-10 italic">
          Drop-in replacement — same interface, open-source engine
        </p>
      </div>
    </Slide>
  );
}
