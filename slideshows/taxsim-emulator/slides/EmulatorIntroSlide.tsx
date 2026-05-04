import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function EmulatorIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The TAXSIM Emulator</SlideTitle>
      </SlideHeader>

      <div className="two-col mt-4">
        <div className="space-y-6">
          <div className="content-card p-6">
            <h3 className="text-2xl font-bold text-pe-dark mb-3">What it does</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Accepts TAXSIM-formatted inputs and produces TAXSIM-compatible outputs — powered by PolicyEngine under the hood.
            </p>
          </div>

          <div className="content-card p-6">
            <h3 className="text-2xl font-bold text-pe-dark mb-3">Why it matters</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Researchers can switch from TAXSIM to PolicyEngine without changing their existing workflows or data pipelines.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="content-card p-6">
            <h3 className="text-2xl font-bold text-pe-dark mb-3">How it works</h3>
            <ul className="space-y-3 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-pe-teal font-bold">1.</span>
                <span>Parse TAXSIM input format</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pe-teal font-bold">2.</span>
                <span>Map to PolicyEngine household</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pe-teal font-bold">3.</span>
                <span>Run PolicyEngine simulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pe-teal font-bold">4.</span>
                <span>Convert results to TAXSIM output</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
