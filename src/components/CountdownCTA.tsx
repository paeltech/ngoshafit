"use client";

import React from 'react';

interface CountdownCTAProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  ctaText?: string;
  ctaLink?: string;
}

export default function CountdownCTA({ timeLeft, ctaText, ctaLink }: CountdownCTAProps) {
  return (
    <>
      {/* Countdown Timer */}
      <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 md:p-8 mt-10 mb-10 mx-auto max-w-2xl transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">
              {timeLeft.days}
            </span>
            <span className="text-sm md:text-base mt-2">days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">
              {timeLeft.hours}
            </span>
            <span className="text-sm md:text-base mt-2">hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">
              {timeLeft.minutes}
            </span>
            <span className="text-sm md:text-base mt-2">minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold transition-colors duration-500" style={{ color: timeLeft.seconds % 2 === 0 ? '#ffffff' : '#ffcc00' }}>
              {timeLeft.seconds}
            </span>
            <span className="text-sm md:text-base mt-2">seconds</span>
          </div>
        </div>
      </div>

      {/* Call to Action - Only render if ctaText is provided */}
      {ctaText && ctaLink && (
        <div className="text-center mb-12">
          <a href={ctaLink} target="_blank" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold animate-pulse hover:animate-none transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            {ctaText}
          </a>
        </div>
      )}
    </>
  );
}
