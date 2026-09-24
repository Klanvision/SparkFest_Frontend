import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Trophy, Search, Filter, Sparkles, CheckCircle, Calendar, MapPin, ChevronLeft, ChevronRight, Crown, Award, Medal, Gift, Ticket, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';
import WinnerAnnouncementModal from '../components/common/WinnerAnnouncementModal';
import winnersPageBg from '../../Images/winners-page-bg.png';
import liveTrophyGold from '../assets/live-trophy-gold.png';
import liveTrophySilver from '../assets/live-trophy-silver.png';
import liveTrophyBronze from '../assets/live-trophy-bronze.png';
import liveGiftPurple from '../assets/live-gift-purple.png';

const getTierAsset = (tier) => {
  switch (tier?.toLowerCase()) {
    case 'gold':
      return liveTrophyGold;
    case 'silver':
      return liveTrophySilver;
    case 'bronze':
      return liveTrophyBronze;
    case 'purple':
    default:
      return liveGiftPurple;
  }
};

const getTierTheme = (tier) => {
  switch (tier?.toLowerCase()) {
    case 'gold':
      return {
        label: 'Gold Tier',
        TierIcon: Crown,
        tierIconColor: 'text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.85)] fill-amber-400/30',
        badgeBg: 'bg-gradient-to-r from-amber-500/25 via-amber-400/15 to-amber-950/70',
        badgeBorder: 'border-amber-400/60',
        badgeText: 'text-[#ffe58f]',
        badgeShadow: 'shadow-[0_2px_12px_rgba(245,158,11,0.25)]',

        ticketBg: 'bg-[#141009]/95',
        ticketBorder: 'border-[#f3c64c]/45',
        ticketText: 'text-[#ffe58f]',
        ticketIconColor: 'text-amber-400',

        medallionBg: 'bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.30)_0%,rgba(32,22,10,0.95)_75%)]',
        medallionRing: 'border-[#f3c64c]/60 shadow-[0_0_22px_rgba(243,198,76,0.3)] ring-1 ring-[#f3c64c]/30',

        cardBg: 'from-[#22180d]/95 via-[#151222]/95 to-[#0b0d1a]/95',
        cardBorder: 'border-[#f3c64c]/40 hover:border-[#ffe58f]',
        cardShadow: 'hover:shadow-[0_20px_50px_-10px_rgba(243,198,76,0.35)]',
        radialGlow: 'radial-gradient(circle at top left, rgba(245, 158, 11, 0.35), transparent 70%)',
        prizeGradient: 'bg-gradient-to-r from-[#fff7d1] via-[#f3c64c] to-[#d4af37]',
        prizeTitleText: 'text-[#ffe58f]/80',
        iconColor: 'text-[#f3c64c]',
        detailsBg: 'bg-[#0f0e1c]/80',
        detailsBorder: 'border-[#f3c64c]/20',
        locationTagBg: 'bg-[#241a10]',
        nameHoverText: 'group-hover:text-amber-200'
      };
    case 'silver':
      return {
        label: 'Silver Tier',
        TierIcon: Award,
        tierIconColor: 'text-slate-100 drop-shadow-[0_0_8px_rgba(226,232,240,0.85)] fill-slate-300/30',
        badgeBg: 'bg-gradient-to-r from-slate-400/25 via-slate-300/15 to-slate-900/70',
        badgeBorder: 'border-slate-300/60',
        badgeText: 'text-slate-100',
        badgeShadow: 'shadow-[0_2px_12px_rgba(148,163,184,0.25)]',

        ticketBg: 'bg-[#0b1018]/95',
        ticketBorder: 'border-slate-400/45',
        ticketText: 'text-slate-200',
        ticketIconColor: 'text-slate-300',

        medallionBg: 'bg-[radial-gradient(ellipse_at_center,rgba(226,232,240,0.26)_0%,rgba(16,23,34,0.95)_75%)]',
        medallionRing: 'border-slate-300/60 shadow-[0_0_22px_rgba(148,163,184,0.3)] ring-1 ring-slate-300/30',

        cardBg: 'from-[#141b26]/95 via-[#0e1320]/95 to-[#080b16]/95',
        cardBorder: 'border-[#94a3b8]/40 hover:border-[#e2e8f0]',
        cardShadow: 'hover:shadow-[0_20px_50px_-10px_rgba(148,163,184,0.35)]',
        radialGlow: 'radial-gradient(circle at top left, rgba(148, 163, 184, 0.30), transparent 70%)',
        prizeGradient: 'bg-gradient-to-r from-[#ffffff] via-[#e2e8f0] to-[#94a3b8]',
        prizeTitleText: 'text-slate-300/80',
        iconColor: 'text-[#cbd5e1]',
        detailsBg: 'bg-[#0a0e18]/80',
        detailsBorder: 'border-slate-400/20',
        locationTagBg: 'bg-[#162030]',
        nameHoverText: 'group-hover:text-cyan-200'
      };
    case 'bronze':
      return {
        label: 'Bronze Tier',
        TierIcon: Medal,
        tierIconColor: 'text-orange-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.85)] fill-orange-500/30',
        badgeBg: 'bg-gradient-to-r from-orange-500/25 via-orange-400/15 to-amber-950/70',
        badgeBorder: 'border-orange-500/60',
        badgeText: 'text-orange-200',
        badgeShadow: 'shadow-[0_2px_12px_rgba(217,119,6,0.25)]',

        ticketBg: 'bg-[#140b08]/95',
        ticketBorder: 'border-orange-500/45',
        ticketText: 'text-orange-200',
        ticketIconColor: 'text-orange-400',

        medallionBg: 'bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.25)_0%,rgba(32,16,10,0.95)_75%)]',
        medallionRing: 'border-orange-500/60 shadow-[0_0_22px_rgba(217,119,6,0.3)] ring-1 ring-orange-500/30',

        cardBg: 'from-[#24160e]/95 via-[#17111c]/95 to-[#0d0916]/95',
        cardBorder: 'border-[#d97706]/40 hover:border-[#fb923c]',
        cardShadow: 'hover:shadow-[0_20px_50px_-10px_rgba(217,119,6,0.35)]',
        radialGlow: 'radial-gradient(circle at top left, rgba(217, 119, 6, 0.30), transparent 70%)',
        prizeGradient: 'bg-gradient-to-r from-[#ffedd5] via-[#fb923c] to-[#d97706]',
        prizeTitleText: 'text-orange-300/80',
        iconColor: 'text-[#fb923c]',
        detailsBg: 'bg-[#100814]/80',
        detailsBorder: 'border-[#d97706]/20',
        locationTagBg: 'bg-[#26150e]',
        nameHoverText: 'group-hover:text-orange-200'
      };
    case 'purple':
    default:
      return {
        label: 'Diwali Bonanza',
        TierIcon: Gift,
        tierIconColor: 'text-fuchsia-300 drop-shadow-[0_0_8px_rgba(232,121,249,0.85)] fill-fuchsia-400/30',
        badgeBg: 'bg-gradient-to-r from-purple-500/25 via-purple-400/15 to-purple-950/70',
        badgeBorder: 'border-purple-400/60',
        badgeText: 'text-purple-200',
        badgeShadow: 'shadow-[0_2px_12px_rgba(192,132,252,0.25)]',

        ticketBg: 'bg-[#12071a]/95',
        ticketBorder: 'border-purple-400/45',
        ticketText: 'text-purple-200',
        ticketIconColor: 'text-purple-300',

        medallionBg: 'bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.28)_0%,rgba(32,13,48,0.95)_75%)]',
        medallionRing: 'border-purple-400/60 shadow-[0_0_22px_rgba(192,132,252,0.3)] ring-1 ring-purple-400/30',

        cardBg: 'from-[#221136]/95 via-[#150d24]/95 to-[#0b0616]/95',
        cardBorder: 'border-[#c084fc]/40 hover:border-[#e879f9]',
        cardShadow: 'hover:shadow-[0_20px_50px_-10px_rgba(192,132,252,0.35)]',
        radialGlow: 'radial-gradient(circle at top left, rgba(168, 85, 247, 0.32), transparent 70%)',
        prizeGradient: 'bg-gradient-to-r from-[#fae8ff] via-[#e879f9] to-[#c084fc]',
        prizeTitleText: 'text-purple-300/80',
        iconColor: 'text-[#c084fc]',
        detailsBg: 'bg-[#0f0618]/80',
        detailsBorder: 'border-purple-500/20',
        locationTagBg: 'bg-[#240e36]',
        nameHoverText: 'group-hover:text-fuchsia-200'
      };
  }
};

