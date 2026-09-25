import React from 'react';
import { ShieldCheck } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

export default function TermsConditions() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201542] border border-[#e5b32f]/30 text-[#ffe58f] text-xs font-semibold uppercase mb-5 shadow-[0_0_15px_rgba(245,198,76,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Governance & Rules</span>
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
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#f5c64c] shadow-[0_0_12px_rgba(245,198,76,0.9)]" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-wide font-medium italic">
              Effective: Diwali 2026
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">1. Eligibility</h2>
          <p>
            The Diwali Dhamaka Lucky Draw is open exclusively to legal residents of India who are 18 years of age or older at the time of entry. Employees, contractors, and immediate family members of the organizing committee are disqualified from claiming grand tier prizes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">2. Ticket Authenticity & Allocation</h2>
          <p>
            Tickets are generated cryptographically and assigned unique alphanumeric identifiers (e.g. DD-2026-XXXXX). Each ticket represents one distinct entry into the draw pool. Duplicate or altered ticket vouchers are void.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">3. Prize Disbursements</h2>
          <p>
            Prize amounts are disbursed via direct electronic secure gift delivery (trusted logistic partners). Winners must furnish valid government-issued photo identification (Aadhaar, Passport, or PAN Card) matching their registered registration name within 30 calendar days of draw broadcast.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">4. Taxation & Deductions</h2>
          <p>
            Winnings are subject to applicable Indian Income Tax Act withholding (TDS) under section 194B where prize amounts exceed statutory threshold limits. Net amounts will be disbursed with official TDS certificates.
          </p>
        </section>

      </div>
    </div>
  );
}
