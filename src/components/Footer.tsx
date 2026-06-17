import { Phone, MapPin, Clock, Mail, Heart } from 'lucide-react';

const links = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Dr Akash', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Patient Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
  'Services': [
    { label: 'Dental Implants', href: '#services' },
    { label: 'Teeth Whitening', href: '#services' },
    { label: 'Cosmetic Dentistry', href: '#services' },
    { label: 'Oral Pathology', href: '#services' },
    { label: 'Oral Surgery', href: '#services' },
    { label: 'Orthodontics', href: '#services' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 4 5 4 9c0 2.5 1.2 4.7 3 6.1L9 20h6l2-4.9C18.8 13.7 20 11.5 20 9c0-4-4-7-8-7z"/>
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-xl">Denticle</span>
                <span className="block text-xs text-green-300 tracking-widest">DENTAL CLINIC</span>
              </div>
            </div>

            <p className="text-green-200/60 text-sm leading-relaxed mb-5 max-w-sm">
              Under the expert care of Dr Akash Abhinav (BDS, MDS PGT, CCOI), Denticle Dental Clinic is dedicated to providing world-class dental care with compassion, precision, and the latest technology.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+917765868678" className="flex items-center gap-3 text-sm text-green-200/70 hover:text-white transition-colors">
                <Phone size={15} className="text-forest-400" />
                +91-77658-68678
              </a>
              <div className="flex items-center gap-3 text-sm text-green-200/70">
                <Clock size={15} className="text-forest-400" />
                Mon–Sat: 9AM–7PM
              </div>
              <div className="flex items-start gap-3 text-sm text-green-200/70">
                <MapPin size={15} className="text-forest-400 mt-0.5 flex-shrink-0" />
                Denticle Dental Clinic
              </div>
              <a href="mailto:denticledentalclinic@gmail.com" className="flex items-center gap-3 text-sm text-green-200/70 hover:text-white transition-colors">
                <Mail size={15} className="text-forest-400" />
                denticledentalclinic@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{heading}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-green-200/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credentials bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'BDS Graduate',
              'MDS (PGT) Specialist',
              'CCOI Certified',
              'Life Member — IDA',
              'Int\'l Affiliate — ADA',
              'Oral & Maxillofacial Pathologist',
            ].map((badge) => (
              <span key={badge} className="text-xs text-green-300/60 border border-white/10 rounded-full px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-200/40">
          <p>&copy; {new Date().getFullYear()} Denticle Dental Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-red-400 fill-red-400" /> for Dr Akash Abhinav
          </p>
        </div>
      </div>
    </footer>
  );
}
