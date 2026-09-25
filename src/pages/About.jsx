import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Flame, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import archImg from '../assets/festive_arch.jpg';
import howItWorksBg from '../../Images/how-it-works-background.png';

const emeraldTheme = {
  cardBg: 'linear-gradient(135deg, rgba(6, 38, 22, 0.82) 0%, rgba(2, 18, 10, 0.92) 100%)',
  borderClass: 'border-[#10b981]/55 hover:border-[#34d399]/90',
  glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(52,211,153,0.38)]',
  flareColor: '#10b981',
  flareCenterColor: '#6ee7b7',
  dividerColor: '#059669',
  titleColor: '#6ee7b7'
};

const roseTheme = {
  cardBg: 'linear-gradient(135deg, rgba(38, 6, 22, 0.82) 0%, rgba(18, 2, 10, 0.92) 100%)',
  borderClass: 'border-[#f43f5e]/55 hover:border-[#fb7185]/90',
  glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(244,63,94,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(251,113,133,0.42)]',
  flareColor: '#f43f5e',
  flareCenterColor: '#fecdd3',
  dividerColor: '#e11d48',
  titleColor: '#fda4af'
};

const azureTheme = {
  cardBg: 'linear-gradient(135deg, rgba(6, 22, 56, 0.82) 0%, rgba(2, 10, 28, 0.92) 100%)',
  borderClass: 'border-[#3b82f6]/55 hover:border-[#60a5fa]/90',
  glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(59,130,246,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(96,165,250,0.42)]',
  flareColor: '#3b82f6',
  flareCenterColor: '#bfdbfe',
  dividerColor: '#2563eb',
  titleColor: '#93c5fd'
};

const amberTheme = {
  cardBg: 'linear-gradient(135deg, rgba(56, 22, 6, 0.82) 0%, rgba(28, 10, 2, 0.92) 100%)',
  borderClass: 'border-[#f59e0b]/55 hover:border-[#fbbf24]/90',
  glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(245,158,11,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(251,191,36,0.42)]',
  flareColor: '#f59e0b',
  flareCenterColor: '#fde68a',
  dividerColor: '#d97706',
  titleColor: '#fcd34d'
};

const rubyTheme = {
  cardBg: 'linear-gradient(135deg, rgba(56, 6, 12, 0.82) 0%, rgba(28, 2, 6, 0.92) 100%)',
  borderClass: 'border-[#ef4444]/55 hover:border-[#f87171]/90',
  glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(239,68,68,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(248,113,113,0.42)]',
  flareColor: '#ef4444',
  flareCenterColor: '#fecaca',
  dividerColor: '#dc2626',
  titleColor: '#fca5a5'
};

const principles = [
  {
    title: 'Legal Compliance',
    desc: 'Operating strictly in accordance with digital contest guidelines, responsible participation standards, and verified KYC verification.',
    icon: ShieldCheck,
    theme: emeraldTheme
  },
  {
    title: 'Data Privacy',
    desc: 'End-to-end encrypted storage of participant records with masked public winner displays to protect your personal privacy.',
    icon: Lock,
    theme: azureTheme
  },
  {
    title: 'Guaranteed Payouts',
    desc: 'Certified direct secure gift deliveries to verified winners within 72 hours of successful identity verification.',
    icon: Award,
    theme: roseTheme
  }
];

