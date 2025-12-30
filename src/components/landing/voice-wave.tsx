"use client";

import { motion } from "framer-motion";

const Bar = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="w-2 md:w-3 bg-accent rounded-full mx-0.5 md:mx-1 opacity-80"
      animate={{
        height: ["20%", "80%", "20%"],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        repeatType: "mirror"
      }}
      style={{ height: "20%" }}
    />
  );
};

export function VoiceWave() {
  return (
    <div className="flex items-center justify-center h-24 md:h-32 gap-1 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <Bar key={i} delay={i * 0.15} />
      ))}
    </div>
  );
}
