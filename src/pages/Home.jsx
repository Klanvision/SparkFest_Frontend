import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Sparkles, ShieldCheck, Trophy, Gift, ArrowRight, CheckCircle,
  HelpCircle, ChevronRight, Award, Clock, Calendar, Users, Star, Crown
} from 'lucide-react';
import { api } from '../services/api';
import CountdownTimer from '../components/common/CountdownTimer';
import WinnerAnnouncementModal from '../components/common/WinnerAnnouncementModal';
import FestiveParticles from '../components/common/FestiveParticles';

// Assets
import heroBg from '../assets/Herosection.png';
import luckyDrawImg from '../assets/LuckyDraw.png';
import archImg from '../assets/festive_arch.jpg';
import giftImg from '../assets/gift.png';
export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await api.getHomeData();
        if (res.success) {
          setHomeData(res.data);
        }
      } catch (err) {
        console.error('Failed to load home data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const draw = homeData?.draw || {
    scheduledAt: '2026-11-10T13:30:00.000Z',
    displayDate: '10 Nov 2026',
    displayTime: '07:00 PM (IST)',
    totalPrizePool: '₹85,000+'
  };

  const prizes = homeData?.prizes || [];
  const offers = homeData?.offers || [];
  const recentWinners = homeData?.recentWinners || [];
  const faqs = homeData?.faqs || [];

  return (
    <div className="relative min-h-screen">
      {/* --------------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                                       */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050614]">
        {/* Hero Background Image Layer */}
        <div
          className="absolute inset-0 bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050614]/90 via-[#050614]/50 to-transparent w-full lg:w-[70%]"></div>

        {/* Floating Sparks */}
        <FestiveParticles count={30} />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-6 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-start text-left space-y-6 w-full lg:w-1/2">

            {/* Main Title & Subtitle */}
            <div className="space-y-3 relative z-10">
              {/* Soft glow behind the text to make it pop */}
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(229,179,47,0.12)_0%,transparent_60%)] pointer-events-none blur-2xl -z-10"></div>

              <h1 className="font-serif italic text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#facc15] to-[#b45309] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] leading-[1.1] pb-2">
                Diwali
                <br />
                Dhamaka
              </h1>

              <div className="pt-2 pb-4">
                <img
                  src={luckyDrawImg}
                  alt="Lucky Draw"
                  className="w-auto h-20 sm:h-28 md:h-36 object-contain animate-ribbon-float drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
                />
              </div>


            </div>


            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2 w-full">
              <Link
                to="/participate"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:shadow-[0_0_35px_rgba(229,179,47,0.75)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <img src={giftImg} alt="Gift" className="w-8 h-8 sm:w-9 sm:h-9 object-contain animate-gift-tada group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                <span>ENTER LUCKY DRAW</span>
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                to="/prizes"
                className="group relative overflow-hidden w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#fcf8f0] bg-[#141633]/80 border border-amber-400/40 backdrop-blur-md shadow-[inset_0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {/* Impressive Sweeping Glare Animation */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent animate-button-sweep"></div>
                
                <span className="relative z-10 group-hover:text-amber-300 transition-colors duration-300 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">VIEW PRIZES</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span>Safe & Secure Participation</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span>Transparent Certified Random Draw</span>
              </div>
            </div>
          </div>

          {/* Right side placeholder to keep left side constrained */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>

        {/* Countdown Timer positioned at exactly 70% across the screen */}
        <div className="hidden lg:block absolute bottom-12 left-[60%] -translate-x-1/2 z-20 pointer-events-none">
          <div className="pointer-events-auto scale-[0.8] sm:scale-90 origin-bottom">
            <CountdownTimer targetDate={draw.scheduledAt} />
          </div>
        </div>

        {/* Mobile Countdown Timer fallback (centered) */}
        <div className="lg:hidden absolute bottom-12 left-0 right-0 flex justify-center w-full z-20 pointer-events-none">
          <div className="pointer-events-auto scale-[0.8] sm:scale-90 origin-bottom">
            <CountdownTimer targetDate={draw.scheduledAt} />
          </div>
        </div>      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 2. CELEBRATE THE FESTIVAL OF LIGHTS (Arch Showcase + 3 Value Cards)     */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-24 bg-[#fffcf5] border-b border-[#e5b32f]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Ornate Arch Artwork Image */}
            <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[260px] rounded-t-full overflow-hidden border-[4px] border-[#dfb658] shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-white">
                <img
                  src={archImg}
                  alt="Diwali Palace Arch"
                  className="w-full aspect-[4/5] object-cover rounded-t-full"
                />
              </div>
            </div>

            {/* Right: Overview Description + 3 Benefit Pillars */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8">
              <div className="w-full">
                <span className="text-[13px] font-semibold tracking-wide text-[#ff7a36]">
                  About the Lucky Draw
                </span>
                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#27284f] mt-1 mb-4 leading-tight">
                  Celebrate the Festival of Lights
                </h2>
                <p className="text-[#515372] text-[13.5px] sm:text-[15px] leading-relaxed max-w-3xl">
                  This Diwali, we bring you a special lucky draw with amazing prizes, exclusive offers and exciting rewards. Simply participate, follow the steps and get a chance to win big. It's our way of adding more joy, happiness and brightness to your celebrations.
                </p>
              </div>

              {/* 3 Pillar Cards matching reference image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 pt-2">
                {/* Pillar 1 */}
                <div className="px-5 py-7 rounded-[20px] bg-[#fbf5e9] border border-[#f3ead7] flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#77184a] flex items-center justify-center text-white mb-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-[26px] h-[26px]" />
                  </div>
                  <h3 className="font-serif font-bold text-[17px] text-[#862544] mb-3">
                    Easy Participation
                  </h3>
                  <p className="text-[13px] text-[#515372] leading-relaxed max-w-[200px]">
                    Simple steps, quick registration, and instant confirmation.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="px-5 py-7 rounded-[20px] bg-[#fbf5e9] border border-[#f3ead7] flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#77184a] flex items-center justify-center text-white mb-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-[26px] h-[26px]" />
                  </div>
                  <h3 className="font-serif font-bold text-[17px] text-[#862544] mb-3">
                    Transparent Draw
                  </h3>
                  <p className="text-[13px] text-[#515372] leading-relaxed max-w-[200px]">
                    Fair and verified draw process for everyone.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="px-5 py-7 rounded-[20px] bg-[#fbf5e9] border border-[#f3ead7] flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#77184a] flex items-center justify-center text-white mb-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Gift className="w-[26px] h-[26px]" />
                  </div>
                  <h3 className="font-serif font-bold text-[17px] text-[#862544] mb-3">
                    Exciting Rewards
                  </h3>
                  <p className="text-[13px] text-[#515372] leading-relaxed max-w-[200px]">
                    Amazing prizes, special offers and festive bonuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 3. HOW IT WORKS TIMELINE (4 Steps)                                    */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-20 bg-[#0a0c20] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffe58f] mb-2">
            <span>♦ How It Works ♦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">
            Just 4 Simple Steps to Win
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mt-2">
            Get your official Diwali Dhamaka lucky ticket in less than two minutes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* Step 01 */}
            <div className="relative p-6 rounded-2xl bg-[#141634] border border-[#e5b32f]/25 hover:border-[#e5b32f]/60 hover:-translate-y-2 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-full bg-[#2a1d4a] text-[#ffe58f] font-mono text-sm font-bold flex items-center justify-center border border-[#e5b32f]/40">
                  01
                </span>
                <Users className="w-5 h-5 text-[#e5b32f] group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#ffe58f] mb-2">Register</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Fill in your basic details and join the lucky draw with instant verification.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative p-6 rounded-2xl bg-[#141634] border border-[#e5b32f]/25 hover:border-[#e5b32f]/60 hover:-translate-y-2 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-full bg-[#2a1d4a] text-[#ffe58f] font-mono text-sm font-bold flex items-center justify-center border border-[#e5b32f]/40">
                  02
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#ffe58f] mb-2">Confirm Entry</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Verify your participation via OTP and receive immediate digital confirmation.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative p-6 rounded-2xl bg-[#141634] border border-[#e5b32f]/25 hover:border-[#e5b32f]/60 hover:-translate-y-2 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-full bg-[#2a1d4a] text-[#ffe58f] font-mono text-sm font-bold flex items-center justify-center border border-[#e5b32f]/40">
                  03
                </span>
                <Award className="w-5 h-5 text-[#e5b32f] group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#ffe58f] mb-2">Receive Lucky Ticket</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Get your unique cryptographically stamped ticket number (e.g. DD-2026-45872).
              </p>
            </div>

            {/* Step 04 */}
            <div className="relative p-6 rounded-2xl bg-[#141634] border border-[#e5b32f]/25 hover:border-[#e5b32f]/60 hover:-translate-y-2 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-full bg-[#2a1d4a] text-[#ffe58f] font-mono text-sm font-bold flex items-center justify-center border border-[#e5b32f]/40">
                  04
                </span>
                <Trophy className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#ffe58f] mb-2">Winners Announced</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Watch the live draw on 10 November 2026 and see if you're the lucky grand winner!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 4. SPECIAL OFFERS                                                     */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-b from-[#0d0f26] via-[#121435] to-[#0d0f26] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffe58f] mb-2">
            <span>♦ Special Offers ♦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">
            More Participation. More Chances. More Rewards.
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mt-2">
            Take advantage of our festive discounts and bonus entry multiplier tiers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="relative rounded-3xl p-7 text-left flex flex-col justify-between overflow-hidden border border-[#e5b32f]/30 hover:border-[#e5b32f] hover:shadow-gold-glow transition-all duration-300 bg-gradient-to-br from-[#1b143a] via-[#26133a] to-[#16102e] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#e5b32f]/20 border border-[#e5b32f]/40 flex items-center justify-center text-[#ffe58f]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-[#ffe58f] bg-[#e5b32f]/20 border border-[#e5b32f]/30">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#ffe58f] mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-3 font-medium">
                    {offer.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    to={offer.ctaLink || '/participate'}
                    className="inline-flex items-center justify-center w-full py-3 rounded-full font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>{offer.ctaText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 5. GRAND PRIZES / LIVE PRIZES                                         */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-20 bg-[#090b1c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffe58f] mb-2">
            <span>♦ Our Live Prizes ♦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">
            Big Dreams. Bigger Rewards.
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mt-2">
            All cash rewards are transferred directly to verified bank accounts with certified audit compliance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {prizes.map((prize, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={prize.id}
                  className={`relative p-6 rounded-3xl text-center flex flex-col items-center justify-between transition-all duration-300 group ${isFirst
                    ? 'bg-gradient-to-b from-[#2e1d12] via-[#211728] to-[#12142d] border-2 border-[#e5b32f] shadow-gold-glow lg:-translate-y-2'
                    : 'bg-[#151736] border border-[#e5b32f]/25 hover:border-[#e5b32f]/60'
                    }`}
                >
                  {isFirst && (
                    <span className="absolute -top-3 px-4 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] text-[#0b0d1e] shadow-md">
                      Mega Jackpot
                    </span>
                  )}

                  <div className="pt-2">
                    <div className="w-16 h-16 rounded-full bg-[#e5b32f]/15 border border-[#e5b32f]/30 flex items-center justify-center mx-auto mb-3">
                      <Trophy className={`w-8 h-8 ${isFirst ? 'text-[#f3c64c] animate-bounce' : 'text-[#ffe58f]'}`} />
                    </div>

                    <h3 className="text-sm uppercase tracking-wider font-semibold text-white/70">
                      {prize.title}
                    </h3>
                    <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#ffe58f] mt-1 mb-2">
                      {prize.amount}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed px-2">
                      {prize.description}
                    </p>
                  </div>

                  <div className="w-full pt-6">
                    <Link
                      to="/participate"
                      className="block w-full py-2.5 rounded-full text-xs font-bold text-center bg-white/10 hover:bg-[#e5b32f] hover:text-[#0b0d1e] transition-colors border border-[#e5b32f]/30"
                    >
                      Enter For This Prize
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 6. GRAND DRAW DETAILS (Live Banner)                                   */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-8 bg-gradient-to-r from-[#170e2b] via-[#2a133b] to-[#1b102e] border-y border-[#e5b32f]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Title & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-300 bg-rose-950/80 border border-rose-500/40 flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                LIVE DRAW
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#ffe58f]">
                  Grand Draw Details
                </h3>
                <div className="flex items-center gap-4 text-xs text-white/70 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#e5b32f]" />
                    Date: {draw.displayDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#e5b32f]" />
                    Time: {draw.displayTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown timer (Banner variant) */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:block text-right">
                <span className="text-[10px] uppercase tracking-widest text-white/60 block">
                  Countdown to Draw
                </span>
                <CountdownTimer targetDate={draw.scheduledAt} variant="banner" />
              </div>

              {/* Watch Draw Live Button */}
              <Link
                to="/live-draw"
                className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.6)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <Flame className="w-4 h-4 text-amber-300 animate-flicker" />
                <span>WATCH DRAW LIVE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 7. OUR LUCKY WINNERS (Masked Privacy Cards Carousel)                  */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-20 bg-[#080a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffe58f]">
                Real People. Real Smiles. Real Rewards.
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text mt-1">
                Our Lucky Winners
              </h2>
            </div>
            <Link
              to="/winners"
              className="px-5 py-2 rounded-full text-xs font-semibold text-[#ffe58f] border border-[#e5b32f]/40 hover:bg-[#e5b32f]/10 transition-colors"
            >
              View All Winners
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {recentWinners.map((winner) => (
              <div
                key={winner.id}
                onClick={() => setSelectedWinner(winner)}
                className="p-5 rounded-2xl bg-[#131530] border border-[#e5b32f]/20 hover:border-[#e5b32f]/60 hover:shadow-gold-glow cursor-pointer transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#23173d] border border-[#e5b32f]/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-[#f3c64c]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[#ffe58f] truncate font-serif">
                    {winner.maskedName}
                  </div>
                  <div className="text-xs text-white/50 font-mono">
                    Ticket: {winner.shortTicket}
                  </div>
                  <div className="text-xs font-bold text-emerald-400 mt-1">
                    Won {winner.prizeAmount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 8. FAQ PREVIEW                                                        */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-20 bg-[#0c0f24] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffe58f]">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Find answers to the most common questions about participation, tickets, and draws.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#141634] border border-[#e5b32f]/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#ffe58f]">
                      {faq.question}
                    </span>
                    <span className={`text-xl font-bold text-[#e5b32f] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffe58f] hover:underline"
            >
              <span>View All Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 9. FINAL CALL TO ACTION (Grand Festive Golden Section)                */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative py-20 bg-gradient-to-b from-[#180f2d] via-[#240e34] to-[#140b24] text-center overflow-hidden border-t border-[#e5b32f]/40">
        <FestiveParticles count={20} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffe58f]/10 border border-[#e5b32f]/30 text-xs text-[#ffe58f] font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Limited Festive Entry Window
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
            Your Diwali. Your Chance. Your Lucky Moment.
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mt-3 mb-8">
            Don't miss this golden opportunity. Join now, get your official lucky ticket, and make this Diwali memorable!
          </p>

          <Link
            to="/participate"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm sm:text-base text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:shadow-[0_0_40px_rgba(229,179,47,0.85)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-[#0b0d1e]" />
            <span>ENTER NOW</span>
            <ChevronRight className="w-5 h-5 text-[#0b0d1e]" />
          </Link>
        </div>
      </section>

      {/* Winner Spotlight Modal */}
      <WinnerAnnouncementModal
        winner={selectedWinner}
        isOpen={!!selectedWinner}
        onClose={() => setSelectedWinner(null)}
      />
    </div>
  );
}
