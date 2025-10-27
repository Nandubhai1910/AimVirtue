"use client";

import React from "react";
import Link from "next/link";
import { useSoundContext } from "../../../hooks/SoundContext";

export default function CandidatesHomeSection() {
  const { play, playButton } = useSoundContext();
  return (
    <section
      id="candidates"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden select-none"
      style={{ fontFamily: "var(--font-lato), sans-serif" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full max-w-[1200px] py-[10vh]">
        <h1
          className="font-bold uppercase tracking-tight leading-[0.9] text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw]"
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
        >
          <span className="block rotate-[-4deg] text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
            Find
          </span>
          <span className="block rotate-3 text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
            Your Rhythm
          </span>
        </h1>
        <p className="max-w-[550px] mt-6 sm:mt-8 text-[4vw] sm:text-[2.3vw] md:text-[1.3vw] lg:text-[1.1vw] text-gray-600 leading-relaxed">
          Every individual has their own pace. We help students, graduates, and
          professionals discover growth paths that match their passions,
          strengths, and purpose — turning potential into performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 justify-center items-center">
          <button
            onMouseEnter={playButton}
            className="text-gray-600 transition-colors duration-300 font-medium px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg cursor-pointer active:scale-95"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
