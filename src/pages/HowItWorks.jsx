import React from 'react';
import { Link } from 'react-router-dom';
import { Users, PhoneCall, Gift, Award, Eye, Trophy, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import howItWorksBg from '../../Images/how-it-works-background.png';

const themes = [
  {
    cardBg: 'linear-gradient(135deg, rgba(38, 22, 6, 0.82) 0%, rgba(18, 10, 2, 0.92) 100%)',
    borderClass: 'border-[#d4af37]/55 hover:border-[#f5cb5c]/90',
    glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(245,203,92,0.38)]',
    flareColor: '#f5a623',
    flareCenterColor: '#ffe58f',
    dividerColor: '#e5b32f',
    titleColor: '#ffe58f'
  },
  {
    cardBg: 'linear-gradient(135deg, rgba(4, 22, 54, 0.82) 0%, rgba(2, 10, 32, 0.92) 100%)',
    borderClass: 'border-[#0099ff]/55 hover:border-[#38bdf8]/90',
    glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(0,153,255,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(56,189,248,0.42)]',
    flareColor: '#00a8ff',
    flareCenterColor: '#e0f2fe',
    dividerColor: '#38bdf8',
    titleColor: '#bae6fd'
  },
  {
    cardBg: 'linear-gradient(135deg, rgba(38, 16, 5, 0.82) 0%, rgba(18, 7, 2, 0.92) 100%)',
    borderClass: 'border-[#e66a00]/55 hover:border-[#fb923c]/90',
    glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(230,106,0,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(251,146,60,0.42)]',
    flareColor: '#ff7a00',
    flareCenterColor: '#fed7aa',
    dividerColor: '#fb923c',
    titleColor: '#fed7aa'
  },
  {
    cardBg: 'linear-gradient(135deg, rgba(32, 6, 56, 0.82) 0%, rgba(14, 2, 28, 0.92) 100%)',
    borderClass: 'border-[#9333ea]/55 hover:border-[#c084fc]/90',
    glowShadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.55),0_0_15px_rgba(147,51,234,0.22)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(192,132,252,0.42)]',
    flareColor: '#c026d3',
    flareCenterColor: '#f5d0fe',
    dividerColor: '#c084fc',
    titleColor: '#f5d0fe'
  }
];

const steps = [
  {
    num: '01',
    title: 'Register Profile',
    desc: 'Enter your basic details including Full Name, valid Email address, and active Mobile Number.',
    icon: Users
  },
  {
    num: '02',
    title: 'Mobile Verification',
    desc: 'Verify your phone via a secure one-time passcode to ensure verified genuine participation.',
    icon: PhoneCall
  },
  {
    num: '03',
    title: 'Choose Offer',
    desc: 'Pick from our special festive tiers (ticket Entry, Festival Special, or Early Bird Multiplier).',
    icon: Gift
  },
  {
    num: '04',
    title: 'Generate Ticket',
    desc: 'The platform instantly issues your official unique ticket number formatted as DD-2026-XXXXX.',
    icon: Award
  },
  {
    num: '05',
    title: 'Store & Track',
    desc: 'Download your digital participation voucher or search your ticket anytime on our live portal.',
    icon: Eye
  },
  {
    num: '06',
    title: 'Live Draw Event',
    desc: 'Watch the grand livestream on 10 November 2026 at 07:00 PM IST with animated draw reveals.',
    icon: Trophy
  },
  {
    num: '07',
    title: 'Winner Announcement',
    desc: 'Selected ticket numbers appear live with certified audit hashes and celebratory fireworks.',
    icon: ShieldCheck
  },
  {
    num: '08',
    title: 'Prize Distribution',
    desc: 'Festival prizes and exclusive gifts are seamlessly delivered to verified winners directly to their preferred addresses.',
    icon: Gift
  }
];

