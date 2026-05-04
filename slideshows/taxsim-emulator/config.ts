import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import TaxsimBackgroundSlide from './slides/TaxsimBackgroundSlide';
import PolicyEngineBackgroundSlide from './slides/PolicyEngineBackgroundSlide';
import EmulatorIntroSlide from './slides/EmulatorIntroSlide';
import DemoSlide from './slides/DemoSlide';
import EndSlide from './slides/EndSlide';

export const taxsimEmulatorConfig: SlideshowConfig = {
  id: 'taxsim-emulator',
  title: 'TAXSIM Emulator',
  description: 'Bringing TAXSIM compatibility to PolicyEngine',
  date: 'May 2026',
  location: 'Demo Day',
  slides: [
    CoverSlide,
    TaxsimBackgroundSlide,
    PolicyEngineBackgroundSlide,
    EmulatorIntroSlide,
    DemoSlide,
    EndSlide,
  ],
};
