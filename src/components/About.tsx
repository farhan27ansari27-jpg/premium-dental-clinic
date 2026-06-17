import { CheckCircle2, GraduationCap, Award, Globe } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'BDS',
    desc: 'Bachelor of Dental Surgery — Foundation in comprehensive dental education and clinical practice.',
  },
  {
    icon: GraduationCap,
    title: 'MDS (PGT)',
    desc: 'Master of Dental Surgery — Post Graduate Training in Oral & Maxillofacial Pathology.',
  },
  {
    icon: Award,
    title: 'CCOI',
    desc: 'Certified Course in Oral Implantology — Advanced training in implant dentistry and restoration.',
  },
];

const memberships = [
  'Life Member — Indian Dental Association',
  'International Affiliate Member — American Dental Association',
  'Certified Oral Implantologist',
  'Oral & Maxillofacial Pathologist',
];

const highlights = [
  'Advanced diagnosis using latest technology',
  'Personalized treatment plans',
  'Pain-free procedures with modern techniques',
  'Comprehensive implant solutions',
  'Expert in complex oral surgeries',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle mb-3">Who We Are</p>
          <h2 className="section-title">
            Meet <span className="gradient-text">Dr Akash Abhinav</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image + decorative */}
          <div className="relative reveal-left">
            <div className="relative">
              {/* Background blob */}
              <div className="absolute -inset-4 bg-gradient-to-br from-forest-50 to-emerald-50 rounded-3xl -rotate-2" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src="/doctors.webp"
                  alt="Dr Akash Abhinav"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent" />

                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-dark rounded-2xl p-5 text-white">
                    <h3 className="font-serif text-xl font-bold mb-1">Dr Akash Abhinav</h3>
                    <p className="text-green-200 text-sm">Oral & Maxillofacial Pathologist</p>
                    <p className="text-green-200 text-sm">Certified Oral Implantologist</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {['BDS', 'MDS (PGT)', 'CCOI'].map((q) => (
                        <span key={q} className="text-xs bg-forest-600 text-white px-2.5 py-1 rounded-full font-semibold">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Memberships card */}
            <div className="absolute -bottom-8 -right-6 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-premium p-5 w-52 border border-forest-100">
                <Globe size={20} className="text-forest-600 mb-3" />
                <p className="text-xs font-semibold text-forest-800 mb-2">International Member</p>
                <p className="text-xs text-gray-500 leading-relaxed">American Dental Association</p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="space-y-8 reveal-right">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dr Akash Abhinav is a highly qualified Oral & Maxillofacial Pathologist and Certified Oral Implantologist with over a decade of experience transforming smiles and restoring confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Denticle Dental Clinic, he combines cutting-edge technology with compassionate care to deliver exceptional results. His patient-centric approach ensures every individual receives personalized attention and comprehensive treatment.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{h}</span>
                </div>
              ))}
            </div>

            {/* Memberships */}
            <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
              <p className="font-semibold text-forest-800 mb-4 flex items-center gap-2">
                <Award size={18} className="text-forest-600" />
                Professional Memberships
              </p>
              <div className="space-y-2">
                {memberships.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-sm text-forest-700">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full flex-shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications cards */}
        <div className="mt-20">
          <h3 className="text-center font-serif text-3xl font-bold text-forest-900 mb-10 reveal">
            Academic <span className="gradient-text">Qualifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((q, i) => (
              <div
                key={q.title}
                className={`reveal delay-${(i + 1) * 100} service-card bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl p-8 text-center group`}
              >
                <div className="w-16 h-16 bg-forest-700 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:bg-forest-800 transition-colors">
                  <q.icon size={28} className="text-white" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest-900 mb-3">{q.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
