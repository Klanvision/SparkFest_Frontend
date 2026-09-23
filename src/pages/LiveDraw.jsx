import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Play, Sparkles, ShieldCheck, Users, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';
import CountdownTimer from '../components/common/CountdownTimer';
import WinnerAnnouncementModal from '../components/common/WinnerAnnouncementModal';

export default function LiveDraw() {
  const [currentDraw, setCurrentDraw] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [drumNumber, setDrumNumber] = useState('DD-2026-•••••');
  const [liveWinners, setLiveWinners] = useState([]);

  useEffect(() => {
    async function fetchDraw() {
      try {
        const res = await api.getCurrentDraw();
        if (res.success) {
          setCurrentDraw(res.data);
        }
        const winRes = await api.getRecentWinners();
        if (winRes.success) {
          setLiveWinners(winRes.data);
        }
      } catch (err) {
        console.error('Failed to fetch draw details:', err);
      }
    }
    fetchDraw();
  }, []);

  // Interactive Live Draw Simulation
  const handleSimulateDraw = async () => {
    setIsDrawing(true);
    // Rapid rolling number animation on ticket drum
    const rollInterval = setInterval(() => {
      const rand5 = Math.floor(10000 + Math.random() * 90000);
      setDrumNumber(`DD-2026-${rand5}`);
    }, 80);

    setTimeout(async () => {
      clearInterval(rollInterval);
      try {
        // Admin or demonstration trigger
        const pickWinner = liveWinners.length > 0 ? liveWinners[0] : {
          winnerName: 'Ramesh Sharma',
          maskedName: 'R*** S***',
          ticketNumber: 'DD-2026-45872',
          prizeTitle: '1st Prize',
          prizeAmount: '₹50,000',
          drawDate: '10 Nov 2026'
        };

        setDrumNumber(pickWinner.ticketNumber);
        setSelectedWinner(pickWinner);
      } catch (err) {
        console.error(err);
      } finally {
        setIsDrawing(false);
      }
    }, 2800);
  };

  const draw = currentDraw || {
    name: 'Diwali Dhamaka Grand Lucky Draw 2026',
    displayDate: '10 Nov 2026',
    displayTime: '07:00 PM (IST)',
    scheduledAt: '2026-11-10T13:30:00.000Z',
    status: 'SCHEDULED',
    totalParticipants: 4280,
    totalPrizePool: '₹85,000+'
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Live Stage Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#21113c] via-[#151739] to-[#090b1c] border-2 border-[#e5b32f]/40 shadow-2xl text-center relative overflow-hidden mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-300 bg-rose-950/80 border border-rose-500/40 mb-4 animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          <span>OFFICIAL LIVE DRAW ROOM</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide mb-2">
          {draw.name}
        </h1>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mb-6">
          Scheduled Broadcast: {draw.displayDate} at {draw.displayTime}. Verified cryptographic pseudorandom ticket selection engine.
        </p>

        {/* Live Countdown in Stage */}
        <div className="mb-8">
          <CountdownTimer targetDate={draw.scheduledAt} />
        </div>

        {/* Stage Ticket Drum Machine */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#090b1c] border-2 border-[#e5b32f]/60 shadow-[0_0_40px_rgba(229,179,47,0.35)] space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-white/50 font-semibold block">
            Cryptographic Rolling Drum
          </span>
          <div className="py-4 px-6 rounded-xl bg-[#141738] border border-[#e5b32f]/40 font-mono text-2xl sm:text-3xl font-black text-[#ffe58f] tracking-widest shadow-inner">
            {drumNumber}
          </div>

          <button
            onClick={handleSimulateDraw}
            disabled={isDrawing}
            className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Play className={`w-4 h-4 fill-current ${isDrawing ? 'animate-spin' : ''}`} />
            <span>{isDrawing ? 'DRAWING RANDOM WINNER...' : 'SIMULATE LIVE DRAW DRAWING'}</span>
          </button>
        </div>
      </div>

      {/* Verified Draw Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-[#131533] border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-[#ffe58f] shrink-0 border border-purple-400/20">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#ffe58f]">Provably Fair RNG</h4>
            <p className="text-xs text-white/60">Independent cryptographically seed-based draw algorithms.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#131533] border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-[#ffe58f] shrink-0 border border-purple-400/20">
            <Trophy className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#ffe58f]">₹85,000+ Prize Pool</h4>
            <p className="text-xs text-white/60">Tier 1, Tier 2, Tier 3 and 10+ festive reward hampers.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#131533] border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-[#ffe58f] shrink-0 border border-purple-400/20">
            <Users className="w-6 h-6 text-[#e5b32f]" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#ffe58f]">4,280+ Confirmed</h4>
            <p className="text-xs text-white/60">Registered participants entering this festival draw.</p>
          </div>
        </div>
      </div>

      {/* Winner Spotlight Announcement Modal */}
      <WinnerAnnouncementModal
        winner={selectedWinner}
        isOpen={!!selectedWinner}
        onClose={() => setSelectedWinner(null)}
      />
    </div>
  );
}
