import { SlideshowConfig, SlideshowMetadata } from './types';
import { taxsimEmulatorConfig } from '@/slideshows/taxsim-emulator/config';

export const slideshows: SlideshowConfig[] = [
  taxsimEmulatorConfig,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
