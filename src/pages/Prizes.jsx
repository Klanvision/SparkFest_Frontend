import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Gift, Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { api } from '../services/api';

export default function Prizes() {
  const [prizes, setPrizes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrizes() {
      try {
        const res = await api.getPrizes();
        if (res.success) {
          setPrizes(res.data);
        }
      } catch (err) {
        console.error('Failed to load prizes:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPrizes();
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Festive Reward Pool</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          Grand Prizes & Rewards
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          Over ₹85,000+ in certified cash rewards and festive gift hampers up for grabs this Diwali.
        </p>
      </div>

      {/* Prize Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {prizes.map((prize, idx) => {
          const isFirst = idx === 0;
          return (
            <div
              key={prize.id}
              className={`rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 relative group ${
                isFirst
                  ? 'bg-gradient-to-b from-[#2d1b16] via-[#1d152a] to-[#11132a] border-2 border-[#e5b32f] shadow-gold-glow lg:-translate-y-2'
                  : 'bg-[#141634] border-[#e5b32f]/25 hover:border-[#e5b32f]/60 hover:shadow-xl'
              }`}
            >
              {isFirst && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] text-[#0b0d1e] shadow-md">
                  ★ Grand Jackpot ★
                </span>
              )}

              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#22163b] border border-[#e5b32f]/30 flex items-center justify-center text-[#ffe58f] mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className={`w-8 h-8 ${isFirst ? 'text-[#f3c64c]' : 'text-[#ffe58f]'}`} />
                </div>

                <div className="text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-white/60">
                    {prize.tier}
                  </span>
                  <h3 className="font-serif text-3xl font-extrabold text-[#ffe58f] my-1">
                    {prize.amount}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mt-2 mb-4">
                    {prize.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/70">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Winners:</span>
                    <span className="font-bold text-[#ffe58f]">{prize.winnersCount} Winner(s)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Eligibility:</span>
                    <span className="text-emerald-400 font-semibold">{prize.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Disbursement:</span>
                    <span className="text-white/80">Direct NEFT/Bank</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/participate"
                  className="w-full py-3 rounded-full font-bold text-xs text-center block bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] text-[#0b0d1e] shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
                >
                  Enter To Win {prize.amount}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus Information */}
      <div className="mt-16 p-8 rounded-3xl bg-[#11132c] border border-[#e5b32f]/20">
        <h3 className="font-serif text-xl font-bold text-[#ffe58f] mb-3">
          Prize Distribution & Claiming Rules
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/70">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Winners must provide government-recognized ID (Aadhaar/PAN) for tax and compliance verification.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Prizes are non-transferable and issued exclusively in the registered name of the ticket holder.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>TDS deductions comply strictly with Indian Income Tax Act regulations where applicable.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Winner notifications are sent instantly via verified SMS and phone call upon draw completion.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
