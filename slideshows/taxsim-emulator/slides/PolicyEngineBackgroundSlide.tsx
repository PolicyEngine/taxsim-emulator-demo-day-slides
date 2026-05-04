import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const layers = [
  {
    icon: '{ }',
    title: 'Rules',
    body: 'Federal and state tax-benefit law encoded as readable, open-source Python and YAML.',
  },
  {
    icon: '\u2630',
    title: 'Data',
    body: 'Representative households built from public microdata, calibrated to administrative totals.',
  },
  {
    icon: '\u0394',
    title: 'Reforms',
    body: 'Any parameter or formula change scored against the same baseline, household by household.',
  },
  {
    icon: '\u2261',
    title: 'Outputs',
    body: 'Budget cost, poverty, inequality, winners and losers, marginal tax rates — all reproducible.',
  },
];

export default function PolicyEngineBackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What is PolicyEngine?</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Open microsimulation as public infrastructure — rules + data + reforms = a transparent simulator anyone can audit, extend, and call.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {layers.map((layer) => (
          <div key={layer.title} className="content-card p-6 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-pe-teal/10 flex items-center justify-center mb-5">
              <span className="text-2xl font-bold text-pe-teal">{layer.icon}</span>
            </div>
            <div className="text-2xl font-black text-pe-dark mb-3">
              {layer.title}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{layer.body}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl text-gray-700 leading-relaxed">
          The same model serves households, researchers, advocates, congressional staff — and now TAXSIM users.
        </p>
      </div>
    </Slide>
  );
}
