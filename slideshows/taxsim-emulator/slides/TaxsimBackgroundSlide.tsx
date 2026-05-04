import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import BulletList from '@/components/BulletList';

export default function TaxsimBackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What is TAXSIM?</SlideTitle>
      </SlideHeader>

      <BulletList
        size="sm"
        items={[
          {
            text: 'NBER\'s Internet TAXSIM',
            subtext: 'The gold standard tax calculator used by academic researchers since 1993',
          },
          {
            text: 'Calculates federal and state income taxes',
            subtext: 'Supports all 50 states with detailed tax computations',
          },
          {
            text: 'Widely used in economic research',
            subtext: 'Referenced in thousands of academic papers and policy analyses',
          },
          {
            text: 'Closed-source with a specific input/output format',
            subtext: '27 input variables, produces detailed tax liability breakdowns',
          },
        ]}
      />
    </Slide>
  );
}
