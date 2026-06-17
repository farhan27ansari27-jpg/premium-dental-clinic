import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What makes Dr Akash Abhinav different from other dentists?',
    a: 'Dr Akash is a dual specialist — an Oral & Maxillofacial Pathologist and Certified Oral Implantologist (CCOI) — with advanced post-graduate training (MDS). This specialized expertise allows him to diagnose and treat complex oral conditions that general dentists may miss, combined with state-of-the-art implant solutions.',
  },
  {
    q: 'Is dental implant surgery painful?',
    a: 'With modern anesthesia and Dr Akash\'s gentle, precision-focused technique, the implant procedure is virtually painless. Most patients are surprised at how comfortable it is. Post-operative discomfort is minimal and managed with simple pain relief medication for 1–2 days.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'With proper care and regular dental check-ups, dental implants can last a lifetime. The titanium implant fuses permanently with the jawbone, while the crown on top typically lasts 15–25 years. Dr Akash uses only premium-quality implant systems for lasting results.',
  },
  {
    q: 'What is Oral & Maxillofacial Pathology?',
    a: 'Oral & Maxillofacial Pathology is the specialty concerned with the diagnosis and study of diseases affecting the oral and maxillofacial regions — including tumors, cysts, infections, inflammatory conditions, and lesions. Dr Akash\'s MDS specialization makes him uniquely qualified to identify and manage these complex conditions.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment by filling out our online form on this page, calling us directly at +91-77658-68678, or messaging us on WhatsApp using the floating button. We typically respond within a few hours and will confirm your preferred slot.',
  },
  {
    q: 'Do you offer EMI or payment plans?',
    a: 'Yes! We understand that quality dental care is an investment. We offer flexible payment options and can discuss EMI arrangements for comprehensive treatments like implants or smile makeovers. Please enquire at the time of consultation.',
  },
  {
    q: 'How often should I visit the dentist?',
    a: 'We recommend a check-up and professional cleaning every 6 months for most patients. However, patients with specific conditions like gum disease or implants may benefit from more frequent visits. Dr Akash will recommend a personalized schedule based on your dental health.',
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call us immediately at +91-77658-68678 or WhatsApp us. For knocked-out teeth, keep the tooth moist (in milk or saliva) and come in within an hour. We prioritize emergency cases and will do everything possible to see you as quickly as possible.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-3">Got Questions?</p>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-forest-300 shadow-md bg-forest-50'
                  : 'border-gray-100 bg-white hover:border-forest-200 shadow-sm'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-base pr-4 transition-colors ${open === i ? 'text-forest-800' : 'text-gray-800 group-hover:text-forest-700'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? 'bg-forest-700 text-white' : 'bg-forest-50 text-forest-600 group-hover:bg-forest-100'
                }`}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-7 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-500 mb-4">Still have questions? We're here to help.</p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
