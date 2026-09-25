import React from 'react';
import { HeartHandshake, ShieldAlert, CheckCircle2 } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

export default function ResponsibleParticipation() {
  return (
    <div
      className="w-full pt-[68px] sm:pt-[76px] lg:pt-[80px]"
      style={{
        backgroundImage: `url(${howItWorksBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y'
      }}
    >
      <div className="pt-6 sm:pt-10 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-white/80 leading-relaxed text-sm">

        {/* Header */}
        <div className="text-center pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Fair Play & Community Safeguards</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1
              className="font-serif italic font-extrabold text-[36px] sm:text-[46px] lg:text-[56px] tracking-wider drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]"
              style={{
                background: 'linear-gradient(135deg, #fff7cc 0%, #f5c64c 35%, #d4af37 65%, #c8922e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px rgba(245, 198, 76, 0.3)',
                lineHeight: '1.2'
              }}
            >
              Responsible Participation
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#f5c64c] shadow-[0_0_12px_rgba(245,198,76,0.9)]" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-wide font-medium italic">
              Our commitment to balanced festive celebrations.
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">Celebrate Mindfully</h2>
          <p>
            Diwali Dhamaka is created purely as a festive celebration and rewards activity to spread happiness and auspicious joy during the Diwali season. It should always remain an enjoyable recreational experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">Our Key Guidelines</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Participate solely for festive fun and within sensible financial boundaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Never view prize draws as an investment vehicle or financial solution.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Strict age gate of 18+ enforced on all registrations and prize claims.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">Need Assistance or Time-out?</h2>
          <p>
            If you ever wish to suspend your participation or delete your account records, simply contact our dedicated support officers at <a href="mailto:support@diwalidhamaka.com" className="text-[#ffe58f] underline">support@diwalidhamaka.com</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
