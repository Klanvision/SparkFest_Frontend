import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null, refNum: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, refNum: '' });

    try {
      const res = await api.submitContact(formData);
      if (res.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          refNum: res.data.referenceNumber
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message, refNum: '' });
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>24/7 Dedicated Festive Support</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          Contact Diwali Dhamaka
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          Have a question about your lucky ticket or need assistance with registration? Our support team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#141634] border border-[#e5b32f]/25 space-y-6 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-[#ffe58f]">
              Direct Assistance Channels
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              We provide prompt, secure assistance for all participants, ticket holders, and inquiries regarding the Diwali draw.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23173d] flex items-center justify-center text-[#e5b32f] shrink-0 border border-[#e5b32f]/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold uppercase">Email Support</div>
                  <a href="mailto:support@diwalidhamaka.com" className="text-sm font-medium text-white hover:text-[#ffe58f]">
                    support@diwalidhamaka.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23173d] flex items-center justify-center text-[#e5b32f] shrink-0 border border-[#e5b32f]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold uppercase">Toll-Free Helpline</div>
                  <a href="tel:+918005552026" className="text-sm font-medium text-white hover:text-[#ffe58f]">
                    1800-555-2026
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23173d] flex items-center justify-center text-[#e5b32f] shrink-0 border border-[#e5b32f]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold uppercase">Service Hours</div>
                  <div className="text-sm font-medium text-white">
                    Mon - Sat: 9:00 AM - 8:00 PM (IST)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23173d] flex items-center justify-center text-[#e5b32f] shrink-0 border border-[#e5b32f]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold uppercase">Corporate Headquarters</div>
                  <div className="text-sm font-medium text-white">
                    Diwali Dhamaka Towers, Bandra Kurla Complex, Mumbai, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 shadow-2xl space-y-5"
          >
            <h3 className="font-serif text-2xl font-bold text-[#ffe58f] mb-1">
              Send an Official Inquiry
            </h3>

            {status.success && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Inquiry Submitted Successfully!</span>
                  Your reference ID is <span className="font-mono font-bold text-white">{status.refNum}</span>. Our support desk will reply within 24 business hours.
                </div>
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>{status.error}</div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ticket Verification Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                Message / Question *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write your inquiry or question here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{status.loading ? 'SUBMITTING...' : 'SUBMIT CONTACT REQUEST'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
