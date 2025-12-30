"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Star = ({ delay, size, x, y }: { delay: number; size: number; x: number; y: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.8 }}
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
    />
  );
};

const ShootingStar = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 50,
    });
  }, []);

  if (!position) return null;

  return (
    <motion.div
      initial={{ left: `${position.x}%`, top: `${position.y}%`, opacity: 0, scale: 0 }}
      animate={{
        left: [`${position.x}%`, `${position.x - 20}%`], // Move left
        top: [`${position.y}%`, `${position.y + 20}%`], // Move down
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 5 + Math.random() * 10, // Random delay between shots
        ease: "easeOut",
      }}
      className="absolute w-32 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent rotate-[-45deg] z-0"
    />
  );
};

export function StarBackground() {
  const [stars, setStars] = useState<{ id: number; delay: number; size: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const starCount = 50; // Performance: limit star count
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      size: Math.random() * 2 + 1, // 1px to 3px
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0e]">
      {/* Deep Space Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-violet-900/20" />
      
      {/* Static Twinkling Stars */}
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}

      {/* Shooting Stars */}
      <ShootingStar />
      <div className="delay-1000"><ShootingStar /></div>
    </div>
  );
}