const defaultVerifiedWinners = [
  {
    id: 1,
    ticketNumber: 'DD-2026-HYD-50K',
    winnerName: 'Rohith Kumar',
    maskedName: 'Rohith K****',
    prizeTitle: '1st Prize Champion (Hyderabad)',
    prizeAmount: '₹50,000',
    tier: 'gold',
    drawDate: '10 Nov 2026',
    city: 'Hyderabad'
  },
  {
    id: 2,
    ticketNumber: 'DD-2026-VIJ-25K',
    winnerName: 'Sravani Reddy',
    maskedName: 'Sravani R****',
    prizeTitle: '2nd Prize Winner (Vijayawada)',
    prizeAmount: '₹25,000',
    tier: 'silver',
    drawDate: '10 Nov 2026',
    city: 'Vijayawada'
  },
  {
    id: 3,
    ticketNumber: 'DD-2026-BLR-10K',
    winnerName: 'Manoj Naik',
    maskedName: 'Manoj N****',
    prizeTitle: '3rd Prize Winner (Bengaluru)',
    prizeAmount: '₹10,000',
    tier: 'bronze',
    drawDate: '10 Nov 2026',
    city: 'Bengaluru'
  },
  {
    id: 4,
    ticketNumber: 'DD-2026-CHN-10K',
    winnerName: 'Keerthi Chowdary',
    maskedName: 'Keerthi C****',
    prizeTitle: '4th Prize Winner (Chennai)',
    prizeAmount: '₹10,000',
    tier: 'gold',
    drawDate: '10 Nov 2026',
    city: 'Chennai'
  },
  {
    id: 5,
    ticketNumber: 'DD-2026-VSKP-10K',
    winnerName: 'Akhil Varma',
    maskedName: 'Akhil V****',
    prizeTitle: '5th Prize Winner (Visakhapatnam)',
    prizeAmount: '₹10,000',
    tier: 'purple',
    drawDate: '10 Nov 2026',
    city: 'Visakhapatnam'
  },
  {
    id: 6,
    ticketNumber: 'DD-2026-MUM-5K',
    winnerName: 'Ananya Sharma',
    maskedName: 'Ananya S****',
    prizeTitle: 'Special Diwali Bonanza Winner',
    prizeAmount: '₹5,000',
    tier: 'purple',
    drawDate: '10 Nov 2026',
    city: 'Mumbai'
  },
  {
    id: 7,
    ticketNumber: 'DD-2026-DEL-50K',
    winnerName: 'Vikramaditya Singh',
    maskedName: 'Vikram S****',
    prizeTitle: 'Diwali Grand Bumper Champion',
    prizeAmount: '₹50,000',
    tier: 'gold',
    drawDate: '10 Nov 2026',
    city: 'New Delhi'
  },
  {
    id: 8,
    ticketNumber: 'DD-2026-PUN-25K',
    winnerName: 'Pooja Deshmukh',
    maskedName: 'Pooja D****',
    prizeTitle: 'Festive Silver Champion (Pune)',
    prizeAmount: '₹25,000',
    tier: 'silver',
    drawDate: '10 Nov 2026',
    city: 'Pune'
  },
  {
    id: 9,
    ticketNumber: 'DD-2026-JPR-10K',
    winnerName: 'Arjun Rathore',
    maskedName: 'Arjun R****',
    prizeTitle: 'Royal Heritage Lucky Winner',
    prizeAmount: '₹10,000',
    tier: 'bronze',
    drawDate: '10 Nov 2026',
    city: 'Jaipur'
  },
  {
    id: 10,
    ticketNumber: 'DD-2026-KOC-25K',
    winnerName: 'Meera Nambiar',
    maskedName: 'Meera N****',
    prizeTitle: 'Kerala Festive Bonanza Winner',
    prizeAmount: '₹25,000',
    tier: 'silver',
    drawDate: '10 Nov 2026',
    city: 'Kochi'
  },
  {
    id: 11,
    ticketNumber: 'DD-2026-AHM-10K',
    winnerName: 'Devang Patel',
    maskedName: 'Devang P****',
    prizeTitle: 'Gujarat Dhamaka Prize Winner',
    prizeAmount: '₹10,000',
    tier: 'gold',
    drawDate: '10 Nov 2026',
    city: 'Ahmedabad'
  },
  {
    id: 12,
    ticketNumber: 'DD-2026-IND-5K',
    winnerName: 'Neha Kulkarni',
    maskedName: 'Neha K****',
    prizeTitle: 'Special Festive Lucky Draw',
    prizeAmount: '₹5,000',
    tier: 'purple',
    drawDate: '10 Nov 2026',
    city: 'Indore'
  },
  {
    id: 13,
    ticketNumber: 'DD-2026-KOL-25K',
    winnerName: 'Subhash Bose',
    maskedName: 'Subhash B****',
    prizeTitle: 'Joy of Lights Silver Winner',
    prizeAmount: '₹25,000',
    tier: 'silver',
    drawDate: '10 Nov 2026',
    city: 'Kolkata'
  },
  {
    id: 14,
    ticketNumber: 'DD-2026-SUR-10K',
    winnerName: 'Ketan Mehta',
    maskedName: 'Ketan M****',
    prizeTitle: 'Diamond City Lucky Ticket Winner',
    prizeAmount: '₹10,000',
    tier: 'bronze',
    drawDate: '10 Nov 2026',
    city: 'Surat'
  },
  {
    id: 15,
    ticketNumber: 'DD-2026-LKO-10K',
    winnerName: 'Prateek Shukla',
    maskedName: 'Prateek S****',
    prizeTitle: 'Nawabi Diwali Lucky Draw Winner',
    prizeAmount: '₹10,000',
    tier: 'bronze',
    drawDate: '10 Nov 2026',
    city: 'Lucknow'
  },
  {
    id: 16,
    ticketNumber: 'DD-2026-CHD-25K',
    winnerName: 'Simran Kaur',
    maskedName: 'Simran K****',
    prizeTitle: 'Northern Lights Silver Champion',
    prizeAmount: '₹25,000',
    tier: 'silver',
    drawDate: '10 Nov 2026',
    city: 'Chandigarh'
  },
  {
    id: 17,
    ticketNumber: 'DD-2026-BHO-5K',
    winnerName: 'Rishi Trivedi',
    maskedName: 'Rishi T****',
    prizeTitle: 'Madhya Pradesh Bonanza Winner',
    prizeAmount: '₹5,000',
    tier: 'purple',
    drawDate: '10 Nov 2026',
    city: 'Bhopal'
  },
  {
    id: 18,
    ticketNumber: 'DD-2026-BBI-10K',
    winnerName: 'Swati Mohanty',
    maskedName: 'Swati M****',
    prizeTitle: 'Temple City Golden Draw Winner',
    prizeAmount: '₹10,000',
    tier: 'gold',
    drawDate: '10 Nov 2026',
    city: 'Bhubaneswar'
  }
];

