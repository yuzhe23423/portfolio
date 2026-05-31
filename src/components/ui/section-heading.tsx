"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  italic?: string;
}

export function SectionHeading({ title, subtitle, italic }: SectionHeadingProps) {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? {}
    : {
        initial: { y: "115%" },
        whileInView: { y: 0 },
        viewport: { once: true, margin: "0px 0px -15% 0px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <div className="mb-16 border-t border-border pt-6">
      {subtitle && <p className="section-mark mb-4 block">{subtitle}</p>}
      <div className="overflow-hidden pb-[0.1em]">
        <motion.h2
          {...reveal}
          className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300"
        >
          {title}
          {italic && (
            <>
              {" "}
              <span
                className="italic font-300"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                {italic}
              </span>
            </>
          )}
          <span className="text-accent">.</span>
        </motion.h2>
      </div>
    </div>
  );
}
