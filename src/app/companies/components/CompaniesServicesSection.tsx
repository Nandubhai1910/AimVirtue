"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSoundContext } from "../../../hooks/SoundContext";
import { Lightbulb, Rocket, Users, Brain } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Next-Gen Hiring",
    desc: "We help you attract and evaluate future-ready talent who fit your mission — not just the job.",
    icon: <Users className="w-8 h-8 text-[#e73e1d]" />,
    color: "bg-[#121212]",
  },
  {
    id: 2,
    title: "Leadership Development",
    desc: "Empowering your emerging leaders with personalized coaching and growth frameworks for lasting impact.",
    icon: <Brain className="w-8 h-8 text-[#e73e1d]" />,
    color: "bg-[#181818]",
  },
  {
    id: 3,
    title: "Talent Strategy & Insights",
    desc: "Transforming how you build, retain, and grow talent through data-driven insights and human-centered design.",
    icon: <Lightbulb className="w-8 h-8 text-[#e73e1d]" />,
    color: "bg-[#121212]",
  },
  {
    id: 4,
    title: "Corporate-Academia Partnerships",
    desc: "Connecting your organization with academia to shape pipelines of skilled, purpose-driven talent.",
    icon: <Rocket className="w-8 h-8 text-[#e73e1d]" />,
    color: "bg-[#181818]",
  },
];

const CompaniesServicesSection: React.FC = () => {
  const { play } = useSoundContext();
  const { scrollYProgress } = useScroll();

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
      id="learnmore"
      className="relative bg-black text-white py-[10vw] sm:py-[8vw] md:py-[6vw] overflow-hidden flex flex-col items-center justify-center -mt-[2vw]"
    >
      <p
        className="uppercase text-sm tracking-widest text-white mb-4 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
        style={{ fontFamily: "var(--font-lato), sans-serif" }}
      >
        Services
      </p>

      <div className="relative text-center mb-[10vw] sm:mb-[6vw] md:mb-[4vw] px-[4vw]">
        <h2
          className="font-extrabold text-[13vw] sm:text-[9vw] md:text-[6vw] leading-[0.9] uppercase tracking-tight"
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
        >
          <span className="inline-block rotate-[-5deg] translate-y-8px text-[#e73e1d]">
            Building
          </span>{" "}
          <span className="inline-block rotate-[5deg] text-[8vw] sm:text-[5vw] translate-y-8px">
            Leaders.
          </span>
          <br />
          <span className="inline-block rotate-[4deg] translate-y-10px">
            Growing
          </span>
          <br />
          <span className="inline-block -rotate-6deg text-[#e73e1d] text-[10vw] sm:text-[7vw] translate-y-[5px]">
            Organizations.
          </span>
        </h2>

        <p
          className="max-w-[800px] mx-auto mt-[5vw] text-[4vw] sm:text-[2.2vw] md:text-[1.1vw] text-neutral-400 leading-relaxed"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          “From identifying next-gen talent to shaping transformative leaders — we partner with
          companies to build cultures that grow people, performance, and purpose together.”
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[5vw] sm:gap-[2vw] w-full max-w-6xl px-[5vw] sm:px-[4vw]">
        {services.map((srv, i) => (
          <motion.div
            key={srv.id}
            style={{ rotate: transforms[i].rotate, y: transforms[i].y }}
            onMouseEnter={play}
            className={`flex flex-col items-center justify-between text-center p-[8vw] sm:p-[3vw] md:p-[2vw] rounded-[4vw] sm:rounded-[1.5vw] shadow-lg ${srv.color} text-white hover:scale-[1.04] transition-transform duration-300`}
          >
            <div className="mb-[3vw] sm:mb-[1.2vw]">{srv.icon}</div>
            <h3
              className="text-[5vw] sm:text-[2vw] md:text-[1.3vw] font-semibold mb-[2vw] sm:mb-[1vw]"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {srv.title}
            </h3>
            <p
              className="text-[3.4vw] sm:text-[1.5vw] md:text-[0.9vw] text-neutral-600 leading-snug"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesServicesSection;
