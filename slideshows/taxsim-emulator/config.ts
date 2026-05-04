import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import AgendaSlide from './slides/AgendaSlide';
import TaxsimBackgroundSlide from './slides/TaxsimBackgroundSlide';
import PolicyEngineBackgroundSlide from './slides/PolicyEngineBackgroundSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
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
    AgendaSlide,
    TaxsimBackgroundSlide,
    PolicyEngineBackgroundSlide,
    WhoUsesItSlide,
    EmulatorIntroSlide,
    DemoSlide,
    EndSlide,
  ],
};
