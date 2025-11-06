"use client";

import React, { useEffect, useState } from "react";
import { useSoundContext } from "../hooks/SoundContext";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "../components/ui/animated-cards-stack";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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

            {/** ✅ MOBILE VIEW (NO STACK ANIMATION) */}
            {isMobile ? (
                <div className="mt-10 grid grid-cols-1 gap-6 max-w-md mx-auto w-full px-4">
                    {PARTNERS_POINTS.map((point) => (
                        <div
                            key={point.id}
                            onMouseEnter={play}
                            className="bg-[#121212] rounded-xl p-6 flex flex-col items-center text-center gap-4 border border-[#2d2d2d]"
                        >
                            <div>{point.icon}</div>
                            <h4 className="text-lg font-semibold text-white">
                                {point.title}
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                /** ✅ DESKTOP VIEW (STACKED SCROLL ANIMATION STAYS SAME) */
                <ContainerScroll
                    className="container max-w-5xl mx-auto mt-8 sm:mt-10"
                    style={{ height: "calc(100vh * 5)" }}
                >
                    <div className="sticky left-0 top-[10vh] sm:top-0 h-[80dvh] sm:h-svh w-full py-6">
                        <CardsContainer
                            onMouseEnter={play}
                            className="mx-auto h-[420px] sm:h-[400px] md:h-[420px] w-[90%] sm:w-[360px] md:w-[400px]"
                        >
                            {PARTNERS_POINTS.map((point, index) => (
                                <CardTransformed
                                    arrayLength={PARTNERS_POINTS.length}
                                    key={point.id}
                                    index={index + 2}
                                    className="flex flex-col items-center justify-center gap-4 sm:gap-5 text-center rounded-xl bg-[#121212] p-6 sm:p-7 md:p-8"
                                >
                                    <div>{point.icon}</div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(231,62,29,0.12),transparent_60%)]" />
                                    <h4 className="text-lg sm:text-lg md:text-xl font-semibold text-white">
                                        {point.title}
                                    </h4>
                                    <p className="text-sm sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-xs mx-auto opacity-80">
                                        {point.description}
                                    </p>
                                </CardTransformed>
                            ))}
                        </CardsContainer>
                    </div>
                </ContainerScroll>
            )}
        </section>
    );
}