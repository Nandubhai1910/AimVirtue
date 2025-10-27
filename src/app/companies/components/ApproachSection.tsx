"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative flex flex-col justify-center items-center text-white bg-black overflow-hidden min-h-screen py-16 md:py-24"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center px-[6vw] sm:px-[4vw]"
      >
        {/* Heading */}
        <h2
          className="font-bold leading-[0.9] uppercase font-heading text-[12vw] sm:text-[9vw] md:text-[7vw]"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          <span className="block rotate-3">The Right</span>
          <span className="block rotate-2">
            People{" "}
            <span
              className="text-[5vw] sm:text-[2vw] align-top font-body"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              for
            </span>
          </span>
          <span className="block -rotate-2">The Right</span>
          <span className="block rotate-[1.5deg] text-[#e73e1d]">
            Mission
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="mt-6 sm:mt-8 max-w-[700px] text-[3.8vw] sm:text-[1.3vw] text-gray-600 leading-relaxed font-body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          We bring together purpose-driven people and meaningful opportunities —
          aligning passion with progress.
        </p>
      </motion.div>
    </section>
  );
}
