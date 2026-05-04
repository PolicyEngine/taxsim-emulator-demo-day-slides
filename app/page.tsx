'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllSlideshowMetadata } from '@/lib/slideshows';
import { assetPath } from '@/lib/assetPath';

export default function Home() {
  const slideshows = getAllSlideshowMetadata();

  return (
    <main className="min-h-screen gradient-bg flex flex-col justify-center p-16">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <Image
            src={assetPath("/logos/white.svg")}
            alt="PolicyEngine"
            width={450}
            height={120}
            priority
          />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">
          TAXSIM Emulator
        </h1>
        <p className="text-xl text-white/80 mb-4">
          Demo Day Presentation
        </p>
        <p className="text-lg text-white/60 mb-12">
          Click to view presentation slides
        </p>

        <div className="space-y-3">
          {slideshows.map((slideshow) => (
            <Link
              key={slideshow.id}
              href={`/${slideshow.id}`}
              className="group block bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold mb-2 text-pe-dark">
                  {slideshow.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {slideshow.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {slideshow.slideCount} slides
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
