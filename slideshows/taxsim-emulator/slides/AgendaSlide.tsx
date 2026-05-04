import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function AgendaSlide() {
  const items = [
    { number: '01', title: 'What is TAXSIM?', description: 'NBER\'s FORTRAN tax calculator since 1993' },
    { number: '02', title: 'What is PolicyEngine?', description: 'Open-source microsimulation for tax and benefit policy' },
    { number: '03', title: 'Who runs on PolicyEngine', description: 'Governments, researchers, navigators, and households' },
    { number: '04', title: 'The next chapter of TAXSIM', description: 'Drop-in replacement powered by PolicyEngine' },
    { number: '05', title: 'Live Demo', description: 'See it in action' },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>

      <div className="space-y-6 mt-4">
        {items.map((item) => (
          <div key={item.number} className="flex items-center gap-8">
            <span className="text-5xl font-black text-pe-teal/30 w-20 text-right">
              {item.number}
            </span>
            <div className="accent-block flex-1">
              <h3 className="text-3xl font-bold text-pe-dark">{item.title}</h3>
              <p className="text-xl text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
