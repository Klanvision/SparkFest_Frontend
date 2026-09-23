import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Tag, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOffers() {
      try {
        const res = await api.getOffers();
        if (res.success) {
          setOffers(res.data);
        }
      } catch (err) {
        console.error('Failed to load offers:', err);
      } finally {
        setLoading(false);
      }
    }
    loadOffers();
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <Tag className="w-3.5 h-3.5 text-amber-400" />
          <span>Exclusive Festive Specials</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          Diwali Dhamaka Offers
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          Multiply your chances and unlock bonus tickets with our limited-time festival offers.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="rounded-3xl p-8 flex flex-col justify-between border border-[#e5b32f]/30 hover:border-[#e5b32f] hover:shadow-gold-glow transition-all duration-300 bg-gradient-to-br from-[#1d1238] via-[#241238] to-[#140e28] relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e5b32f]/20 border border-[#e5b32f]/40 flex items-center justify-center text-[#ffe58f]">
                  <Sparkles className="w-6 h-6 text-[#f3c64c]" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ffe58f] bg-[#e5b32f]/20 border border-[#e5b32f]/30">
                  {offer.badge}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-extrabold text-[#ffe58f] mb-1">
                {offer.title}
              </h3>
              <p className="text-xs text-white/60 mb-4 font-medium uppercase tracking-wider">
                {offer.subtitle}
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {offer.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant bonus ticket allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eligible for all prize tiers</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Valid until draw date (10 Nov 2026)</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to={offer.ctaLink || '/participate'}
                className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm text-center block bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] text-[#0b0d1e] shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
              >
                {offer.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
