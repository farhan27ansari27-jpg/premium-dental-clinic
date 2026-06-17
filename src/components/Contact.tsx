import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';

const info = [
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+91-77658-68678'],
    href: 'tel:+917765868678',
    linkLabel: 'Call Now',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: By Appointment Only'],
    href: '#appointment',
    linkLabel: 'Book Slot',
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Denticle Dental Clinic', 'Please contact us for exact address'],
    href: 'https://maps.google.com',
    linkLabel: 'Get Directions',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['denticledentalclinic@gmail.com'],
    href: 'mailto:denticledentalclinic@gmail.com',
    linkLabel: 'Send Email',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-forest-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-3">Find Us</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {info.map(({ icon: Icon, title, lines, href, linkLabel }, i) => (
              <div key={title} className={`reveal delay-${(i + 1) * 100} bg-white rounded-2xl p-6 shadow-card border border-forest-100 flex gap-5 group hover:shadow-md transition-shadow`}>
                <div className="w-12 h-12 bg-forest-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-800 transition-colors">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-forest-900 mb-1">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-gray-600 text-sm truncate">{l}</p>
                  ))}
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-forest-600 hover:text-forest-800 text-xs font-semibold mt-2 transition-colors"
                  >
                    {linkLabel}
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-3 reveal-right">
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-premium border border-forest-100 bg-white">
              {/* Decorative map placeholder */}
              <div className="relative h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-forest-50 to-emerald-50 relative overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />

                  {/* Map pin */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-forest-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow-green animate-bounce-slow">
                        <MapPin size={30} className="text-white" />
                      </div>
                      <div className="bg-white rounded-2xl px-6 py-4 shadow-premium border border-forest-100 max-w-xs mx-4">
                        <p className="font-bold text-forest-900 font-serif">Denticle Dental Clinic</p>
                        <p className="text-gray-500 text-sm mt-1">Dr Akash Abhinav</p>
                        <p className="text-gray-400 text-xs mt-0.5">BDS, MDS(PGT), CCOI</p>
                        <div className="mt-3 pt-3 border-t border-forest-100">
                          <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-forest-600 hover:text-forest-800 text-sm font-semibold transition-colors"
                          >
                            <MapPin size={14} />
                            Open in Google Maps
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 text-xs text-forest-400 font-mono opacity-50">N</div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-forest-300 opacity-30" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-forest-300 opacity-30" />
                </div>

                {/* Bottom bar */}
                <div className="bg-white px-6 py-4 border-t border-forest-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} className="text-forest-600" />
                    Open: Mon–Sat 9AM–7PM
                  </div>
                  <a
                    href="tel:+917765868678"
                    className="flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors"
                  >
                    <Phone size={14} />
                    Call for directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
