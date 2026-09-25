import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

export default function PrivacyPolicy() {
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
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Data Protection Standards</span>
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
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#f5c64c] shadow-[0_0_12px_rgba(245,198,76,0.9)]" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-wide font-medium italic">
              Last Updated: September 2026
            </p>
          </div>
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
