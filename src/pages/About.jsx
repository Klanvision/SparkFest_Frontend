import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Flame, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import archImg from '../assets/festive_arch.jpg';

export default function About() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-flicker" />
          <span>Our Vision & Heritage</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          About Diwali Dhamaka
        </h1>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          Bringing festive joy, trust, and luxury digital rewards to households across the nation with zero compromise on transparency and certified fairness.
        </p>
      </div>

      {/* Main Grid: Story + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#ffe58f]">
            A Festive Celebration Built on Trust
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Diwali Dhamaka was founded with a singular purpose: to elevate the traditional festival lucky draw into a modern, corporate-grade digital experience. We believe that festive anticipation should be accompanied by absolute transparency, verifiable algorithms, and certified prize disbursements.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Every ticket generated on our platform carries a unique cryptographic identifier. When our live draws commence, selection is governed by certified pseudorandom number generators with non-tamperable audit logs.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#141634] border border-[#e5b32f]/20">
              <div className="text-2xl font-extrabold text-[#ffe58f] font-mono">100%</div>
              <div className="text-xs text-white/60">Certified Transparent</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#141634] border border-[#e5b32f]/20">
              <div className="text-2xl font-extrabold text-[#ffe58f] font-mono">₹85,000+</div>
              <div className="text-xs text-white/60">Total Festive Prize Pool</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden border border-[#e5b32f]/40 shadow-2xl p-1 bg-gradient-to-br from-[#ffe58f]/20 via-[#e5b32f]/10 to-transparent">
            <img
              src={archImg}
              alt="Diwali Palace Arch"
              className="w-full max-w-md h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 rounded-3xl bg-[#12142f] border border-[#e5b32f]/20 hover:border-[#e5b32f]/60 transition-all">
          <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="font-serif text-lg font-bold text-[#ffe58f] mb-2">Legal Compliance</h3>
          <p className="text-xs text-white/70 leading-relaxed">
            Operating strictly in accordance with digital contest guidelines, responsible participation standards, and verified KYC verification.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#12142f] border border-[#e5b32f]/20 hover:border-[#e5b32f]/60 transition-all">
          <Lock className="w-8 h-8 text-[#e5b32f] mb-4" />
          <h3 className="font-serif text-lg font-bold text-[#ffe58f] mb-2">Data Privacy</h3>
          <p className="text-xs text-white/70 leading-relaxed">
            End-to-end encrypted storage of participant records with masked public winner displays to protect your personal privacy.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#12142f] border border-[#e5b32f]/20 hover:border-[#e5b32f]/60 transition-all">
          <Award className="w-8 h-8 text-amber-400 mb-4" />
          <h3 className="font-serif text-lg font-bold text-[#ffe58f] mb-2">Guaranteed Payouts</h3>
          <p className="text-xs text-white/70 leading-relaxed">
            Certified direct bank transfers to verified winners within 72 hours of successful identity verification.
          </p>
        </div>
      </div>
    </div>
  );
}
