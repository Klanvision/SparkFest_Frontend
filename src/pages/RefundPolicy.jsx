import React from 'react';
import { PackageX, ShieldAlert, Gift, AlertTriangle } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

export default function RefundPolicy() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase mb-5 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <PackageX className="w-3.5 h-3.5" />
            <span>Refund & Return Framework</span>
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
              Refund & Return Policy
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#f5c64c] shadow-[0_0_12px_rgba(245,198,76,0.9)]" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-wide font-medium italic">
              Effective: Diwali Festival Season 2026
            </p>
          </div>
        </div>

        {/* Critical Notice */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose-950/30 border border-rose-500/25 shadow-inner">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <p className="text-rose-200/90 text-[13px] leading-relaxed">
            <strong className="text-rose-300 font-bold">Important Notice:</strong> Diwali Dhamaka is a <strong>festive lucky draw platform exclusively distributing physical cracker gift hampers and curated festive products.</strong> We do <strong>not</strong> offer cash transfers, bank deposits, monetary rewards, UPI transfers, or any form of digital money disbursements. All prizes are exclusively physical gift items.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">1. Non-Refundable Lucky Draw Entries</h2>
          <p>
            All lucky draw ticket purchases and participation entries are <strong className="text-white/95">strictly non-refundable and non-transferable</strong> once issued. Each ticket represents a confirmed entry into the festive draw pool and cannot be cancelled, exchanged, or refunded under any circumstance, including change of mind, duplicate purchases, or participant ineligibility discovered after entry.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">2. Nature of Prizes — Physical Gifts Only</h2>
          <p>
            Diwali Dhamaka exclusively awards <strong className="text-white/95">curated physical festive gift hampers</strong>, including premium Diwali crackers, decorative items, sweets assortments, and branded festive merchandise. Under no circumstances will the prize be substituted with cash, bank transfers, cheques, UPI payments, cryptocurrency, or any form of monetary equivalent. Prize values are non-negotiable and non-interchangeable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">3. Prize Exchange & Substitution</h2>
          <p>
            Prizes cannot be exchanged for alternative items, upgraded, or transferred to another individual. In the rare event that a specific prize item is unavailable due to supply chain constraints, Diwali Dhamaka reserves the right to substitute with an item of equal or greater market value within the same festive product category.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">4. Damaged or Defective Prize Shipments</h2>
          <p>
            If a prize shipment arrives visibly damaged or in defective condition, the winner must notify our logistics support desk at <a href="mailto:support@diwalidhamaka.com" className="text-[#ffe58f] underline">support@diwalidhamaka.com</a> within <strong className="text-white/95">48 hours of delivery</strong> with photographic evidence. Upon verification, a replacement item of equivalent value will be dispatched within 7–10 working days. Claims raised after 48 hours of confirmed delivery will not be entertained.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">5. Unclaimed Prizes</h2>
          <p>
            Winners who fail to complete identity verification or provide a valid delivery address within <strong className="text-white/95">30 calendar days</strong> of the official draw broadcast will forfeit their prize entitlement. Forfeited prizes will be re-allocated to the next eligible draw participant. No compensation or extension will be granted for forfeited prizes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">6. Disputes & Resolution</h2>
          <p>
            Any disputes relating to prize disbursement, shipment, or draw outcomes must be submitted in writing to <a href="mailto:support@diwalidhamaka.com" className="text-[#ffe58f] underline">support@diwalidhamaka.com</a> within 15 days of the event. All decisions by the Diwali Dhamaka organizing committee are final and binding.
          </p>
        </section>

      </div>
    </div>
  );
}
