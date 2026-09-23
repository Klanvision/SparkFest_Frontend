import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ShieldCheck, CheckCircle2, AlertCircle, Printer, Trophy, ArrowRight, Flame } from 'lucide-react';
import { api } from '../services/api';

export default function TicketDetails() {
  const { ticketNumber } = useParams();
  const [query, setQuery] = useState(ticketNumber || 'DD-2026-45872');
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTicket = async (num) => {
    if (!num) return;
    setLoading(true);
    setError(null);
    try {
      const res = await api.getTicket(num);
      if (res.success) {
        setTicketData(res.data);
      }
    } catch (err) {
      setError(err.message);
      setTicketData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ticketNumber) {
      fetchTicket(ticketNumber);
    } else {
      fetchTicket('DD-2026-45872');
    }
  }, [ticketNumber]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTicket(query);
  };

  return (
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold uppercase tracking-wider shadow-gold-glow">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Official Public Verification Registry</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
          Ticket Verification & Details
        </h1>
        <p className="text-xs sm:text-sm text-white/70">
          Verify the validity, status, and scheduled draw details for any issued Diwali Dhamaka ticket.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-10 flex gap-2">
        <input
          type="text"
          placeholder="Enter Ticket Number e.g. DD-2026-45872"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-[#131533] border border-[#e5b32f]/30 text-white font-mono text-sm uppercase placeholder-white/30 focus:outline-none focus:border-[#e5b32f]"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
        >
          <Search className="w-4 h-4" />
          <span>VERIFY</span>
        </button>
      </form>

      {error && (
        <div className="p-6 rounded-3xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {ticketData && (
        <div className="p-8 sm:p-10 rounded-3xl bg-[#141634] border border-[#e5b32f]/40 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span className="font-serif text-sm font-bold text-[#ffe58f] uppercase">
                {ticketData.drawName}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              {ticketData.status}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">
              Verified Ticket Number
            </span>
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#ffe58f] tracking-wider">
              {ticketData.ticketNumber}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0b0d1e] border border-white/5 space-y-1">
              <span className="text-white/50 block">Participant:</span>
              <span className="font-bold text-white text-sm">{ticketData.participantMaskedName}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0b0d1e] border border-white/5 space-y-1">
              <span className="text-white/50 block">Draw Date & Time:</span>
              <span className="font-bold text-white text-sm">{ticketData.drawDate} • {ticketData.drawTime}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0b0d1e] border border-white/5 space-y-1">
              <span className="text-white/50 block">Issuance Date:</span>
              <span className="font-bold text-white text-sm">{new Date(ticketData.issuedAt).toLocaleDateString()}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0b0d1e] border border-white/5 space-y-1">
              <span className="text-white/50 block">Cryptographic Authenticity:</span>
              <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> SHA-256 Validated
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full font-semibold text-xs text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Voucher</span>
            </button>

            <Link
              to="/live-draw"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] shadow-gold-glow flex items-center justify-center gap-2"
            >
              <span>Watch Draw Live</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
