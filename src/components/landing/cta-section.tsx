import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 -z-10" />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to speak your mind?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of users who are reclaiming their time with Memovox.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
           <Link
            href="#download"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-10 py-5 rounded-full text-lg transition-all shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]"
          >
            Get Memovox Free <ArrowRight size={22} />
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Available on iOS & Android. No credit card required.
        </p>
      </div>
    </section>
  );
}