export default function Winners() {
  const location = useLocation();
  const [winners, setWinners] = useState(defaultVerifiedWinners);
  const [search, setSearch] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Reset page when search or tier filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTier]);

  // If navigated from Home page with a selected winner
  useEffect(() => {
    if (location.state?.selectedWinner) {
      setSelectedWinner(location.state.selectedWinner);
    }
  }, [location.state]);

  useEffect(() => {
    async function loadWinners() {
      try {
        const res = await api.getWinners({ search, tier: selectedTier });
        if (res.success && res.data && res.data.length > 0) {
          setWinners(res.data);
        } else {
          let filtered = defaultVerifiedWinners;
          if (selectedTier !== 'all') {
            filtered = filtered.filter((w) => w.tier === selectedTier);
          }
          if (search.trim()) {
            const query = search.toLowerCase();
            filtered = filtered.filter(
              (w) =>
                w.ticketNumber.toLowerCase().includes(query) ||
                w.winnerName.toLowerCase().includes(query) ||
                w.city.toLowerCase().includes(query)
            );
          }
          setWinners(filtered);
        }
      } catch (err) {
        let filtered = defaultVerifiedWinners;
        if (selectedTier !== 'all') {
          filtered = filtered.filter((w) => w.tier === selectedTier);
        }
        if (search.trim()) {
          const query = search.toLowerCase();
          filtered = filtered.filter(
            (w) =>
              w.ticketNumber.toLowerCase().includes(query) ||
              w.winnerName.toLowerCase().includes(query) ||
              w.city.toLowerCase().includes(query)
          );
        }
        setWinners(filtered);
      } finally {
        setLoading(false);
      }
    }
    loadWinners();
  }, [search, selectedTier]);

  const totalPages = Math.max(1, Math.ceil(winners.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWinners = winners.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] bg-[#00030b]">
      <div
        className="w-full min-h-[calc(100vh-96px)] bg-[#00030b] winners-page"
        style={{
          backgroundImage: `url(${winnersPageBg})`,
          backgroundColor: '#00030b',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      >
        <style>{`
          @media (max-width: 1023px) {
            .winners-page {
              background-size: max(100%, 1024px) auto !important;
            }
          }
        `}</style>
        <div className="pt-8 sm:pt-10 lg:pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {paginatedWinners.map((winner) => {
            const tierAsset = getTierAsset(winner.tier);
            const theme = getTierTheme(winner.tier);

            return (
              <div
                key={winner.id}
                onClick={() => setSelectedWinner(winner)}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${theme.cardBg} border ${theme.cardBorder} shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7)] ${theme.cardShadow} cursor-pointer transition-all duration-500 ease-out group flex flex-col justify-between overflow-hidden hover:-translate-y-2.5 backdrop-blur-xl`}
              >
                {/* 1. Ambient Tier Radial Glow inside card */}
                <div
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-45 group-hover:opacity-85 transition-opacity duration-700 blur-2xl"
                  style={{ background: theme.radialGlow }}
                />

                {/* 2. Sweeping Glare Reflection on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10" />

                {/* Card Content Top Section */}
                <div className="relative z-10">
                  {/* Header: 3D Medallion Avatar + Tier Chip & Ticket Number */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {/* 3D Tier Trophy Medallion with Luminous Ambient Spotlight */}
                    <div className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${theme.medallionBg} border ${theme.medallionRing} p-2 flex items-center justify-center group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 overflow-hidden shrink-0`}>
                      {/* Inner Ambient Glow Spotlight */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-85 transition-opacity blur-sm"
                        style={{ background: theme.radialGlow }}
                      />
                      {/* 3D Trophy / Award Asset */}
                      <img
                        src={tierAsset}
                        alt={winner.tier}
                        className="relative z-10 w-full h-full object-contain scale-110 sm:scale-115 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.85)] brightness-110 contrast-105"
                      />
                    </div>

                    {/* Right Header Chips: Tier Badge & Ticket Pill */}
                    <div className="flex flex-col items-end gap-2">
                      {/* Premium Tier Hallmark Pill with Lucide Emblem */}
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badgeBorder} ${theme.badgeBg} ${theme.badgeText} ${theme.badgeShadow} backdrop-blur-md transition-all duration-300`}
                      >
                        <theme.TierIcon className={`w-3.5 h-3.5 ${theme.tierIconColor} shrink-0`} />
                        <span>{theme.label}</span>
                      </span>

                      {/* Ticket Pill with Cryptographic Badge Aesthetic & Ticket Icon */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.ticketBg} border ${theme.ticketBorder} shadow-inner backdrop-blur-md group-hover:border-opacity-90 transition-all`}>
                        <Ticket className={`w-3.5 h-3.5 ${theme.ticketIconColor} shrink-0`} />
                        <span className="w-[1px] h-3 bg-white/20" />
                        <span className={`font-mono text-[11px] sm:text-xs font-bold ${theme.ticketText} tracking-wider`}>
                          {winner.ticketNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Prize Info & Winner Name */}
                  <div className="space-y-1.5">
                    <span className={`text-[11px] sm:text-xs uppercase font-extrabold tracking-widest ${theme.prizeTitleText} block`}>
                      {winner.prizeTitle}
                    </span>
                    <div className={`font-serif text-3xl sm:text-4xl font-black ${theme.prizeGradient} bg-clip-text text-transparent tracking-tight group-hover:scale-[1.02] transition-transform origin-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]`}>
                      {winner.prizeAmount}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <h3 className={`text-lg sm:text-xl font-bold text-white/95 font-serif tracking-wide ${theme.nameHoverText} transition-colors`}>
                        {winner.maskedName}
                      </h3>
                      {/* Verified Pill */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>

                  {/* Event Details: Date & City */}
                  <div className={`pt-3.5 pb-3 px-3.5 mt-5 rounded-2xl ${theme.detailsBg} border ${theme.detailsBorder} space-y-2 text-xs text-white/70`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                          <Calendar className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                        </span>
                        <span className="text-white/85 font-medium">Draw: {winner.drawDate}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${theme.locationTagBg} border border-white/10 text-white/95 shadow-sm`}>
                        <MapPin className={`w-3 h-3 ${theme.iconColor}`} />
                        <span className="font-semibold text-[11px] sm:text-xs">{winner.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Numbered Pagination Structure */}
      {winners.length > 0 && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#131533]/85 border border-[#e5b32f]/25 shadow-lg backdrop-blur-md">
          {/* Summary / Range */}
          <div className="text-xs sm:text-sm text-white/70 flex items-center gap-1.5 font-medium">
            <span>Showing</span>
            <span className="font-bold text-[#ffe58f]">{startIndex + 1}</span>
            <span>–</span>
            <span className="font-bold text-[#ffe58f]">
              {Math.min(startIndex + itemsPerPage, winners.length)}
            </span>
            <span>of</span>
            <span className="font-bold text-[#ffe58f]">{winners.length}</span>
            <span>Verified Winners</span>
          </div>

          {/* Number Navigation Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Previous Page Button */}
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((prev) => prev - 1);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }
              }}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed bg-[#1b1e42] text-white/80 hover:text-white hover:border-[#e5b32f]/50 hover:bg-[#232757]"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Numbered Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-200 ${
                  currentPage === pageNum
                    ? 'bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] text-[#0b0d1e] shadow-gold-glow scale-105 ring-2 ring-[#ffe58f]/40'
                    : 'bg-[#1b1e42] text-white/70 hover:text-white hover:border-[#e5b32f]/50 hover:bg-[#232757] border border-white/10'
                }`}
                aria-label={`Go to page ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Page Button */}
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage((prev) => prev + 1);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }
              }}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed bg-[#1b1e42] text-white/80 hover:text-white hover:border-[#e5b32f]/50 hover:bg-[#232757]"
              aria-label="Next Page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Winner Spotlight Announcement Modal */}
      <WinnerAnnouncementModal
        winner={selectedWinner}
        isOpen={!!selectedWinner}
        onClose={() => setSelectedWinner(null)}
      />
        </div>
      </div>
    </div>
  );
}
