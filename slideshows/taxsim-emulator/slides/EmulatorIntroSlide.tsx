import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

function Arrow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
        <path d="M2 12H26M26 12L18 4M26 12L18 20" stroke="#319795" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DownArrow() {
  return (
    <div className="flex items-center justify-center py-1">
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path d="M12 2V22M12 22L4 14M12 22L20 14" stroke="#319795" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function EmulatorIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The next chapter of TAXSIM</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col">
        {/* Architecture diagram */}
        <div className="flex items-center gap-4 w-full">

          {/* Interfaces */}
          <div className="flex flex-col items-center min-w-[130px]">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Interfaces</p>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-3 w-full text-center space-y-1.5">
              {['Stata', 'R', 'SAS', 'Python', 'Julia', 'Web', 'CLI', 'API'].map((name) => (
                <div key={name} className="bg-white rounded-md px-3 py-1 text-sm font-medium text-gray-700 border border-gray-200">
                  {name}
                </div>
              ))}
            </div>
          </div>

          <Arrow />

          {/* Input Mapper */}
          <div className="flex flex-col items-center min-w-[140px]">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Input</p>
            <div className="bg-pe-teal/10 border-2 border-pe-teal/30 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-pe-dark">35 variables</p>
              <p className="text-sm text-gray-500 mt-1">CSV / Stata</p>
              <div className="border-t border-pe-teal/20 mt-3 pt-3">
                <p className="text-sm font-semibold text-pe-dark">Input Mapper</p>
                <p className="text-xs text-gray-500">TAXSIM → PE format</p>
              </div>
            </div>
          </div>

          <Arrow />

          {/* StitchedRunner */}
          <div className="flex flex-col items-center flex-1">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Stitched Runner</p>
            <div className="bg-pe-teal/5 border-2 border-pe-teal rounded-xl p-4 w-full">
              <div className="text-center mb-3">
                <p className="text-base font-semibold text-pe-dark">Routes by tax year</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-pe-teal rounded-lg p-3 text-center">
                  <p className="text-white font-bold text-lg">PolicyEngine</p>
                  <p className="text-white/80 text-sm mt-1">2021 +</p>
                </div>
                <div className="flex-1 bg-gray-600 rounded-lg p-3 text-center">
                  <p className="text-white font-bold text-lg">TAXSIM-35</p>
                  <p className="text-white/80 text-sm mt-1">&lt; 2021</p>
                </div>
              </div>
            </div>
          </div>

          <Arrow />

          {/* Output Mapper */}
          <div className="flex flex-col items-center min-w-[140px]">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Output Mapper</p>
            <div className="bg-pe-teal/10 border-2 border-pe-teal/30 rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-pe-dark">PE → TAXSIM format</p>
              <div className="border-t border-pe-teal/20 mt-3 pt-3">
                <p className="text-xs text-gray-500">State-specific rules</p>
                <p className="text-xs text-gray-500">Conformity handling</p>
              </div>
            </div>
          </div>

          <Arrow />

          {/* Output */}
          <div className="flex flex-col items-center min-w-[140px]">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Output</p>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-3 w-full space-y-2">
              <div className="bg-white rounded-md px-3 py-2 text-center border border-gray-200">
                <p className="text-sm font-semibold text-gray-700">Tax results</p>
                <p className="text-xs text-gray-500">CSV / Stata</p>
              </div>
              <div className="bg-white rounded-md px-3 py-2 text-center border border-gray-200">
                <p className="text-sm font-semibold text-gray-700">Comparison</p>
                <p className="text-xs text-gray-500">PE vs TAXSIM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Key points */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="accent-block">
            <p className="text-lg text-gray-800 font-semibold">Drop-in replacement</p>
            <p className="text-sm text-gray-600 mt-1">Same 35 inputs, same CSV format, same output</p>
          </div>
          <div className="accent-block">
            <p className="text-lg text-gray-800 font-semibold">Year-stitching</p>
            <p className="text-sm text-gray-600 mt-1">2021+ uses PolicyEngine; earlier years route to TAXSIM-35</p>
          </div>
          <div className="accent-block">
            <p className="text-lg text-gray-800 font-semibold">Every TAXSIM interface</p>
            <p className="text-sm text-gray-600 mt-1">Stata, R, SAS, Python, Julia, web runner, API, CLI</p>
          </div>
          <div className="accent-block">
            <p className="text-lg text-gray-800 font-semibold">Built-in validation</p>
            <p className="text-sm text-gray-600 mt-1">Compare mode runs both engines side-by-side</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
