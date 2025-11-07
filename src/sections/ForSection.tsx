"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSoundContext } from "../hooks/SoundContext";
import Image from "next/image";

const ForSection: React.FC = () => {
    const { play, playButton } = useSoundContext();
    const { scrollYProgress } = useScroll();
    const leftCardRotate = useTransform(scrollYProgress, [0, 1], [5, -10]);
    const leftCardY = useTransform(scrollYProgress, [0, 1], [0, -25]);
    const rightCardRotate = useTransform(scrollYProgress, [0, 1], [-10, 5]);
    const rightCardY = useTransform(scrollYProgress, [0, 1], [0, 25]);

    return (
        <section
            id="for"
            className="relative z-0 py-16 sm:py-20 md:py-24 bg-black select-none font-body"
        >
            <div
                className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-center items-stretch 
                   gap-10 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8"
            >
                <motion.div
                    style={{ y: leftCardY, rotate: leftCardRotate }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onMouseEnter={play}
                    className="flex flex-col items-center justify-between bg-[#3d3d3d] rounded-3xl 
                     shadow-[0_8px_25px_rgba(255,255,255,0.12)] w-full md:w-[420px] lg:w-[460px] 
                     min-h-[360px] sm:min-h-[400px] md:min-h-[420px] p-6 sm:p-7 lg:p-8 
                     hover:scale-[1.03] transition-transform duration-300 text-white"
                >
                    <Image
                        src="/for-company.webp"
                        alt="for companies"
                        className="w-38 sm:w-36 md:w-60 mb-6 sm:mb-7"
                        loading="lazy"
                    />

                    <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-heading text-white">
                            “We don’t just help you hire —{" "}
                            <span className="font-heading text-purple-500">
                                we help you shape the leaders of tomorrow.”
                            </span>
                        </p>

                        <span className="font-body font-medium opacity-70 text-sm sm:text-base leading-relaxed">
                            At <span className="font-heading text-purple-500">AimVirtue</span>, we partner with
                            organizations to discover, nurture, and empower talent that grows with purpose.
                            From next-gen hiring to leadership development, we help you build a{" "}
                            <span className="font-heading text-purple-500">
                                culture of growth and greatness.
                            </span>
                        </span>

                        <Link
                            href="/companies"
                            onMouseEnter={playButton}
                            className="relative inline-flex justify-center items-center px-6 sm:px-7 py-2.5 mt-4 rounded-full 
                         font-heading font-bold text-white bg-purple-600 hover:bg-purple-700 
                         text-sm sm:text-base transition-colors"
                        >
                            Empower your teams
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: rightCardY, rotate: rightCardRotate }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    onMouseEnter={play}
                    className="flex flex-col items-center justify-between bg-[#3d3d3d] rounded-3xl 
                     shadow-[0_8px_25px_rgba(255,255,255,0.12)] w-full md:w-[420px] lg:w-[460px] 
                     min-h-[360px] sm:min-h-[400px] md:min-h-[420px] p-6 sm:p-7 lg:p-8 
                     hover:scale-[1.03] transition-transform duration-300 text-white"
                >
                    <Image
                        src="/for-candidates.webp"
                        alt="for candidates"
                        className="w-38 sm:w-36 md:w-60 mb-6 sm:mb-7"
                        loading="lazy"
                    />

                    <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-heading">
                            “Your journey doesn’t start with a job —{" "}
                            <span className="font-heading text-[#FFD700]">
                                it begins with discovering your purpose.”
                            </span>
                        </p>

                        <span className="font-body font-medium opacity-70 text-sm sm:text-base leading-relaxed">
                            At <span className="font-heading text-[#FFD700]">AimVirtue</span>, we help students and
                            early talent discover who they are, develop future-ready skills, and connect with mentors
                            and opportunities that help them grow —{" "}
                            <span className="font-heading text-[#FFD700]">from seed to start.</span>
                        </span>

                        <Link
                            href="/candidates"
                            onMouseEnter={playButton}
                            className="relative inline-flex justify-center items-center px-6 sm:px-7 py-2.5 mt-4 rounded-full 
                         font-heading font-bold text-white bg-yellow-400 hover:bg-yellow-500 
                         text-sm sm:text-base transition-colors"
                        >
                            Start your journey
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ForSection;
