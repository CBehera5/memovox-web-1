import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for casual users.",
    features: [
      "100 Voice Memos / month",
      "Basic AI Transcription",
      "Local Storage Only",
      "7-Day History"
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For power users who need it all.",
    features: [
      "Unlimited Voice Memos",
      "Advanced AI Analysis & Summaries",
      "Calendar & Todo Integration",
      "Unlimited Cloud Sync",
      "Priority Support"
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations.",
    features: [
      "Everything in Pro",
      "Team Collaboration",
      "Admin Dashboard",
      "SSO & Advanced Security",
      "Dedicated Account Manager"
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col border transition-all duration-300",
                plan.popular
                  ? "bg-white/10 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.2)] md:-mt-8 md:mb-8"
                  : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 min-w-5">
                      <Check size={18} className="text-indigo-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 px-6 rounded-xl font-medium transition-all duration-300",
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
