import React from 'react';
import { Link } from 'react-router-dom';
import { Users, PhoneCall, Gift, Award, Eye, Trophy, CreditCard, ShieldCheck, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Register Profile',
    desc: 'Enter your basic details including Full Name, valid Email address, and active Mobile Number.',
    icon: Users
  },
  {
    num: '02',
    title: 'Mobile OTP Verification',
    desc: 'Verify your phone via a secure one-time passcode to ensure verified genuine participation.',
    icon: PhoneCall
  },
  {
    num: '03',
    title: 'Choose Participation Offer',
    desc: 'Pick from our special festive tiers (₹10 Entry, Festival Special, or Early Bird Multiplier).',
    icon: Gift
  },
  {
    num: '04',
    title: 'Generate Lucky Ticket',
    desc: 'The platform instantly issues your official unique ticket number formatted as DD-2026-XXXXX.',
    icon: Award
  },
  {
    num: '05',
    title: 'Store & Track Ticket',
    desc: 'Download your digital participation voucher or search your ticket anytime on our live portal.',
    icon: Eye
  },
  {
    num: '06',
    title: 'Attend The Live Draw',
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
    title: 'Direct Bank Disbursement',
    desc: 'Verified winners receive direct NEFT/RTGS bank transfers or festive gift hampers within 72 hours.',
    icon: CreditCard
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <span>Complete Participation Roadmap</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          How It Works
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          From fast registration to celebratory prize claim, here is the complete transparent lifecycle.
        </p>
      </div>

      {/* 8-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative p-6 rounded-3xl bg-[#131533] border border-[#e5b32f]/25 hover:border-[#e5b32f]/70 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-extrabold text-[#ffe58f] px-2.5 py-1 rounded-full bg-[#291a4c] border border-[#e5b32f]/30">
                    STEP {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#201540] flex items-center justify-center text-[#e5b32f] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#ffe58f] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-[#ffe58f]/70 font-semibold flex items-center gap-1">
                <span>Verified Step</span>
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#201138] via-[#2c1340] to-[#1a0e2f] border border-[#e5b32f]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="text-left">
          <h3 className="font-serif text-2xl font-bold text-[#ffe58f]">
            Ready to Claim Your Lucky Ticket?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Participation is fast, verified, and begins with as little as ₹10 entry.
          </p>
        </div>
        <Link
          to="/participate"
          className="px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow shrink-0 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>ENTER LUCKY DRAW NOW</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
