"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSoundContext } from "../hooks/SoundContext";
import { Lightbulb, Rocket, Users, Brain } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Purposeful Learning",
        desc: "Experience hands-on, real-world learning designed to unlock your true potential.",
        icon: <Brain className="w-8 h-8 text-purple-500" />,
        color: "bg-[#121212]",
    },
    {
        id: 2,
        title: "Career Mentorship",
        desc: "Learn directly from experienced leaders who guide you from campus to corporate success.",
        icon: <Users className="w-8 h-8 text-yellow-400" />,
        color: "bg-[#181818]",
    },
    {
        id: 3,
        title: "Leadership & Growth",
        desc: "Develop future-ready skills and mindsets that help you lead with impact and integrity.",
        icon: <Lightbulb className="w-8 h-8 text-pink-400" />,
        color: "bg-[#121212]",
    },
    {
        id: 4,
        title: "Corporate Innovation",
        desc: "We partner with companies to design next-gen talent solutions that drive growth and culture.",
        icon: <Rocket className="w-8 h-8 text-blue-400" />,
        color: "bg-[#181818]",
    },
];

const ServicesSection: React.FC = () => {
    const { play } = useSoundContext();
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const rotate1 = useTransform(scrollYProgress, [0, 1], [-10, 5]);
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 40]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -8]);
    const y2 = useTransform(scrollYProgress, [0, 1], [10, -20]);
    const rotate3 = useTransform(scrollYProgress, [0, 1], [-5, 10]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 30]);
    const rotate4 = useTransform(scrollYProgress, [0, 1], [8, -10]);
    const y4 = useTransform(scrollYProgress, [0, 1], [20, -40]);

    const transforms = [
        { rotate: rotate1, y: y1 },
        { rotate: rotate2, y: y2 },
        { rotate: rotate3, y: y3 },
        { rotate: rotate4, y: y4 },
    ];

    return (
        <section
            id="services"
            className="relative bg-black text-white py-20 sm:py-24 lg:py-28 overflow-x-hidden overflow-y-hidden flex flex-col items-center justify-center select-none font-body"
        >
            <p className="uppercase text-sm sm:text-base tracking-widest text-white mb-4 font-heading drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
                What We Do
            </p>

            <div className="relative text-center mb-16 sm:mb-20 px-4">
                <h2
                    className="uppercase font-extrabold text-[9vw] sm:text-[6vw] lg:text-[4vw] leading-tight tracking-tight"
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                    <span className="inline-block -rotate-3 text-purple-400">
                        Growing
                    </span>{" "}
                    <span className="inline-block text-pink-400 sm:text-[4.3vw] lg:text-[3.2vw]">
                        Talent
                    </span>{" "}
                    <span className="inline-block rotate-3 text-yellow-400">
                        Ecosystems
                    </span>
                </h2>
                <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-body">
                    From discovering purpose to leading with purpose — AimVirtue connects learning, mentorship,
                    and leadership into one seamless journey of growth.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 w-full max-w-7xl px-4 sm:px-6 md:px-8">
                {services.map((srv, i) => (
                    <motion.div
                        key={srv.id}
                        style={!isMobile ? { rotate: transforms[i].rotate, y: transforms[i].y } : {}}
                        onMouseEnter={play}
                        className={`flex flex-col items-center justify-between text-center p-6 sm:p-8 rounded-3xl ${srv.color} 
                       hover:scale-[1.03] will-change-transform duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.08)]`}
                    >
                        <div className="mb-5">{srv.icon}</div>
                        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">
                            {srv.title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-400 font-body leading-relaxed">
                            {srv.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
