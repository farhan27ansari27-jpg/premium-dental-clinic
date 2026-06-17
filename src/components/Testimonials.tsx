import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Dr Akash transformed my smile completely! I had severe anxiety about dental visits, but he made me feel completely at ease. The implant procedure was painless and the result is absolutely stunning. Highly recommend!',
    treatment: 'Dental Implants',
    avatar: 'PS',
  },
  {
    name: 'Rahul Mehta',
    location: 'Noida',
    rating: 5,
    text: 'Best dental clinic I have ever visited. Dr Abhinav\'s expertise in oral pathology helped diagnose an issue that others had missed for years. Professional, thorough, and genuinely caring about patient health.',
    treatment: 'Oral Pathology',
    avatar: 'RM',
  },
  {
    name: 'Sunita Agarwal',
    location: 'Gurgaon',
    rating: 5,
    text: 'My smile makeover journey with Dr Akash was incredible. The veneers look so natural — everyone compliments my smile now. The team is warm, the clinic is immaculate, and the results speak for themselves.',
    treatment: 'Smile Makeover',
    avatar: 'SA',
  },
  {
    name: 'Vikram Singh',
    location: 'Greater Noida',
    rating: 5,
    text: 'I was terrified of root canal treatment but Dr Akash made the whole process completely comfortable. Zero pain, professional service, and excellent follow-up care. This is truly world-class dental treatment.',
    treatment: 'Root Canal',
    avatar: 'VS',
  },
  {
    name: 'Anjali Tiwari',
    location: 'Faridabad',
    rating: 5,
    text: 'Came for teeth whitening and left looking 10 years younger! The results are beyond what I expected. Dr Akash clearly loves his craft and it shows in the quality of care. Worth every rupee.',
    treatment: 'Teeth Whitening',
    avatar: 'AT',
  },
  {
    name: 'Deepak Kumar',
    location: 'Meerut',
    rating: 5,
    text: 'After years of hiding my smile, Dr Abhinav gave me back my confidence. Full mouth rehabilitation was handled masterfully — I can eat, laugh, and smile freely now. Life-changing experience.',
    treatment: 'Full Mouth Rehabilitation',
    avatar: 'DK',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-forest-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-3">What Patients Say</p>
          <h2 className="section-title">
            Patient <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-emerald-500 mx-auto mt-6 rounded-full" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="font-bold text-2xl text-forest-900 font-serif">4.9</span>
            <span className="text-gray-500 text-sm">from 500+ reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((t) => (
              <div
                key={`${t.name}-${current}`}
                className="reveal service-card bg-white rounded-3xl p-8 shadow-card border border-forest-100/60 relative"
              >
                <Quote size={40} className="absolute top-6 right-6 text-forest-100" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px] mb-6 relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-forest-100">
                  <div className="w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center text-white font-bold font-serif text-lg flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location} · {t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-forest-600'
                      : 'w-2.5 h-2.5 bg-forest-200 hover:bg-forest-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
