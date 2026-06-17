import { ChevronDown, Star, Award, Users, Calendar, Shield } from 'lucide-react';

const stats = [
  { icon: Users,    value: '5000+', label: 'Happy Patients' },
  { icon: Award,    value: '10+',   label: 'Years Experience' },
  { icon: Star,     value: '4.9',   label: 'Average Rating' },
  { icon: Calendar, value: '1500+', label: 'Implants Done' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden flex flex-col">

      {/* ── Background decorative blobs ── */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-forest-600/10 -translate-y-1/3 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-emerald-500/10 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* ── Main content ── */}
      <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* ── Left — headline & CTA ── */}
          <div className="text-white space-y-6 order-2 lg:order-1" style={{ animation: 'heroFadeLeft 0.9s ease-out both' }}>

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
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] text-shadow">
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
            <p className="text-green-100/80 text-base md:text-lg leading-relaxed max-w-lg">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a href="#appointment" className="btn-primary text-center">
                Book Appointment
              </a>
              <a href="#about" className="btn-outline text-center">
                Meet the Doctor
              </a>
            </div>
          </div>

          {/* ── Right — doctor portrait ── */}
          <div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            style={{ animation: 'heroFadeRight 0.9s ease-out 0.15s both' }}
          >
            {/* Soft glow behind card */}
            <div className="absolute inset-x-8 bottom-0 top-8 bg-forest-500/20 rounded-3xl blur-3xl" />

            {/* Glassmorphism card frame */}
            <div
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md animate-float"
              style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.35))' }}
            >
              {/* Glass backing card */}
              <div className="absolute -inset-3 rounded-3xl bg-white/8 border border-white/15 backdrop-blur-sm" />

              {/* Portrait image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20">
                <img
                  src="/image.png"
                  alt="Dr Akash Abhinav — Oral & Maxillofacial Pathologist"
                  className="w-full h-auto block"
                  style={{ borderRadius: '1rem' }}
                />
                {/* Subtle bottom gradient for card depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-900/60 via-forest-900/10 to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="font-serif text-white text-xl font-bold leading-tight">Dr Akash Abhinav</p>
                  <p className="text-green-200 text-xs font-medium mt-0.5">Oral & Maxillofacial Pathologist</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 sm:right-0 float-badge z-10">
                <div className="glass-dark rounded-xl px-4 py-3 shadow-premium text-center min-w-[72px]">
                  <p className="text-2xl font-bold font-serif gradient-text-gold leading-none">10+</p>
                  <p className="text-green-200 text-[10px] font-semibold mt-0.5 uppercase tracking-wide">Yrs Exp.</p>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-3 sm:-left-6 z-10"
                style={{ animation: 'float-badge 3.5s ease-in-out infinite 1s' }}
              >
                <div className="glass-dark rounded-xl px-4 py-3 shadow-premium">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-white text-xs font-bold">5000+ Patients</p>
                </div>
              </div>

              {/* Verified badge — top left */}
              <div className="absolute -top-3 left-4 z-10">
                <div className="glass-dark rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-green-200 text-[10px] font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
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

      {/* ── Page-load keyframes (scoped inline to avoid CSS layer conflicts) ── */}
      <style>{`
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(32px); }
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
