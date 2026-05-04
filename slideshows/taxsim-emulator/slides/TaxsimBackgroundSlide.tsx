import React from 'react';
import Image from 'next/image';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function TaxsimBackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What is TAXSIM?</SlideTitle>
      </SlideHeader>

      <div className="two-col">
        <div className="space-y-6">
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">NBER&apos;s FORTRAN tax calculator</p>
            <p className="text-lg text-gray-600 mt-1">Introduced in a 1993 paper by Feenberg &amp; Coutts; the standard tool for academic tax research</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Federal and state income taxes</p>
            <p className="text-lg text-gray-600 mt-1">Federal law through 2023; state tax for all 50 states from 1977 through 2021</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">Widely used in economic research</p>
            <p className="text-lg text-gray-600 mt-1">Interfaces available for Stata, R, SAS, Python, and Julia</p>
          </div>
          <div className="accent-block">
            <p className="text-2xl text-gray-800 font-semibold">35 input variables</p>
            <p className="text-lg text-gray-600 mt-1">Hence &quot;TAXSIM-35&quot; — covers demographics, income, expenses, and filing options</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="content-card overflow-hidden">
            <Image
              src="/screenshots/taxsim-website.png"
              alt="TAXSIM-35 website on NBER"
              width={560}
              height={350}
              className="w-full h-auto"
            />
          </div>
          <a
            href="https://taxsim.nber.org/taxsim35/"
            className="text-lg font-medium text-pe-teal hover:text-pe-dark transition-colors underline underline-offset-4"
          >
            taxsim.nber.org/taxsim35
          </a>
        </div>
      </div>
    </Slide>
  );
}