const StepGlassCard = ({ step, index }) => {
  const theme = themes[index % themes.length];
  const Icon = step.icon;

  return (
    <div
      className={`group relative rounded-2xl p-4 md:p-5 flex flex-col items-center justify-start text-center transition-all duration-300 ease-out hover:-translate-y-2 cursor-default overflow-hidden border backdrop-blur-md min-h-[260px] ${theme.borderClass} ${theme.glowShadow}`}
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

      <div className="absolute top-3 right-3 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded opacity-80 backdrop-blur-sm"
        style={{ color: theme.titleColor, border: `1px solid ${theme.dividerColor}40`, backgroundColor: `${theme.flareColor}20` }}>
        STEP {step.num}
      </div>

      <div className="relative z-10 w-14 h-14 mt-2 mb-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300 ease-out"
        style={{ border: `1.5px solid ${theme.dividerColor}60`, backgroundColor: `${theme.flareColor}10`, boxShadow: `0 0 15px ${theme.flareColor}40` }}>
        <Icon className="w-6 h-6" style={{ color: theme.titleColor, filter: `drop-shadow(0 0 8px ${theme.flareColor})` }} />
      </div>

      <h3 className="font-serif italic font-bold text-[17px] sm:text-[18px] leading-tight tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] z-10"
        style={{ color: theme.titleColor }}>
        {step.title}
      </h3>

      <div className="flex items-center justify-center gap-1.5 w-full my-3 z-10 select-none">
        <div className="h-[1.5px] w-6 sm:w-8" style={{ background: `linear-gradient(to right, transparent, ${theme.dividerColor})` }} />
        <div className="w-1.5 h-1.5 rotate-45 border-[1px]" style={{ borderColor: theme.dividerColor, backgroundColor: theme.dividerColor, boxShadow: `0 0 8px ${theme.dividerColor}` }} />
        <div className="h-[1.5px] w-6 sm:w-8" style={{ background: `linear-gradient(to left, transparent, ${theme.dividerColor})` }} />
      </div>

      <p className="font-sans text-[12px] text-white/80 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] z-10 px-1">
        {step.desc}
      </p>
    </div>
  );
};

export default function HowItWorks() {
  const ctaTheme = themes[0]; // Gold theme for CTA

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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(229,179,47,0.3)]">
            <span>Complete Participation Roadmap</span>
          </div>
          <h1 className="font-serif italic font-extrabold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#ffe58f] via-[#f5c64c] to-[#d4af37] tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]" style={{ WebkitTextStroke: '1px rgba(229,179,47,0.2)' }}>
            How It Works
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#fcf8f0]/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-2xl mx-auto leading-relaxed mt-4">
            From fast registration to celebratory prize claim, here is the complete transparent lifecycle.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <StepGlassCard key={step.num} step={step} index={index} />
          ))}
        </div>

        {/* CTA Box - Styled matching the Live Cards */}
        <div
          className={`group relative mt-16 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-left transition-all duration-300 ease-out overflow-hidden border backdrop-blur-md ${ctaTheme.borderClass} ${ctaTheme.glowShadow}`}
          style={{
            background: ctaTheme.cardBg,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
        >
          <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

          <div
            className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-3.5 rounded-full blur-[8px] pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-x-120 transition-all duration-300"
            style={{ backgroundColor: ctaTheme.flareColor }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-40 h-[2px] rounded-full pointer-events-none opacity-95 transition-all duration-300"
            style={{
              backgroundColor: ctaTheme.flareCenterColor,
              boxShadow: `0 0 14px 3px ${ctaTheme.flareColor}`
            }}
          />

          <div className="relative z-10 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="font-serif italic font-bold text-2xl sm:text-3xl leading-tight tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" style={{ color: ctaTheme.titleColor }}>
              Ready to Claim Your Lucky Ticket?
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-1.5 w-full my-2 select-none">
              <div className="h-[1.5px] w-6 sm:w-8" style={{ background: `linear-gradient(to right, transparent, ${ctaTheme.dividerColor})` }} />
              <div className="w-1.5 h-1.5 rotate-45 border-[1px]" style={{ borderColor: ctaTheme.dividerColor, backgroundColor: ctaTheme.dividerColor, boxShadow: `0 0 8px ${ctaTheme.dividerColor}` }} />
              <div className="h-[1.5px] w-24 sm:w-32" style={{ background: `linear-gradient(to right, ${ctaTheme.dividerColor}, transparent)` }} />
            </div>

            <p className="font-sans text-[13px] sm:text-[14px] text-white/80 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
              Participation is fast, verified, and begins with as little as ticket entry.
            </p>
          </div>

          <Link
            to="/participate"
            className="relative z-10 px-8 py-3.5 rounded-full font-bold text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-[0_0_20px_rgba(229,179,47,0.5)] shrink-0 hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center gap-2 group/btn"
          >
            <span>ENTER LUCKY DRAW NOW</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
