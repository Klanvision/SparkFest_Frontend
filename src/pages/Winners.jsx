import React, { useState, useEffect } from 'react';
import { Trophy, Search, Filter, Sparkles, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { api } from '../services/api';
import WinnerAnnouncementModal from '../components/common/WinnerAnnouncementModal';

export default function Winners() {
  const [winners, setWinners] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWinners() {
      try {
        const res = await api.getWinners({ search, tier: selectedTier });
        if (res.success) {
          setWinners(res.data);
        }
      } catch (err) {
        console.error('Failed to load winners:', err);
      } finally {
        setLoading(false);
      }
    }
    loadWinners();
  }, [search, selectedTier]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Hall of Fame</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          Verified Winners
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          Real people, verified lucky tickets, and guaranteed disbursements. Click any card to re-live their winning announcement!
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-[#131533] border border-[#e5b32f]/20 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by ticket # or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#e5b32f]"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {['all', 'gold', 'silver', 'bronze', 'purple'].map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedTier === tier
                  ? 'bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] text-[#0b0d1e] font-bold shadow-gold-glow'
                  : 'bg-[#1b1e42] text-white/70 hover:text-white'
              }`}
            >
              {tier === 'all' ? 'All Tiers' : `${tier} Tier`}
            </button>
          ))}
        </div>
      </div>

      {/* Winners Grid */}
      {winners.length === 0 ? (
        <div className="text-center py-20 bg-[#12142d] rounded-3xl border border-white/10">
          <Trophy className="w-12 h-12 text-white/20 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-white/60">No Winners Found</h3>
          <p className="text-xs text-white/40 mt-1">Try adjusting your search query or filter criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((winner) => (
            <div
              key={winner.id}
              onClick={() => setSelectedWinner(winner)}
              className="p-6 rounded-3xl bg-[#141634] border border-[#e5b32f]/25 hover:border-[#e5b32f] hover:shadow-gold-glow cursor-pointer transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#22163b] border border-[#e5b32f]/30 flex items-center justify-center text-[#f3c64c] group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#ffe58f] px-3 py-1 rounded-full bg-[#201540] border border-[#e5b32f]/30">
                    {winner.ticketNumber}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-white/50">
                    {winner.prizeTitle}
                  </span>
                  <div className="font-serif text-3xl font-extrabold text-[#ffe58f]">
                    {winner.prizeAmount}
                  </div>
                  <h3 className="text-lg font-bold text-white/90 font-serif pt-1">
                    {winner.maskedName}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 text-xs text-white/60 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#e5b32f]" />
                    <span>Draw Event: {winner.drawDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#e5b32f]" />
                    <span>Region: {winner.city}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <span className="block w-full py-2.5 rounded-full text-xs font-bold text-center bg-[#201844] text-[#ffe58f] group-hover:bg-[#e5b32f] group-hover:text-[#0b0d1e] transition-colors">
                  🎉 Re-play Winner Reveal
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Winner Spotlight Announcement Modal */}
      <WinnerAnnouncementModal
        winner={selectedWinner}
        isOpen={!!selectedWinner}
        onClose={() => setSelectedWinner(null)}
      />
    </div>
  );
}
