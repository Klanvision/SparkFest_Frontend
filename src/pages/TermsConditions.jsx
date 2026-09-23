import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 space-y-8 text-white/80 leading-relaxed text-sm">
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201542] border border-[#e5b32f]/30 text-[#ffe58f] text-xs font-semibold uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Governance & Rules</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
            Terms & Conditions
          </h1>
          <p className="text-xs text-white/50 mt-1">Effective: Diwali 2026</p>
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
            Prize amounts are disbursed via direct electronic bank transfer (NEFT/RTGS). Winners must furnish valid government-issued photo identification (Aadhaar, Passport, or PAN Card) matching their registered registration name within 30 calendar days of draw broadcast.
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
