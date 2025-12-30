const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    quote: "I used to drown in sticky notes. Memovox helps me capture tasks while walking my dog.",
    avatar: "S",
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    quote: "The calendar integration is magic. It actually understands 'next Tuesday' correctly every time.",
    avatar: "D",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    quote: "Finally, a voice app that doesn't just store audio but actually organizes my thoughts.",
    avatar: "E",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Loved by productive people
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