const GlassPrincipleCard = ({ principle }) => {
  const { theme, icon: Icon } = principle;

  return (
    <div
      className={`group relative rounded-2xl p-6 flex flex-col items-center justify-start text-center transition-all duration-300 ease-out hover:-translate-y-2 cursor-default overflow-hidden border backdrop-blur-md min-h-[260px] ${theme.borderClass} ${theme.glowShadow}`}
      style={{
        background: theme.cardBg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      <div
        className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-28 sm:w-36 h-3.5 rounded-full blur-[8px] pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-x-120 group-hover:w-44 transition-all duration-300"
        style={{ backgroundColor: theme.flareColor }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-[2px] rounded-full pointer-events-none opacity-95 group-hover:w-28 transition-all duration-300"
        style={{
          backgroundColor: theme.flareCenterColor,
          boxShadow: `0 0 14px 3px ${theme.flareColor}`
        }}
      />

      <div className="relative z-10 w-16 h-16 mt-2 mb-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300 ease-out"
        style={{ border: `1.5px solid ${theme.dividerColor}60`, backgroundColor: `${theme.flareColor}10`, boxShadow: `0 0 15px ${theme.flareColor}40` }}>
        <Icon className="w-7 h-7" style={{ color: theme.titleColor, filter: `drop-shadow(0 0 8px ${theme.flareColor})` }} />
      </div>

      <h3 className="font-serif italic font-bold text-[19px] sm:text-[20px] leading-tight tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] z-10"
        style={{ color: theme.titleColor }}>
        {principle.title}
      </h3>

      <div className="flex items-center justify-center gap-1.5 w-full my-3 z-10 select-none">
        <div className="h-[1.5px] w-8" style={{ background: `linear-gradient(to right, transparent, ${theme.dividerColor})` }} />
        <div className="w-1.5 h-1.5 rotate-45 border-[1px]" style={{ borderColor: theme.dividerColor, backgroundColor: theme.dividerColor, boxShadow: `0 0 8px ${theme.dividerColor}` }} />
        <div className="h-[1.5px] w-8" style={{ background: `linear-gradient(to left, transparent, ${theme.dividerColor})` }} />
      </div>

      <p className="font-sans text-[13px] text-white/85 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] z-10 px-1 mt-2">
        {principle.desc}
      </p>
    </div>
  );
};

export default function About() {
  return (
    <div
      className="relative min-h-screen w-full pt-28 pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${howItWorksBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#060918]/80 backdrop-blur-[4px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(229,179,47,0.3)]">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-flicker" />
            <span>Our Vision & Heritage</span>
          </div>

          <h1 className="font-serif italic font-extrabold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#ffe58f] via-[#f5c64c] to-[#d4af37] tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]" style={{ WebkitTextStroke: '1px rgba(229,179,47,0.2)' }}>
            About Diwali Dhamaka
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#fcf8f0]/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-2xl mx-auto leading-relaxed mt-4">
            Bringing festive joy, trust, and luxury digital rewards to households across the nation with zero compromise on transparency and certified fairness.
          </p>
        </div>

        {/* Main Grid: Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif italic font-bold text-[16px] min-[400px]:text-[18px] sm:text-[22px] md:text-[28px] lg:text-[24px] xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#f5c64c] to-[#d4af37] tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] whitespace-nowrap pb-1">
              A Festive Celebration Built on Trust
            </h2>
            <div className="flex items-center gap-1.5 w-full my-2 select-none">
              <div className="h-[1.5px] w-6 sm:w-12 bg-gradient-to-r from-[#e5b32f] to-[#ffe58f]" />
              <div className="w-1.5 h-1.5 rotate-45 border-[1px] border-[#ffe58f] bg-[#e5b32f] shadow-[0_0_8px_rgba(229,179,47,0.8)]" />
              <div className="h-[1.5px] w-6 sm:w-12 bg-gradient-to-l from-[#e5b32f] to-[#ffe58f]" />
            </div>

            <p className="font-sans text-[14.5px] text-[#fcf8f0]/80 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
              Diwali Dhamaka was founded with a singular purpose: to elevate the traditional festival lucky draw into a modern, corporate-grade digital experience. We believe that festive anticipation should be accompanied by absolute transparency, verifiable algorithms, and certified prize disbursements.
            </p>
            <p className="font-sans text-[14.5px] text-[#fcf8f0]/80 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
              Every ticket generated on our platform carries a unique cryptographic identifier. When our live draws commence, selection is governed by certified pseudorandom number generators with non-tamperable audit logs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Stat Box 1: Ruby Theme */}
              <div className={`group relative rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 border backdrop-blur-md ${rubyTheme.borderClass} ${rubyTheme.glowShadow}`}
                style={{ background: rubyTheme.cardBg }}>
                <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-serif italic tracking-wide" style={{ color: rubyTheme.titleColor, textShadow: `0 0 15px ${rubyTheme.flareColor}80` }}>
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-white/75 mt-1 font-semibold tracking-wider uppercase">
                  Certified Transparent
                </div>
              </div>

              {/* Stat Box 2: Amber Theme */}
              <div className={`group relative rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 border backdrop-blur-md ${amberTheme.borderClass} ${amberTheme.glowShadow}`}
                style={{ background: amberTheme.cardBg }}>
                <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-serif italic tracking-wide" style={{ color: amberTheme.titleColor, textShadow: `0 0 15px ${amberTheme.flareColor}80` }}>
                  Exclusive
                </div>
                <div className="text-[11px] sm:text-xs text-white/75 mt-1 font-semibold tracking-wider uppercase">
                  Festive Prize Pool
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#e5b32f]/40 shadow-[0_0_35px_rgba(229,179,47,0.25)] p-1.5 bg-gradient-to-br from-[#ffe58f]/20 via-[#e5b32f]/10 to-transparent group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffe58f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img
                src={archImg}
                alt="Diwali Palace Arch"
                className="w-full max-w-md h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {principles.map((principle, index) => (
            <GlassPrincipleCard key={index} principle={principle} />
          ))}
        </div>
      </div>
    </div>
  );
}
