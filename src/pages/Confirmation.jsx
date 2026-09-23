import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle2, Sparkles, Trophy, Calendar, Download, Eye, ArrowRight, Flame } from 'lucide-react';

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket, participant } = location.state || {};

  useEffect(() => {
    // Fire celebratory confetti burst upon load
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffe58f', '#e5b32f', '#d4af37', '#ffaa00']
      });
    } catch (e) {}
  }, []);

  // Fallback demo data if visited directly
  const displayTicket = ticket || {
    ticketNumber: 'DD-2026-45872',
    drawName: 'Diwali Dhamaka Grand Lucky Draw 2026',
    drawDate: '10 Nov 2026',
    drawTime: '07:00 PM (IST)',
    status: 'ACTIVE'
  };

  const displayParticipant = participant || {
    fullName: 'Kiran Kumar',
    phone: '9876543210'
  };

  return (
    <div className="pt-28 pb-20 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1b1236] via-[#141634] to-[#0c0d20] border-2 border-[#e5b32f]/50 shadow-[0_0_60px_rgba(229,179,47,0.3)] space-y-6 relative overflow-hidden">
        {/* Top Celebration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Participation Confirmed</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text tracking-wide">
            Congratulations!
          </h1>
          <p className="text-sm text-white/80">
            Welcome, <span className="font-bold text-[#ffe58f]">{displayParticipant.fullName}</span>. Your official lucky draw entry is registered and confirmed for the Grand Draw.
          </p>
        </div>

        {/* The Golden Ticket Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2a1740] via-[#1f1636] to-[#2a1740] border-2 border-dashed border-[#e5b32f]/60 relative text-left shadow-inner space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400 animate-flicker" />
              <span className="font-serif text-sm font-bold text-[#ffe58f] uppercase tracking-wider">
                Official Diwali Lucky Ticket
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold text-[#0b0d1e] bg-[#e5b32f]">
              {displayTicket.status}
            </span>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest text-white/50 font-semibold">
              Unique Ticket Identifier
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#ffe58f] tracking-wider my-1">
              {displayTicket.ticketNumber}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
            <div>
              <span className="text-white/50 block">Scheduled Draw:</span>
              <span className="font-bold text-white/90">{displayTicket.drawDate}</span>
            </div>
            <div>
              <span className="text-white/50 block">Draw Timing:</span>
              <span className="font-bold text-white/90">{displayTicket.drawTime}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={`/ticket/${displayTicket.ticketNumber}`}
            className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>VIEW TICKET VOUCHER</span>
          </Link>

          <Link
            to="/live-draw"
            className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-[#ffe58f] border border-[#e5b32f]/40 hover:bg-[#e5b32f]/10 transition-all flex items-center justify-center gap-2"
          >
            <span>GO TO LIVE DRAW ROOM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
