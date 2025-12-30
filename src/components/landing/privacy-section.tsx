import { ShieldCheck, Lock, Smartphone } from "lucide-react";

export function PrivacySection() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Privacy First</h3>
            <p className="text-gray-400">We don't sell your data. Your voice notes are yours and yours alone.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
             <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">On-Device Processing</h3>
            <p className="text-gray-400">Optimized for local AI processing to ensure your data stays on your device when possible.</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
             <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">End-to-End Encryption</h3>
            <p className="text-gray-400">Sync safely between devices with military-grade encryption standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
