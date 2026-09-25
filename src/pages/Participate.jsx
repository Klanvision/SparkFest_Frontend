import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Flame, ShieldCheck, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Lock, Phone, Mail, User } from 'lucide-react';
import { api } from '../services/api';

export default function Participate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedOffer = searchParams.get('offer') || 'ten_entry';

  // Wizard state: 1 = Details -> 2 = OTP -> 3 = Generating
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    selectedOffer: preselectedOffer,
    termsAccepted: true
  });

  const [otp, setOtp] = useState('');
  const [demoOtpHint, setDemoOtpHint] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Step 1: Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await api.requestOtp(formData.phone);
      if (res.success) {
        setDemoOtpHint(res.data.otp);
        setOtp(res.data.otp); // Pre-fill for seamless demonstration
        setStep(2);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and Register
  const handleVerifyAndRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Verify OTP
      await api.verifyOtp(formData.phone, otp);

      // 2. Register participant and generate ticket
      const regRes = await api.registerParticipant(formData);
      if (regRes.success) {
        // Navigate to confirmation with ticket data
        navigate('/confirmation', {
          state: {
            ticket: regRes.data.ticket,
            participant: regRes.data.participant
          }
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-2">
          <span className={step >= 1 ? 'text-[#ffe58f]' : 'text-white/40'}>1. Participant Details</span>
          <span className={step >= 2 ? 'text-[#ffe58f]' : 'text-white/40'}>2. Mobile OTP</span>
          <span className={step >= 3 ? 'text-[#ffe58f]' : 'text-white/40'}>3. Lucky Ticket</span>
        </div>
        <div className="w-full h-2 bg-[#141634] rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] transition-all duration-300"
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
          ></div>
        </div>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 shadow-2xl relative overflow-hidden">
        {/* Festive Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#28114b]/40 rounded-full blur-3xl pointer-events-none"></div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>{error}</div>
          </div>
        )}

        {/* STEP 1: Details */}
        {step === 1 && (
          <form onSubmit={handleRequestOtp} className="space-y-6">
            <div className="text-center space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201542] border border-[#e5b32f]/30 text-[#ffe58f] text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Quick 2-Minute Entry</span>
              </div>
              <h2 className="font-serif text-3xl font-extrabold gold-gradient-text pt-1">
                Enter Diwali Dhamaka Lucky Draw
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                Join thousands of verified participants for a chance to win up to Premium Gold Coin gifts.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Full Name (As per Bank / ID) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kiran Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. kiran@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                    Mobile Number (For OTP & Ticket) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  City / State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
                />
              </div>

              {/* Offer Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Select Entry Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'ten_entry', title: 'ticket Entry', desc: 'Standard Single Ticket' },
                    { id: 'festival_special', title: 'Festival Special', desc: 'Bonus Entry Ticket' },
                    { id: 'early_bird', title: 'Early Bird', desc: 'Priority Reward Tier' }
                  ].map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setFormData({ ...formData, selectedOffer: tier.id })}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        formData.selectedOffer === tier.id
                          ? 'border-[#e5b32f] bg-[#22173f] shadow-gold-glow'
                          : 'border-white/10 bg-[#090b1c] hover:border-white/30'
                      }`}
                    >
                      <div className="font-bold text-xs text-[#ffe58f]">{tier.title}</div>
                      <div className="text-[10px] text-white/60">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-white/20 text-[#e5b32f] focus:ring-[#e5b32f]"
                  />
                  <span className="text-xs text-white/70">
                    I confirm I am 18 years or older and agree to the{' '}
                    <span className="text-[#ffe58f] underline">Terms & Conditions</span> and Lucky Draw Rules.
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{loading ? 'REQUESTING OTP...' : 'PROCEED TO MOBILE VERIFICATION'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Mobile OTP Verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyAndRegister} className="space-y-6 animate-fadeIn">
            <div className="text-center space-y-1 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#281545] border border-[#e5b32f]/40 flex items-center justify-center text-[#ffe58f] mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-3xl font-extrabold gold-gradient-text">
                Verify Your Mobile Number
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                A 6-digit verification code was generated for <span className="font-mono text-[#ffe58f] font-bold">+91 {formData.phone}</span>.
              </p>
            </div>

            {demoOtpHint && (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-center text-xs text-amber-200">
                <span>Demo Passcode Ready: </span>
                <span className="font-mono font-bold text-[#ffe58f] tracking-widest text-sm ml-1">{demoOtpHint}</span>
              </div>
            )}

            <div>
              <label className="block text-center text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Enter 6-Digit OTP Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                autoFocus
                placeholder="• • • • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-[0.5em] font-mono text-2xl font-bold py-3.5 rounded-2xl bg-[#090b1c] border border-[#e5b32f]/40 text-[#ffe58f] focus:outline-none focus:border-[#e5b32f] focus:ring-2 focus:ring-[#e5b32f]/40"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white/60">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="hover:text-white underline"
              >
                ← Change Number
              </button>
              <button
                type="button"
                onClick={handleRequestOtp}
                className="hover:text-[#ffe58f] text-amber-300 font-semibold"
              >
                Resend OTP Code
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{loading ? 'VERIFYING & GENERATING TICKET...' : 'VERIFY & ISSUE LUCKY TICKET'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
