import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Sparkles, X, Award, CheckCircle, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WinnerAnnouncementModal({
  winner,
  isOpen,
  onClose
}) {
  const [stage, setStage] = useState('revealing'); // revealing -> revealed

  useEffect(() => {
    if (isOpen) {
      setStage('revealing');
      // Dramatic reveal after 1.2s
      const timer = setTimeout(() => {
        setStage('revealed');
        triggerConfetti();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ffe58f', '#e5b32f', '#d4af37', '#ff4d4f', '#ffaa00']
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);
    } catch (e) {
      // safe fallback
    }
  };

  if (!isOpen || !winner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,179,47,0.25)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1c1236] via-[#10122a] to-[#0a0b18] border-2 border-[#e5b32f]/60 shadow-[0_0_80px_rgba(229,179,47,0.4)] p-8 text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Festive Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a1b4e] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase mb-6 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#f3c64c] animate-spin" />
          <span>Official Winner Announcement</span>
          <Sparkles className="w-3.5 h-3.5 text-[#f3c64c] animate-spin" />
        </div>

        {stage === 'revealing' ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-full border-4 border-dashed border-[#e5b32f] animate-spin flex items-center justify-center">
              <Trophy className="w-10 h-10 text-[#ffe58f] animate-pulse" />
            </div>
            <p className="font-serif text-xl text-[#ffe58f] font-semibold animate-pulse">
              Selecting Lucky Winner...
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-scaleUp">
            {/* Trophy Icon */}
            <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#ffe58f] via-[#e5b32f] to-[#aa8010] p-1 shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#181135] flex items-center justify-center">
                <Trophy className="w-12 h-12 text-[#f3c64c] animate-bounce" />
              </div>
              <Flame className="absolute -top-3 w-8 h-8 text-amber-400 animate-flicker" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-1">
                Congratulations
              </p>
              <h3 className="font-serif text-3xl font-extrabold gold-gradient-text tracking-wide">
                {winner.winnerName || winner.maskedName}
              </h3>
              <p className="text-sm text-emerald-400 font-semibold flex items-center justify-center gap-1 mt-1">
                <CheckCircle className="w-4 h-4" />
                Verified Winning Ticket: {winner.ticketNumber}
              </p>
            </div>

            {/* Prize Card */}
            <div className="p-4 rounded-2xl bg-[#201542] border border-[#e5b32f]/40 shadow-inner">
              <p className="text-xs text-[#ffe58f]/80 uppercase font-semibold">
                Prize Awarded
              </p>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ffe58f] font-serif my-1">
                {winner.prizeAmount}
              </div>
              <p className="text-xs text-white/70">
                {winner.prizeTitle} • Draw Date: {winner.drawDate}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={triggerConfetti}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] hover:shadow-gold-glow transition-all"
              >
                🎉 Celebrate Again!
              </button>
              <Link
                to="/winners"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full font-semibold text-xs text-white/90 border border-white/20 hover:bg-white/10 transition-all text-center"
              >
                View All Winners
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
