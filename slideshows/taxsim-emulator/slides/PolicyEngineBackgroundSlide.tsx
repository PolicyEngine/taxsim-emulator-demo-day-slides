import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import BulletList from '@/components/BulletList';

export default function PolicyEngineBackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine&apos;s Tax Engine</SlideTitle>
      </SlideHeader>

      <BulletList
        size="sm"
        items={[
          {
            text: 'Open-source microsimulation platform',
            subtext: 'Transparent, auditable tax and benefit calculations',
          },
          {
            text: 'Comprehensive US tax code coverage',
            subtext: 'Federal and state income taxes, credits, deductions, and benefits',
          },
          {
            text: 'Modern Python-based architecture',
            subtext: 'Built on policyengine-us with vectorized computations',
          },
          {
            text: 'Policy reform modeling',
            subtext: 'Ability to simulate the impact of policy changes — something TAXSIM cannot do',
          },
        ]}
      />
    </Slide>
  );
}
