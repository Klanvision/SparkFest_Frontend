import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 space-y-8 text-white/80 leading-relaxed text-sm">
        <div className="border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201542] border border-[#e5b32f]/30 text-[#ffe58f] text-xs font-semibold uppercase mb-3">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Data Protection Standards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
            Privacy Policy
          </h1>
          <p className="text-xs text-white/50 mt-1">Last Updated: September 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">1. Information We Collect</h2>
          <p>
            When you register for the Diwali Dhamaka Lucky Draw, we collect your name, email address, mobile number, and city. This information is strictly utilized to authenticate your identity, issue your digital lucky draw ticket, and communicate official draw outcomes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">2. Public Masking of Winner Identities</h2>
          <p>
            To honor participant privacy and personal security, public broadcasts of draw winners display masked names (e.g. <em>R*** S***</em>) along with partial ticket numbers. Full participant details are never disclosed publicly without explicit written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">3. Security and Storage</h2>
          <p>
            All communications are encrypted using Transport Layer Security (TLS 1.3). Data records are stored in hardened database instances with strict role-based access control and comprehensive access auditing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">4. Contact Our Data Protection Officer</h2>
          <p>
            For inquiries regarding your stored participant records or to request data removal, please contact our privacy desk at <a href="mailto:privacy@diwalidhamaka.com" className="text-[#ffe58f] underline">privacy@diwalidhamaka.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
