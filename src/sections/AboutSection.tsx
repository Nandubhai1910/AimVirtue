"use client";

import React from "react";
import { Highlighter } from "../components/ui/highlighter";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="about relative py-[8vw] bg-black text-white overflow-hidden select-none font-body"
        >
            <div className="container mx-auto px-4 md:px-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 md:gap-[2vw] gap-[6vw] items-center">

                {/* Left Heading */}
                <h2 className="uppercase font-heading font-600 leading-[1.1] text-[6vw] sm:text-[5vw] md:text-[4.1vw] lg:text-[4vw] tracking-tight text-center md:text-left">
                    We've been there.
                    <br /> We{" "}
                    <span className="text-[#7bff00] font-700">
                        know what it takes.
                    </span>
                </h2>

                <div className="relative w-full text-center md:text-left">
                    <div className="relative">
                        <p className="relative z-1 text-[3.5vw] sm:text-[2.5vw] md:text-[1.1vw] lg:text-[1vw] leading-[145%] sm:leading-[150%] font-body font-500 text-white">
                            At AimVirtue
                            , we’re not just building a platform — we’re shaping a movement. We believe
                            that real success comes from{" "}
                            <Highlighter color="#FFD700" action="highlight" isView={true}>
                                purpose-driven growth
                            </Highlighter>{" "}
                            and a mindset that values progress over perfection. Our mission is to empower
                            learners, creators, and dreamers to{" "}
                            <Highlighter color="#C084FC" action="highlight" isView={true}>
                                rise beyond limits
                            </Highlighter>
                            , mastering skills that don’t just build careers — {" "}
                            <Highlighter color="#FB7185" action="highlight" isView={true}>
                                they build character
                            </Highlighter>
                            . Because at AimVirtue, <Highlighter>ambition meets virtue</Highlighter>{""} — and that’s where greatness
                            begins.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
