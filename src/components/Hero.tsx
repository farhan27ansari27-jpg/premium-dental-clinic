import { ChevronDown, Star, Award, Users, Phone, MessageCircle, Shield, Stethoscope } from 'lucide-react';

const stats = [
  { icon: Users,    value: '5000+', label: 'Happy Patients' },
  { icon: Award,    value: '10+',   label: 'Years Experience' },
  { icon: Star,     value: '4.9',   label: 'Average Rating' },
  { icon: Stethoscope, value: '1500+', label: 'Implants Done' },
];

export default function Hero() {
  const phone = '917765868678';
  const waMessage = encodeURIComponent('Hello Dr Akash, I would like to book an appointment at Denticle Dental Clinic.');
  const waHref = `https://wa.me/${phone}?text=${waMessage}`;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col">

      {/* ── Full-bleed doctor background image ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37458046/pexels-photo-37458046.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Dr Akash Abhinav at Denticle Dental Clinic"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability (left-heavy) */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-forest-950/40" />
      </div>

      {/* ── Subtle decorative grid ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* ── Main content ── */}
      <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 flex items-center">
        <div className="w-full max-w-2xl text-white space-y-6" style={{ animation: 'heroFadeLeft 0.9s ease-out both' }}>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-green-200 tracking-widest uppercase">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
            Certified Oral Implantologist · CCOI
          </div>

          {/* Headline */}
          <div>
            <p className="text-green-300/90 font-medium text-base md:text-lg mb-3 tracking-wide">
              Welcome to Denticle Dental Clinic
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.08] text-shadow">
              Your Smile,<br />
              <span className="gradient-text-gold">Our Priority</span>
            </h1>
          </div>

          {/* Qualification pills */}
          <div className="flex flex-wrap gap-2">
            {['BDS', 'MDS (PGT)', 'CCOI'].map((q) => (
              <span key={q} className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                {q}
              </span>
            ))}
          </div>

          {/* Sub-text */}
          <p className="text-green-100/85 text-base md:text-lg leading-relaxed max-w-xl">
            Expert Oral & Maxillofacial care by <strong className="text-white font-semibold">Dr Akash Abhinav</strong> — combining advanced diagnostics with compassionate treatment for a healthier, brighter smile.
          </p>

          {/* Memberships */}
          <div className="flex flex-col gap-1.5 text-xs text-green-200/70 font-medium">
            <span className="flex items-center gap-2">
              <Shield size={13} className="text-gold-400 flex-shrink-0" />
              Life Member — Indian Dental Association
            </span>
            <span className="flex items-center gap-2">
              <Shield size={13} className="text-gold-400 flex-shrink-0" />
              International Affiliate Member — American Dental Association
            </span>
          </div>

          {/* CTAs — Call & WhatsApp only */}
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <a href="tel:+917765868678" className="btn-primary flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Now
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10"
        style={{ animation: 'heroFadeUp 0.9s ease-out 0.3s both' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass rounded-2xl p-4 md:p-5 text-center">
              <Icon size={20} className="mx-auto mb-2 text-green-300" />
              <div className="text-xl md:text-2xl font-bold font-serif text-white">{value}</div>
              <div className="text-xs text-green-200/80 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} className="animate-bounce-slow" />
      </a>

      {/* ── Page-load keyframes ── */}
      <style>{`
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
