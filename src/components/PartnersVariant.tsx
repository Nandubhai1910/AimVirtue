"use client";

import React from "react";
import { useSoundContext } from "../hooks/SoundContext";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "./ui/animated-cards-stack";
import { Building2, Handshake, Brain, Users, Globe } from "lucide-react";

const PARTNERS_POINTS = [
  {
    id: "partners-1",
    icon: <Handshake className="size-10 sm:size-9 text-pink-400" />,
    title: "Purpose-Driven Collaboration",
    description:
      "We partner with organizations that share our belief — that talent growth starts with purpose, not just performance.",
  },
  {
    id: "partners-2",
    icon: <Building2 className="size-10 sm:size-9 text-yellow-400" />,
    title: "Education–Industry Bridge",
    description:
      "We co-create programs connecting academia and corporates, ensuring real-world learning and leadership exposure.",
  },
  {
    id: "partners-3",
    icon: <Brain className="size-10 sm:size-9 text-teal-400" />,
    title: "Innovation & Skills Alignment",
    description:
      "We help companies future-proof their workforce through skill-mapped learning journeys and AI-driven insights.",
  },
  {
    id: "partners-4",
    icon: <Users className="size-10 sm:size-9 text-purple-400" />,
    title: "Leadership & Culture Building",
    description:
      "From mentoring early talent to coaching senior leaders — we shape cultures that inspire growth and greatness.",
  },
  {
    id: "partners-5",
    icon: <Globe className="size-10 sm:size-9 text-blue-400" />,
    title: "Global Impact Partnerships",
    description:
      "We collaborate across borders, aligning education and employment ecosystems for inclusive global talent impact.",
  },
];

export function PartnersVariant() {
  const { play } = useSoundContext();
  return (
    <section className="bg-black px-3 sm:px-5 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="uppercase text-center text-sm sm:text-base tracking-widest text-white mb-4 font-heading drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
          Our Partnership Pillars
        </h2>
        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-body">
          At AimVirtue, every partnership is built on shared purpose, growth,
          and the pursuit of meaningful impact.
        </p>
      </div>

      <ContainerScroll
        className="container max-w-5xl mx-auto mt-8 sm:mt-10"
        style={{
          height: "calc(100dvh * 4.5)",
        }}
      >
        <div className="sticky left-0 top-[10vh] sm:top-0 h-[80dvh] sm:h-svh w-full py-6">
          <CardsContainer
            onMouseEnter={play} className="mx-auto 
            h-[420px] sm:h-[400px] md:h-[420px] 
            w-[90%] sm:w-[360px] md:w-[400px] will-change-transform">
            {PARTNERS_POINTS.map((point, index) => (
              <CardTransformed
                arrayLength={PARTNERS_POINTS.length}
                key={point.id}
                index={index + 2}
                className="flex flex-col items-center justify-center 
                gap-4 sm:gap-5 text-center rounded-xl 
                bg-[#121212] 
                p-6 sm:p-7 md:p-8 
                shadow-[0_6px_20px_rgba(255,255,255,0.1)]"
              >
                <div className="flex items-center justify-center">{point.icon}</div>
                <div>
                  <h4 className="text-lg sm:text-lg md:text-xl font-semibold text-white">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-sm md:text-base opacity-80 max-w-xs mx-auto text-gray-200 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}
