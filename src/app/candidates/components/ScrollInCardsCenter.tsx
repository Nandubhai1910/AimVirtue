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
  const { play } = useSoundContext();
  const SENSITIVITY = 0.4;

  // ✅ Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Smooth scroll control
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v == null) return;
      const next = Math.max(0, Math.min(1, v * SENSITIVITY));
      controlledProgress.set(next);
    });
    return () => unsubscribe();
  }, [scrollYProgress, controlledProgress]);

  // ✅ Cards data
  const cards = [
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
      text: "High-integrity, high-quality humans",
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

  const transforms = cards.map((c) => ({
    x: useTransform(controlledProgress, [0, 1], [c.sx, c.sx * 0.6]),
    y: useTransform(controlledProgress, [0, 1], [c.sy, c.sy * 0.6]),
    rotate: useTransform(controlledProgress, [0, 1], [c.srotate, c.srotate * 0.5]),
    scale: useTransform(controlledProgress, [0, 1], [1, 1.05]),
  }));

  return (
    <section
      ref={sectionRef}
      className={`relative ${isMobile ? "min-h-[120vh]" : "h-screen"
        } bg-black text-white flex flex-col items-center justify-center overflow-hidden select-none`}
    >
      <h2
        className="z-10 text-center font-extrabold uppercase leading-[1.05] px-6 pointer-events-none text-[10vw] sm:text-[6vw] md:text-[4vw]"
        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
      >
        <span className="block">
          We Love {""}
          <span className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]">
            connecting
          </span>
        </span>
        <span className="block text-purple-400">with</span>
        <span className="block">
          <span className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]">
            individuals
          </span>{" "}
          who are
        </span>
      </h2>

      {isMobile ? (
        <div className="grid grid-cols-2 gap-[5vw] mt-[12vw] w-full px-[6vw]">
          {cards.map((c) => (
            <motion.div
              key={c.id}
              onMouseEnter={play}
              whileHover={{ scale: 1.05 }}
              className="p-[5vw] bg-[#111111] border border-[#2d2d2d] rounded-[4vw] text-center flex flex-col items-center justify-center shadow-lg"
            >
              <div
                className="text-[4.5vw] font-semibold text-purple-400"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {c.label}
              </div>
              <p
                className="text-[3.5vw] text-gray-400 mt-[2vw] leading-tight"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        // ✅ DESKTOP VIEW - Floating animated cards
        <>
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              onMouseEnter={play}
              style={{
                x: transforms[i].x,
                y: transforms[i].y,
                rotate: transforms[i].rotate,
                scale: transforms[i].scale,
              }}
              className={`absolute 
                w-[20vw] max-w-[300px] min-h-[12vw]
                bg-[#111111] border border-[#2d2d2d]
                rounded-2xl text-white
                flex flex-col items-center justify-center px-6 py-5
                z-[${30 + i}]
                transition-transform duration-500 ease-out
                hover:scale-105
              `}
            >
              <div
                className="text-[1vw] font-semibold text-purple-400"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {c.label}
              </div>
              <div
                className="text-[0.85vw] text-gray-400 mt-2 text-center leading-tight"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {c.text}
              </div>
            </motion.div>
          ))}
        </>
      )}
    </section>
  );
}



