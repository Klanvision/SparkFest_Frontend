import React from 'react';
import { ShoppingBag, Gift, Truck, CheckCircle2, AlertTriangle } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

export default function ShoppingPolicy() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase mb-5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Prize Delivery & Gifting Standards</span>
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
              Shopping Policy
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="w-2 h-2 rotate-45 bg-[#f5c64c] shadow-[0_0_12px_rgba(245,198,76,0.9)]" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-wide font-medium italic">
              Festive Gift Procurement & Delivery Guidelines — Diwali 2026
            </p>
          </div>
        </div>

        {/* Platform Nature Notice */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-950/30 border border-amber-500/25 shadow-inner">
          <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-200/90 text-[13px] leading-relaxed">
            <strong className="text-amber-300 font-bold">Platform Notice:</strong> Diwali Dhamaka is a <strong>curated festive gifting platform</strong>. All prizes are <strong>physical Diwali gift hampers</strong> — premium crackers, festive décor, sweets, and branded merchandise. We do <strong>not</strong> process monetary transactions, cash payouts, or financial product disbursements of any kind.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">1. What We Offer</h2>
          <p>
            Diwali Dhamaka is a lucky draw platform where participants register and receive a unique digital ticket for a chance to win one of our tiered festive prize hampers. Our prize catalogue includes:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'Premium Diwali cracker gift boxes (Gold, Silver, Bronze, and Purple tier assortments)',
              'Artisan festive sweet hampers and dry fruit collections',
              'Branded Diwali home décor and diyas collections',
              'Exclusive limited-edition festive merchandise kits'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">2. No Monetary Transactions</h2>
          <p>
            Diwali Dhamaka does <strong className="text-white/95">not operate as a shopping platform</strong> in the traditional sense. There are no add-to-cart purchases, no product listings for sale, and <strong className="text-white/95">no monetary payments for prizes</strong>. Participation entries are the only financial transaction. Prize procurement, packaging, and shipping to winners is handled entirely by our registered logistics partners at no cost to the winner.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">3. Prize Procurement Standards</h2>
          <p>
            All festive gift hampers and cracker products are sourced exclusively from <strong className="text-white/95">PESO-licensed and government-certified crackers manufacturers</strong> and registered FSSAI-compliant sweet vendors. Every prize item undergoes quality inspection before packaging and dispatch to ensure a premium unboxing experience for every winner.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">4. Prize Delivery & Shipping</h2>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 mb-3">
            <Truck className="w-5 h-5 text-[#ffe58f] shrink-0 mt-0.5" />
            <p>Prizes are dispatched through our authorized courier partners within <strong className="text-white/95">7–14 business days</strong> after identity verification is complete.</p>
          </div>
          <ul className="space-y-2">
            {[
              'Delivery is available across all states within India (excluding restricted areas under local cracker regulations).',
              'Winners in states with seasonal cracker restrictions may receive equivalent festive hampers substituted appropriately.',
              'All deliveries are tracked end-to-end. Tracking details are shared via registered email and SMS.',
              'A delivery attempt will be made up to 3 times. After 3 failed attempts, the prize will be forfeited.'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">5. Safety & Regulatory Compliance</h2>
          <p>
            All cracker products distributed as prizes strictly comply with <strong className="text-white/95">Petroleum and Explosives Safety Organisation (PESO)</strong> guidelines and are within the permissible sound and chemical emission levels mandated by the Supreme Court of India. Winners are advised to use all cracker products responsibly, following local municipal and state government regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#ffe58f]">6. Contact for Prize Queries</h2>
          <p>
            For any questions relating to prize fulfilment, delivery status, or prize quality concerns, please reach out to our dedicated gifting desk at <a href="mailto:gifts@diwalidhamaka.com" className="text-[#ffe58f] underline">gifts@diwalidhamaka.com</a> or call our helpline at <a href="tel:18005552026" className="text-[#ffe58f] underline">1800-555-2026</a> (Mon–Sat, 9 AM – 8 PM IST).
          </p>
        </section>

      </div>
    </div>
  );
}
