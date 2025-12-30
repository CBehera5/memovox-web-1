import { Mic, Calendar, Brain, ListTodo } from "lucide-react";

const features = [
  {
    title: "Instant Transcription",
    description: "Speak naturally. Memovox converts your voice to text with near-perfect accuracy.",
    icon: Mic,
    color: "bg-indigo-500", // Indigo 500
  },
  {
    title: "Smart Categorization",
    description: "AI automatically routes your notes to Calendar, Tasks, or Journal based on context.",
    icon: Brain,
    color: "bg-violet-500", // Violet 500
  },
  {
    title: "Calendar Sync",
    description: "Say 'Lunch with Sarah tomorrow at 1pm' and watch it appear on your Google Calendar.",
    icon: Calendar,
    color: "bg-pink-500", // Pink 500
  },
  {
    title: "Habit Awareness",
    description: "Track your habits and get AI-driven insights on your daily routines.",
    icon: ListTodo,
    color: "bg-purple-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for your voice</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the fastest way to capture ideas and organize your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
