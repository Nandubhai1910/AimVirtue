"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import { useSoundContext } from "../../../hooks/SoundContext";

export default function ScrollInCardsCenter() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const controlledProgress = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const SENSITIVITY = 0.4;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v == null) return;
      const next = Math.max(0, Math.min(1, v * SENSITIVITY));
      controlledProgress.set(next);
    });
    return () => unsubscribe();
  }, [scrollYProgress, controlledProgress]);

  const cards = isMobile
    ? [
        {
          id: 1,
          label: "Self-aware",
          text: "Know what they want and why",
          sx: -60,
          sy: -160,
          srotate: -8,
        },
        {
          id: 2,
          label: "Setting high standards",
          text: "They take ownership of their work",
          sx: 80,
          sy: -120,
          srotate: 6,
        },
        {
          id: 3,
          label: "Driven by impact",
          text: "Focused on making a meaningful difference",
          sx: 100,
          sy: 0,
          srotate: -5,
        },
        {
          id: 4,
          label: "Good people",
          text: "High-integrity,high-quality humans",
          sx: -100,
          sy: 0,
          srotate: 5,
        },
        {
          id: 5,
          label: "Proven leaders",
          text: "Next-gen builders and experienced operators",
          sx: 80,
          sy: 140,
          srotate: -4,
        },
        {
          id: 6,
          label: "Excited by challenge",
          text: "Eager to break new ground",
          sx: -80,
          sy: 140,
          srotate: 4,
        },
      ]
    : [
        {
          id: 1,
          label: "Self-aware",
          text: "Know what they want and why",
          sx: -300,
          sy: -210,
          srotate: -18,
        },
        {
          id: 2,
          label: "Setting high standards",
          text: "They take ownership of their work",
          sx: 300,
          sy: -230,
          srotate: 15,
        },
        {
          id: 3,
          label: "Driven by impact",
          text: "Focused on making a meaningful difference",
          sx: 490,
          sy: 0,
          srotate: -10,
        },
        {
          id: 4,
          label: "Good people",
          text: "High-integrity,high-quality humans",
          sx: -560,
          sy: 0,
          srotate: 12,
        },
        {
          id: 5,
          label: "Proven leaders",
          text: "Next-gen builders and experienced operators",
          sx: 280,
          sy: 250,
          srotate: -7,
        },
        {
          id: 6,
          label: "Excited by challenge",
          text: "Eager to break new ground",
          sx: -280,
          sy: 250,
          srotate: 9,
        },
      ];
      
        const { playButton } = useSoundContext();

  return (
    <section
      ref={sectionRef}
      className={`relative ${
        isMobile ? "min-h-[180vh]" : "h-screen"
      } bg-black text-white flex items-center justify-center overflow-hidden select-none`}
    >
      <h2
        className="z-10 text-center font-extrabold uppercase leading-[1.05] px-6 pointer-events-none text-[10vw] sm:text-[6vw] md:text-[4vw]"
        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
      >
        <span className="block">
          We love{" "}
          <span className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]">connecting</span>
        </span>
        <span className="block text-purple-400">with</span>
        <span className="block">
          <span className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]">
            individuals
          </span>{" "}
          who are
        </span>
      </h2>

      {cards.map((c, i) => {
        const x = useTransform(controlledProgress, [0, 1], [c.sx, c.sx * 0.6]);
        const y = useTransform(controlledProgress, [0, 1], [c.sy, c.sy * 0.6]);
        const rotate = useTransform(controlledProgress, [0, 1], [c.srotate, c.srotate * 0.5]);
        const scale = useTransform(controlledProgress, [0, 1], [1, 1.05]);

        return (
          <motion.div
          onMouseEnter={playButton}
            key={c.id}
            style={{ x, y, rotate, scale }}
            className={`absolute 
              w-[75vw] sm:w-[32vw] md:w-[20vw]
              max-w-[300px] min-h-[30vw] sm:min-h-[18vw] md:min-h-[12vw]
              bg-[#111111] border border-[#2d2d2d]
              rounded-2xl text-white
              flex flex-col items-center justify-center px-6 py-5
              z-[${30 + i}]
              transition-transform duration-500 ease-out
              hover:scale-105
            `}
          >
            <div
              className="text-[4vw] sm:text-[1.4vw] md:text-[1vw] font-semibold text-center text-purple-300"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {c.label}
            </div>
            <div
              className="text-[3.2vw] sm:text-[1.2vw] md:text-[0.85vw] text-gray-400 mt-2 text-center leading-tight"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {c.text}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
