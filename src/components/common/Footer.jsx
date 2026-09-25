import React from 'react';
import { Link } from 'react-router-dom';
import deepamImg from '../../assets/Deepam.png';
import { Flame, ShieldCheck, Mail, Phone, Clock, Heart, Award, Users, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0c1a] via-[#0f0e26] to-[#12091f] border-t border-[#e5b32f]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle festive background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#28114b]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#541026]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-10 xl:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Overview (Spans 3 on large screens) */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4 xl:pr-6">
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group focus:outline-none mb-3" aria-label="Diwali Dhamaka Home">
              <img 
                src={deepamImg} 
                alt="SparkFest Logo" 
                className="h-14 sm:h-16 md:h-20 object-contain animate-logo-3d-float hover:scale-105 transition-all duration-300 origin-left"
              />
              <div className="flex flex-col items-start justify-center space-y-1.5 group-hover:scale-105 transition-transform duration-300 origin-left">
                <span className="font-serif font-extrabold text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffed4a] via-[#f59e0b] to-[#ffed4a] leading-none animate-text-flicker" style={{ WebkitTextStroke: '1.5px rgba(180,83,9,0.6)' }}>
                  Diwali
                </span>
                <span className="font-serif italic font-bold text-sm sm:text-base tracking-[0.2em] text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase leading-none">
                  Dhamaka
                </span>
              </div>
            </Link>

            <p className="text-[13px] sm:text-sm text-[#fcf8f0]/80 leading-relaxed max-w-sm italic font-medium">
              India's premium Diwali rewards program. Light up your festivities and win guaranteed certified prizes!
            </p>

            <div className="pt-4 flex items-center gap-2.5 group cursor-default">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#e5b32f]/20 to-transparent flex items-center justify-center border border-[#e5b32f]/30 group-hover:border-[#e5b32f] transition-colors duration-300 shadow-[0_0_10px_rgba(229,179,47,0.1)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5c64c]" />
              </div>
              <span className="text-[11.5px] sm:text-[13px] font-serif text-[#ffe58f] tracking-wide">100% Secure & Audit Verified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 xl:border-l border-[#e5b32f]/15 xl:pl-8">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#e5b32f] to-transparent"></div>
            </h4>
            <ul className="space-y-3 text-sm text-[#fcf8f0]/70">
              {[['Home', '/'], ['About Diwali Dhamaka', '/about'], ['How It Works', '/how-it-works'], ['Grand Prizes', '/prizes'], ['Special Offers', '/offers'], ['Verified Winners', '/winners'], ['Watch Live Draw', '/live-draw']].map(([title, path]) => (
                <li key={path} className="group">
                  <Link to={path} className={`inline-flex items-center gap-2 transition-all duration-300 transform group-hover:translate-x-1.5 ${path === '/live-draw' ? 'text-rose-300 hover:text-rose-400' : 'hover:text-[#ffe58f]'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e5b32f] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_5px_rgba(229,179,47,0.8)]"></span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Governance */}
          <div className="xl:col-span-2 xl:border-l border-[#e5b32f]/15 xl:pl-8">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4 relative inline-block">
              Legal & Safety
              <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#e5b32f] to-transparent"></div>
            </h4>
            <ul className="space-y-3 text-sm text-[#fcf8f0]/70">
              {[['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms'], ['Responsible Play', '/responsible-participation'], ['Lucky Draw Rules', '/faq'], ['Refund & Return Policy', '/refund-policy'], ['Shopping Policy', '/shopping-policy'], ['Admin Portal', '/admin']].map(([title, path]) => (
                <li key={path} className="group">
                  <Link to={path} className={`inline-flex items-center gap-2 transition-all duration-300 transform group-hover:translate-x-1.5 ${title === 'Admin Portal' ? 'text-xs text-slate-400 hover:text-white' : 'hover:text-[#ffe58f]'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e5b32f] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_5px_rgba(229,179,47,0.8)]"></span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="xl:col-span-2 xl:border-l border-[#e5b32f]/15 xl:pl-8">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4 relative inline-block">
              Direct Support
              <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#e5b32f] to-transparent"></div>
            </h4>
            <ul className="space-y-4 text-sm text-[#fcf8f0]/70 mt-2">
              <li className="group">
                <a href="mailto:support@diwalidhamaka.com" className="flex items-start gap-3 transition-all duration-300 transform group-hover:translate-x-1.5 hover:text-[#ffe58f]">
                  <div className="w-6 h-6 rounded bg-[#181a38] border border-[#e5b32f]/30 flex items-center justify-center shrink-0 group-hover:border-[#e5b32f] group-hover:shadow-[0_0_8px_rgba(229,179,47,0.3)] transition-all">
                    <Mail className="w-3 h-3 text-[#e5b32f]" />
                  </div>
                  <span className="mt-0.5 break-all">support@diwalidhamaka.com</span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+918005552026" className="flex items-start gap-3 transition-all duration-300 transform group-hover:translate-x-1.5 hover:text-[#ffe58f]">
                  <div className="w-6 h-6 rounded bg-[#181a38] border border-[#e5b32f]/30 flex items-center justify-center shrink-0 group-hover:border-[#e5b32f] group-hover:shadow-[0_0_8px_rgba(229,179,47,0.3)] transition-all">
                    <Phone className="w-3 h-3 text-[#e5b32f]" />
                  </div>
                  <span className="mt-0.5">1800-555-2026 (Toll Free)</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs text-white/50 group cursor-default transition-all duration-300 transform hover:translate-x-1.5 hover:text-white/80">
                <div className="w-6 h-6 rounded bg-[#181a38]/50 border border-[#e5b32f]/10 flex items-center justify-center shrink-0 group-hover:border-[#e5b32f]/40 transition-all">
                  <Clock className="w-3 h-3 text-[#e5b32f]/70" />
                </div>
                <span className="mt-1 leading-tight">Mon - Sat:<br/>9:00 AM - 8:00 PM (IST)</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us & Newsletter */}
          <div className="lg:col-span-3 xl:col-span-3 xl:border-l border-[#e5b32f]/15 xl:pl-8 flex flex-col justify-start">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4 relative inline-flex items-center gap-2 w-max">
              <Users className="w-4 h-4 text-[#e5b32f]" />
              Follow Us
              <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#e5b32f] to-transparent"></div>
            </h4>
            
            <div className="flex items-center gap-3">
              {['f', 'ig', 'X', 'YT', 'in'].map((social, idx) => (
                <a 
                  key={idx} 
                  href={`#${social}`} 
                  className="group relative overflow-hidden w-10 h-10 rounded-full border border-[#e5b32f]/70 flex items-center justify-center text-[#e5b32f] hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_20px_rgba(229,179,47,0.6)]"
                >
                  {/* Gold fill on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffe58f] via-[#e5b32f] to-[#aa8010] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sweeping glare */}
                  <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-button-sweep"></div>
                  
                  {/* Icon Text */}
                  <span className="relative z-10 font-bold text-sm group-hover:text-[#0b0d1e] transition-colors duration-300">
                    {social}
                  </span>
                </a>
              ))}
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#e5b32f]/40 to-transparent my-8"></div>

            <div className="flex items-center gap-2.5 mb-2">
              <Mail className="w-5 h-5 text-[#e5b32f]" />
              <h4 className="font-bold text-[15px] text-white">
                Subscribe to Our Newsletter
              </h4>
            </div>
            
            <p className="text-[13px] text-white/50 mb-5">
              Get the latest updates, offers and news.
            </p>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#12142d] border border-[#e5b32f]/20 rounded-full py-3.5 pl-5 pr-[110px] text-[13px] text-white focus:outline-none focus:border-[#e5b32f]/60 focus:bg-[#181a38] transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] text-[#0b0d1e] font-bold text-[13px] px-4 rounded-full flex items-center gap-2 hover:shadow-[0_0_15px_rgba(229,179,47,0.5)] transition-shadow">
                <Send className="w-3.5 h-3.5 -ml-1" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Diwali Dhamaka. All rights reserved. Built for festive corporate celebrations.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300/80">
              <ShieldCheck className="w-4 h-4" />
              Secure & Responsible Participation
            </span>
            <span className="px-2 py-0.5 rounded border border-white/20 text-[11px] font-semibold text-white/60">
              18+ Only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
