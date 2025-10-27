"use client";

import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

export default function CandidatesPartnerSection() {
  return (
    <section
      className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden py-[10vw] sm:py-[8vw] md:py-[6vw] mb-[-5vw] select-none"
      style={{ fontFamily: "var(--font-lato), sans-serif" }}
    >
      <h2
        className="text-center font-extrabold uppercase leading-[1.1] mb-8 sm:mb-10 text-[10vw] sm:text-[7vw] md:text-[5vw]"
        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
      >
        <span className="block">
          <span className="text-[6vw] sm:text-[4vw] md:text-[2.8vw] text-purple-400">
            Where
          </span>{" "}
          Talent Meets
        </span>
        <span className="block">
          Opportunity
          <span className="text-[6vw] sm:text-[4vw] md:text-[2.8vw] text-purple-400">
            ,
          </span>{" "}
          Growth{" "}
          <span className="text-[6vw] sm:text-[4vw] md:text-[2.8vw] text-purple-400">
            &
          </span>
        </span>
        <span className="block">
          Endless{" "}
          <span className="text-[6vw] sm:text-[4vw] md:text-[2.8vw] text-purple-400">
            Possibilities
          </span>
        </span>
      </h2>
      <p className="text-center text-gray-600 leading-relaxed mb-10 max-w-[90vw] sm:max-w-[700px] text-[4vw] sm:text-[2vw] md:text-[1.1vw]">
        Because real growth begins when you choose the right place to rise — the
        place where your skills, dreams, and passion find their true direction.
      </p>
      <ScrollVelocityContainer
        className="relative font-extrabold select-none text-[12vw] sm:text-[9vw] md:text-[6vw] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
      >
        <div className="absolute inset-0 blur-[1px] opacity-20 text-white">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            AimVirtue — <span className="text-purple-400">AimVirtue</span> — AimVirtue —
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1}>
            AimVirtue — <span className="text-purple-400">AimVirtue</span> — AimVirtue —
          </ScrollVelocityRow>
        </div>
        <div className="relative z-10 text-white">
          <ScrollVelocityRow baseVelocity={7} direction={1}>
            AimVirtue — <span className="text-purple-400">AimVirtue</span> — AimVirtue —
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={7} direction={-1}>
            AimVirtue — <span className="text-purple-400">AimVirtue</span> — AimVirtue —
          </ScrollVelocityRow>
        </div>
      </ScrollVelocityContainer>
    </section>
  );
}
