import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Flame, ShieldCheck, Sparkles, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Lock, Phone, Mail, User } from 'lucide-react';
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

  // Step 2: Verify OTP
  const handleVerifyOtpOnly = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.verifyOtp(formData.phone, otp);
      setStep(3); // Proceed to Payment Scanner
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Payment Confirmation
  const handlePaymentConfirm = async () => {
    setError(null);
    setLoading(true);

    try {
      const regRes = await api.registerParticipant(formData);
      if (regRes.success) {
        navigate('/confirmation', {
          state: {
            ticket: regRes.data.ticket,
            tickets: regRes.data.tickets,
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

  const getTierDetails = () => {
    switch (formData.selectedOffer) {
      case 'festival_special': return { amount: 30, tickets: 3, name: 'Festival Special' };
      case 'early_bird': return { amount: 50, tickets: 5, name: 'Early Bird' };
      case 'ten_entry':
      default: return { amount: 10, tickets: 1, name: 'Ticket Entry' };
    }
  };
  
  const tierInfo = getTierDetails();
  
  const isStep1Valid = Boolean(
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phone.trim().length === 10 &&
    formData.city.trim() &&
    formData.termsAccepted
  );

  return (
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button 
        onClick={() => {
          if (step > 1) setStep(step - 1);
          else navigate(-1);
        }}
        className="mb-6 flex items-center gap-2 text-white/60 hover:text-[#ffe58f] transition-colors text-sm font-semibold group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-2">
          <span className={step >= 1 ? 'text-[#ffe58f]' : 'text-white/40'}>1. Details</span>
          <span className={step >= 2 ? 'text-[#ffe58f]' : 'text-white/40'}>2. Mobile OTP</span>
          <span className={step >= 3 ? 'text-[#ffe58f]' : 'text-white/40'}>3. Payment</span>
        </div>
        <div className="w-full h-2 bg-[#141634] rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] transition-all duration-300"
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
          ></div>
        </div>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-[#141634]/60 backdrop-blur-2xl border border-[#e5b32f]/40 shadow-[0_0_40px_rgba(229,179,47,0.15)] relative overflow-hidden">
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
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201542] border border-[#e5b32f]/30 text-[#ffe58f] text-[10px] sm:text-xs font-semibold mb-5 sm:mb-6">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Quick 2-Minute Entry</span>
              </div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#e5b32f]/20 to-transparent border border-[#e5b32f]/40 flex items-center justify-center mb-3 sm:mb-4 shadow-[0_0_15px_rgba(229,179,47,0.2)] transition-transform hover:scale-105 duration-300">
                <User className="w-6 h-6 sm:w-7 sm:h-7 text-[#ffe58f]" />
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text italic tracking-wide text-center">
                Participant Details
              </h2>
              
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#e5b32f]/60"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 bg-gradient-to-br from-[#ffe58f] to-[#d4af37] shadow-[0_0_10px_rgba(229,179,47,0.8)]"></div>
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#e5b32f]/60"></div>
              </div>
              
              <p className="text-xs sm:text-sm text-white/70 mt-5 sm:mt-6 text-center max-w-md leading-relaxed">
                Join thousands of verified participants for a chance to win up to Premium Gold Coin gifts.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
                  Full Name (As per Bank / ID) *
                </label>
                <div className="relative group">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#e5b32f] transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kiran Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-gradient-to-b from-[#141634]/50 to-[#090b1c]/80 backdrop-blur-md border border-[#e5b32f]/20 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e5b32f]/80 focus:ring-1 focus:ring-[#e5b32f]/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
                    Email Address *
                  </label>
                  <div className="relative group">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#e5b32f] transition-colors" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. kiran@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-gradient-to-b from-[#141634]/50 to-[#090b1c]/80 backdrop-blur-md border border-[#e5b32f]/20 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e5b32f]/80 focus:ring-1 focus:ring-[#e5b32f]/50 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative group">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#e5b32f] transition-colors" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-gradient-to-b from-[#141634]/50 to-[#090b1c]/80 backdrop-blur-md border border-[#e5b32f]/20 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e5b32f]/80 focus:ring-1 focus:ring-[#e5b32f]/50 transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
                  City / State
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-gradient-to-b from-[#141634]/50 to-[#090b1c]/80 backdrop-blur-md border border-[#e5b32f]/20 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e5b32f]/80 focus:ring-1 focus:ring-[#e5b32f]/50 transition-all shadow-inner"
                />
              </div>

              {/* Offer Selector */}
              <div className="pt-2">
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">
                  Select Entry Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {[
                    { id: 'ten_entry', title: 'Ticket Entry', desc: 'Standard Single Ticket', price: '₹10' },
                    { id: 'festival_special', title: 'Festival Special', desc: 'Bonus Entry Ticket', price: '₹30' },
                    { id: 'early_bird', title: 'Early Bird', desc: 'Priority Reward Tier', price: '₹50' }
                  ].map((tier) => {
                    const isActive = formData.selectedOffer === tier.id;
                    return (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setFormData({ ...formData, selectedOffer: tier.id })}
                        className={`relative p-3 sm:p-4 rounded-2xl border text-left transition-all duration-500 overflow-hidden group ${
                          isActive
                            ? 'border-[#e5b32f]/80 shadow-[0_0_20px_rgba(229,179,47,0.3)] scale-[1.02] -translate-y-1'
                            : 'border-[#e5b32f]/20 hover:border-[#e5b32f]/50 hover:-translate-y-1 hover:shadow-lg'
                        }`}
                      >
                        {/* Glass Background */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} bg-gradient-to-br from-[#1a1435]/90 via-[#130f26]/90 to-[#0a0710]/90 backdrop-blur-xl`}></div>
                        
                        {/* Glow effect for active state */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#ffe58f]/10 to-transparent pointer-events-none"></div>
                        )}
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full justify-between gap-2">
                          <div>
                            <div className={`font-serif text-sm sm:text-base font-extrabold tracking-wide ${isActive ? 'gold-gradient-text' : 'text-white/80 group-hover:text-white transition-colors'}`}>
                              {tier.title}
                            </div>
                            <div className="text-[10px] sm:text-xs text-white/50 leading-tight mt-0.5">
                              {tier.desc}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-1">
                            <span className={`font-mono font-bold text-sm sm:text-base ${isActive ? 'text-[#ffe58f]' : 'text-white/40 group-hover:text-[#e5b32f]/80'}`}>
                              {tier.price}
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#e5b32f] bg-[#e5b32f]/20' : 'border-white/20'}`}>
                              {isActive && <div className="w-2 h-2 rounded-full bg-[#ffe58f] shadow-[0_0_5px_#ffe58f]"></div>}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
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
              disabled={loading || !isStep1Valid}
              className={`w-full py-4 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                loading || !isStep1Valid
                  ? 'bg-[#141634] text-white/40 cursor-not-allowed border border-white/10'
                  : 'text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95'
              }`}
            >
              <span>{loading ? 'REQUESTING OTP...' : 'PROCEED TO MOBILE VERIFICATION'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Mobile OTP Verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtpOnly} className="space-y-6 animate-fadeIn">
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#e5b32f]/20 to-transparent border border-[#e5b32f]/40 flex items-center justify-center mb-3 sm:mb-4 shadow-[0_0_15px_rgba(229,179,47,0.2)] transition-transform hover:scale-105 duration-300">
                <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-[#ffe58f]" />
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text italic tracking-wide text-center">
                Mobile Verification
              </h2>
              
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#e5b32f]/60"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 bg-gradient-to-br from-[#ffe58f] to-[#d4af37] shadow-[0_0_10px_rgba(229,179,47,0.8)]"></div>
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#e5b32f]/60"></div>
              </div>
              
              <p className="text-xs sm:text-sm text-white/70 mt-5 sm:mt-6 text-center leading-relaxed">
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
              <span>{loading ? 'VERIFYING...' : 'VERIFY OTP & PROCEED'}</span>
            </button>
          </form>
        )}

        {/* STEP 3: Payment Scanner */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#e5b32f]/20 to-transparent border border-[#e5b32f]/40 flex items-center justify-center mb-3 sm:mb-4 shadow-[0_0_15px_rgba(229,179,47,0.2)] transition-transform hover:scale-105 duration-300">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#ffe58f]" />
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text italic tracking-wide text-center">
                Secure Entry Payment
              </h2>
              
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#e5b32f]/60"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 bg-gradient-to-br from-[#ffe58f] to-[#d4af37] shadow-[0_0_10px_rgba(229,179,47,0.8)]"></div>
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#e5b32f]/60"></div>
              </div>
              
              <p className="text-xs sm:text-sm text-white/70 mt-5 sm:mt-6 max-w-md mx-auto text-center leading-relaxed">
                Scan the QR code below using any UPI app to finalize your <span className="text-[#ffe58f] font-bold">{tierInfo.name}</span> participation.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-[#090b1c]/80 border border-[#e5b32f]/30 rounded-2xl mx-auto max-w-xs shadow-inner relative">
              {/* Premium corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#e5b32f] rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#e5b32f] rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#e5b32f] rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#e5b32f] rounded-br-lg"></div>
              
              <div className="w-48 h-48 bg-white p-2 rounded-xl flex items-center justify-center mb-4">
                {/* Generic placeholder for QR */}
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=sparkfest@upi&pn=SparkFest&am=${tierInfo.amount}&cu=INR`}
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center w-full">
                <div className="text-[#e5b32f] font-bold text-3xl font-serif">₹{tierInfo.amount}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
                  Generates {tierInfo.tickets} {tierInfo.tickets > 1 ? 'Tickets' : 'Ticket'}
                </div>
              </div>
            </div>

            <button
              onClick={handlePaymentConfirm}
              disabled={loading}
              className="w-full py-4 mt-4 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{loading ? 'GENERATING TICKETS...' : 'I HAVE PAID, GENERATE TICKETS'}</span>
            </button>
            <div className="text-center">
               <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[11px] text-white/40 hover:text-white underline mt-2"
                >
                  Cancel & Change Tier
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
