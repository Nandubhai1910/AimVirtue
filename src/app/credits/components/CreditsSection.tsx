"use client";

import React from "react";
import Image from "next/image";

export default function CreditsSection() {
  return (
    <section
      id="credits"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 py-[10vw] sm:py-[8vw] lg:py-[6vw] font-body"
    >
      <h1 className="font-heading text-[8vw] sm:text-[5vw] lg:text-[3.5vw] font-bold uppercase tracking-tight mb-[4vw] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
        Credits
      </h1>

      <p className="max-w-[800px] text-[3.5vw] sm:text-[2vw] lg:text-[1.1vw] leading-[150%] opacity-90 mb-[6vw]">
        AimVirtue began as a vision — to create a connected ecosystem where
        purpose meets growth. From empowering students and early talent to
        guiding corporate leaders, we’re building a space where ambition and
        virtue grow together — shaping futures with purpose and impact.
      </p>

      <h2 className="font-heading text-[6vw] sm:text-[3vw] lg:text-[2vw] font-semibold mb-[4vw] uppercase text-[#e73e1d] drop-shadow-[0_0_10px_rgba(231,62,29,0.4)]">
        The Minds Behind AimVirtue
      </h2>

      <div className="relative w-[75vw] sm:w-[45vw] lg:w-[40vw] h-[75vw] sm:h-[45vw] lg:h-[30vw] mb-[5vw]">
        <Image
          src="/Group Photo.jpg"
          alt="AimVirtue Founding Team"
          fill
          className="object-cover rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          loading="lazy"
        />
      </div>

      <p className="max-w-[800px] text-[3.2vw] sm:text-[1.8vw] lg:text-[1vw] leading-[160%] text-gray-300 italic px-4">
        Every milestone we’ve reached has been possible because of *you* — our
        learners, partners, mentors, and the passionate team behind AimVirtue.
        Your trust, energy, and belief fuel our mission to build a world where
        purpose drives growth and virtue defines success.
        <br />
        <span className="text-yellow-400 font-semibold not-italic">
          Together, we are shaping the future — one purpose-driven journey at a time.
        </span>
      </p>
    </section>
  );
}
