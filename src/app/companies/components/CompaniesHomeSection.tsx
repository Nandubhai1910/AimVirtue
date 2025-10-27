"use client";

import React from "react";
import Link from "next/link";
import { useSoundContext } from "../../../hooks/SoundContext";

export default function CompaniesHomeSection() {
    const { playButton } = useSoundContext();

    return (
        <section
            id="companies"
            className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white overflow-hidden px-[5vw] py-[12vw] sm:py-[8vw] md:py-[6vw]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(231,62,29,0.12),transparent_60%)]"></div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center gap-6 w-full max-w-[1100px]">
                <h1
                    className="font-extrabold uppercase leading-[0.9] tracking-tight text-[12vw] sm:text-[9vw] md:text-[6vw]"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                >
                    <span className="block rotate-5">Your Partner</span>
                    <span className="block rotate-3">For</span>
                    <span className="block -rotate-2">Extraordinary</span>
                    <span className="block text-[#e73e1d] rotate-2">Talent</span>
                </h1>

                <p
                    className="max-w-[700px] text-[4vw] sm:text-[2.2vw] md:text-[1.1vw] text-gray-600 leading-relaxed mt-[3vw]"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    “We partner with ambitious companies to discover, develop, and empower
                    the kind of talent that transforms ideas into impact.”
                </p>

                <div className="flex flex-col sm:flex-row gap-[4vw] sm:gap-[2vw] mt-[5vw] sm:mt-[3vw] justify-center">
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
