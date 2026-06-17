import {
  Zap, Shield, Star, Smile, Microscope, Syringe,
  Activity, Scissors, HeartPulse, Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Syringe,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions crafted with precision. Certified implantology for natural-looking, long-lasting results.',
    tag: 'Most Popular',
    color: 'bg-forest-700',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    desc: 'Advanced whitening treatments that deliver dramatic results safely, giving you a brilliantly bright smile.',
    tag: '',
    color: 'bg-emerald-700',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, bonding, and smile makeovers tailored to enhance your natural beauty and boost confidence.',
    tag: '',
    color: 'bg-forest-600',
  },
  {
    icon: Microscope,
    title: 'Oral Pathology',
    desc: 'Expert diagnosis and management of oral diseases with specialized knowledge in maxillofacial pathology.',
    tag: 'Specialty',
    color: 'bg-emerald-800',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    desc: 'Comprehensive check-ups, cleanings, and preventive treatments to keep your smile healthy for life.',
    tag: '',
    color: 'bg-forest-700',
  },
  {
    icon: Scissors,
    title: 'Oral Surgery',
    desc: 'Expert surgical procedures including extractions, jaw surgery, and complex maxillofacial operations.',
    tag: '',
    color: 'bg-emerald-700',
  },
  {
    icon: Activity,
    title: 'Orthodontics',
    desc: 'Braces and clear aligners to straighten teeth and correct bite issues for a perfectly aligned smile.',
    tag: '',
    color: 'bg-forest-600',
  },
  {
    icon: HeartPulse,
    title: 'Root Canal Therapy',
    desc: 'Painless endodontic treatment preserving your natural teeth while eliminating infection and discomfort.',
    tag: '',
    color: 'bg-emerald-800',
  },
  {
    icon: Zap,
    title: 'Emergency Dental',
    desc: 'Prompt, compassionate care for dental emergencies — tooth pain, broken teeth, and urgent situations.',
    tag: '24/7',
    color: 'bg-forest-700',
  },
  {
    icon: Star,
    title: 'Dental Crowns & Bridges',
    desc: 'High-quality ceramic and zirconia restorations that restore function and aesthetics seamlessly.',
    tag: '',
    color: 'bg-emerald-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-forest-950 to-forest-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-forest-700/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-green-400 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Our <span className="gradient-text-gold">Services</span>
          </h2>
          <p className="text-green-200/70 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive dental care under one roof, delivered with expertise and compassion.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal delay-${Math.min((i % 4 + 1) * 100, 500)} group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-forest-400/40 rounded-2xl p-6 transition-all duration-300 cursor-default service-card`}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-gold-500/20 text-gold-300 px-2.5 py-1 rounded-full border border-gold-400/20 uppercase tracking-wider">
                  {service.tag}
                </span>
              )}

              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={22} className="text-white" />
              </div>

              <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-green-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-green-200/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-green-200/70 mb-5">Not sure which treatment you need?</p>
          <a href="#appointment" className="btn-primary shadow-glow-green">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
