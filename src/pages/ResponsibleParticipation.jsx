import React from 'react';
import { HeartHandshake, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ResponsibleParticipation() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 space-y-8 text-white/80 leading-relaxed text-sm">
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Fair Play & Community Safeguards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
            Responsible Participation
          </h1>
          <p className="text-xs text-white/50 mt-1">Our commitment to balanced festive celebrations.</p>
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
