import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const services = [
  'Dental Implants', 'Teeth Whitening', 'Cosmetic Dentistry', 'Oral Pathology',
  'Preventive Care', 'Oral Surgery', 'Root Canal', 'Orthodontics',
  'Crowns & Bridges', 'Emergency Dental', 'Other',
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
  '04:30 PM', '05:00 PM', '05:30 PM',
];

const defaultForm = {
  name: '', phone: '', email: '', service: '', date: '', time: '', message: '',
};

export default function Appointment() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const { error: dbError } = await supabase.from('appointments').insert([{
        patient_name: form.name,
        phone: form.phone,
        email: form.email || null,
        service: form.service,
        appointment_date: form.date,
        appointment_time: form.time,
        message: form.message || null,
        status: 'pending',
      }]);

      if (dbError) throw dbError;
      setStatus('success');
      setForm(defaultForm);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to book appointment.';
      setError(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="appointment" className="py-24 bg-gradient-to-br from-forest-900 to-forest-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12">
            <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Appointment Requested!</h3>
            <p className="text-green-200/80 text-lg mb-8">
              Thank you! We've received your appointment request and will confirm your slot via phone or WhatsApp within a few hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-primary"
            >
              Book Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-gradient-to-br from-forest-900 to-forest-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-700/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left — info */}
          <div className="lg:col-span-2 text-white space-y-8">
            <div className="reveal-left">
              <p className="text-green-400 font-semibold text-sm tracking-widest uppercase mb-3">Schedule a Visit</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
                Book Your <span className="gradient-text-gold">Appointment</span>
              </h2>
              <p className="text-green-200/70 text-lg leading-relaxed">
                Take the first step towards your perfect smile. Fill in the form and our team will confirm your appointment within a few hours.
              </p>
            </div>

            <div className="reveal-left delay-200 space-y-5">
              {[
                { icon: Phone, label: 'Phone / WhatsApp', value: '+91-77658-68678' },
                { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 9AM – 7PM' },
                { icon: Calendar, label: 'Emergency', value: 'Available on call' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-forest-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-green-300/60 text-xs font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Doctor image mini */}
            <div className="reveal-left delay-300">
              <div className="glass rounded-2xl p-5 flex items-center gap-4">
                <img
                  src="/doctors.webp"
                  alt="Dr Akash Abhinav"
                  className="w-16 h-16 rounded-full object-cover object-top border-2 border-forest-400/40 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-semibold">Dr Akash Abhinav</p>
                  <p className="text-green-200/70 text-xs">BDS, MDS(PGT), CCOI</p>
                  <p className="text-green-300 text-xs mt-1 font-medium">Available Mon–Sat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="glass-white rounded-3xl p-8 md:p-10 shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => set('service', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 text-sm transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        required
                        min={minDateStr}
                        value={form.date}
                        onChange={(e) => set('date', e.target.value)}
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        required
                        value={form.time}
                        onChange={(e) => set('time', e.target.value)}
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 text-sm transition"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-forest-800 mb-2">Message / Symptoms</label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3 top-4 text-gray-400" />
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        placeholder="Describe your concern or any specific symptoms..."
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm transition resize-none"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      Confirm Appointment
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to be contacted by our clinic staff for appointment confirmation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
