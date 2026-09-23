import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffe58f] via-[#e5b32f] to-[#aa8010] p-0.5 shadow-gold-glow flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#12142d] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#f3c64c]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider gold-gradient-text uppercase">
                  Diwali Dhamaka
                </span>
                <span className="text-[10px] tracking-widest text-[#ffe58f]/70 uppercase font-semibold">
                  Celebrate. Participate. Win Big.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#fcf8f0]/70 leading-relaxed max-w-sm">
              India's premier certified Diwali festive rewards and lucky draw initiative. Combining transparency, security, and the joyous spirit of celebration with guaranteed certified prize disbursements.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#ffe58f]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a38] border border-[#e5b32f]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e5b32f]" />
                <span>100% Certified Draws</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a38] border border-[#e5b32f]/20">
                <Award className="w-3.5 h-3.5 text-[#e5b32f]" />
                <span>Audit Verified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fcf8f0]/70">
              <li><Link to="/" className="hover:text-[#ffe58f] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#ffe58f] transition-colors">About Diwali Dhamaka</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#ffe58f] transition-colors">How It Works</Link></li>
              <li><Link to="/prizes" className="hover:text-[#ffe58f] transition-colors">Grand Prizes</Link></li>
              <li><Link to="/offers" className="hover:text-[#ffe58f] transition-colors">Special Offers</Link></li>
              <li><Link to="/winners" className="hover:text-[#ffe58f] transition-colors">Verified Winners</Link></li>
              <li><Link to="/live-draw" className="hover:text-[#ffe58f] transition-colors text-rose-300">Watch Live Draw</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance */}
          <div className="xl:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4">
              Legal & Safety
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fcf8f0]/70">
              <li><Link to="/privacy-policy" className="hover:text-[#ffe58f] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#ffe58f] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/responsible-participation" className="hover:text-[#ffe58f] transition-colors">Responsible Play</Link></li>
              <li><Link to="/faq" className="hover:text-[#ffe58f] transition-colors">Lucky Draw Rules</Link></li>
              <li><Link to="/admin" className="hover:text-[#ffe58f] transition-colors text-xs text-slate-400">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="xl:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#ffe58f] uppercase mb-4">
              Direct Support
            </h4>
            <ul className="space-y-3 text-sm text-[#fcf8f0]/70">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#e5b32f] mt-0.5 shrink-0" />
                <a href="mailto:support@diwalidhamaka.com" className="hover:text-white transition-colors">
                  support@diwalidhamaka.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#e5b32f] mt-0.5 shrink-0" />
                <a href="tel:+918005552026" className="hover:text-white transition-colors">
                  1800-555-2026 (Toll Free)
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-white/50">
                <Clock className="w-4 h-4 text-[#e5b32f] mt-0.5 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM (IST)</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us & Newsletter */}
          <div className="lg:col-span-3 xl:col-span-3 xl:border-l border-[#e5b32f]/10 xl:pl-8 flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-5">
              <Users className="w-5 h-5 text-[#e5b32f]" />
              <h4 className="font-serif text-base font-bold tracking-wider text-[#ffe58f]">
                Follow Us
              </h4>
            </div>
            
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
