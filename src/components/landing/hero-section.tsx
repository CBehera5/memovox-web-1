"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Calendar, Phone, Users, Mail, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const CapabilityCard = ({ icon: Icon, text, className, delay, floatDuration = 4 }: { icon: any, text: string, className?: string, delay: number, floatDuration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -15, 0] 
    }}
    transition={{ 
      opacity: { duration: 0.8, delay, ease: "easeOut" },
      scale: { duration: 0.8, delay, ease: "easeOut" },
      y: { 
        duration: floatDuration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay + 0.8 // Start floating after entry
      }
    }}
    className={`absolute hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/5 p-3 rounded-2xl shadow-lg -z-10 select-none pointer-events-none hover:bg-white/10 transition-colors ${className}`}
  >
    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
      <Icon size={16} />
    </div>
    <span className="text-xs font-medium text-white/60">{text}</span>
  </motion.div>
);

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-20" />

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Floating Background Cards */}
        <CapabilityCard 
          icon={ShoppingCart} 
          text="Remind me to buy groceries" 
          className="top-[5%] left-[2%] xl:left-[8%]"
          delay={0.2}
          floatDuration={5} 
        />
        <CapabilityCard 
          icon={Phone} 
          text="Call dentist tomorrow at 10 AM" 
          className="bottom-[15%] left-[4%] xl:left-[10%]"
          delay={0.4}
          floatDuration={6} 
        />
        <CapabilityCard 
          icon={Users} 
          text="Plan weekend trip with friends" 
          className="top-[10%] right-[2%] xl:right-[6%]"
          delay={0.6}
          floatDuration={5.5} 
        />
        <CapabilityCard 
          icon={Calendar} 
          text="Meeting with team at 2 PM" 
          className="bottom-[10%] right-[4%] xl:right-[10%]"
          delay={0.8}
          floatDuration={7} 
        />
        
        {/* Additional Random Cards */}
        <CapabilityCard 
          icon={Mail} 
          text="Draft email to Sarah about Q4" 
          className="top-[45%] left-[-2%] xl:left-[2%]"
          delay={1.0}
          floatDuration={6.5} 
        />
        <CapabilityCard 
          icon={Lightbulb} 
          text="Brainstorm marketing ideas" 
          className="top-[40%] right-[-2%] xl:right-[2%]"
          delay={1.2}
          floatDuration={5.8} 
        />


        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available on iOS and Android
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight animate-slide-up relative z-20">
          Turn your voice into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500">Action</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up [animation-delay:0.1s] relative z-20">
          Memovox uses AI to transcribe, organize, and act on your voice notes. 
          Never type a todo list or calendar invite again.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:0.2s] relative z-20">
          <Link
            href="#download"
            className="flex items-center gap-2 bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30"
          >
            Download App <ArrowRight size={20} />
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
