import React, { useState, useEffect } from 'react';
import { Lock, ShieldCheck, Users, Award, Trophy, Play, RefreshCw, AlertCircle, CheckCircle2, FileText, Mail } from 'lucide-react';
import { api } from '../services/api';

export default function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('dd_admin_token') || '');
  const [credentials, setCredentials] = useState({
    email: 'admin@diwalidhamaka.com',
    password: 'Admin@Diwali2026'
  });
  const [dashboardData, setDashboardData] = useState(null);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const fetchDashboard = async (authToken) => {
    setLoading(true);
    try {
      const res = await api.getAdminDashboard(authToken);
      if (res.success) {
        setDashboardData(res.data);
      }
      const logsRes = await api.getAdminAuditLogs(authToken);
      if (logsRes.success) {
        setAuditLogs(logsRes.data);
      }
    } catch (err) {
      setError(err.message);
      if (err.message.includes('Access denied') || err.message.includes('Invalid or expired')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchDashboard(token);
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.adminLogin(credentials.email, credentials.password);
      if (res.success) {
        const authToken = res.data.token;
        setToken(authToken);
        localStorage.setItem('dd_admin_token', authToken);
        fetchDashboard(authToken);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('dd_admin_token');
    setDashboardData(null);
  };

  const handleUpdateStatus = async (newStatus) => {
    try {
      const res = await api.adminUpdateDraw('draw-diwali-2026', { status: newStatus }, token);
      if (res.success) {
        setMessage(`Draw status updated to ${newStatus}`);
        fetchDashboard(token);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleTriggerDraw = async () => {
    try {
      const res = await api.adminTriggerDraw('draw-diwali-2026', 'prize-1', token);
      if (res.success) {
        setMessage(res.message);
        fetchDashboard(token);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) {
    return (
      <div className="pt-32 pb-24 max-w-md mx-auto px-4">
        <div className="p-8 rounded-3xl bg-[#141634] border border-[#e5b32f]/40 shadow-2xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#281545] border border-[#e5b32f]/40 flex items-center justify-center text-[#ffe58f] mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold text-[#ffe58f]">
              Admin Control Suite
            </h1>
            <p className="text-xs text-white/60 mt-1">
              Authorized access only for Diwali Dhamaka officials.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs uppercase font-bold text-white/70 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white focus:outline-none focus:border-[#e5b32f]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-white/70 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090b1c] border border-white/10 text-sm text-white focus:outline-none focus:border-[#e5b32f]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
            >
              {loading ? 'AUTHENTICATING...' : 'LOG IN TO ADMIN PORTAL'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const stats = dashboardData?.stats || {};
  const currentDraw = dashboardData?.currentDraw || {};

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-[#141634] border border-[#e5b32f]/30">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#ffe58f]/70">
            Certified Administrator Console
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text">
            Diwali Dhamaka Operations
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchDashboard(token)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#ffe58f]"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-950/40 border border-rose-500/20 hover:bg-rose-950/70"
          >
            Log Out
          </button>
        </div>
      </div>

      {message && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {message}
          </span>
          <button onClick={() => setMessage(null)} className="text-white/60 hover:text-white">✕</button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#131533] border border-[#e5b32f]/20">
          <span className="text-xs text-white/50 block">Total Participants</span>
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#ffe58f]">
            {stats.totalParticipants || 0}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#131533] border border-[#e5b32f]/20">
          <span className="text-xs text-white/50 block">Issued Tickets</span>
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#ffe58f]">
            {stats.totalTickets || 0}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#131533] border border-[#e5b32f]/20">
          <span className="text-xs text-white/50 block">Draw Status</span>
          <span className="font-mono text-xl sm:text-2xl font-extrabold text-amber-400 uppercase">
            {stats.drawStatus || 'SCHEDULED'}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#131533] border border-[#e5b32f]/20">
          <span className="text-xs text-white/50 block">Verified Winners</span>
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">
            {stats.totalWinners || 0}
          </span>
        </div>
      </div>

      {/* Draw Management Engine */}
      <div className="p-8 rounded-3xl bg-[#141634] border border-[#e5b32f]/30 space-y-6">
        <h3 className="font-serif text-xl font-bold text-[#ffe58f]">
          Draw Control & State Switcher
        </h3>
        <p className="text-xs text-white/70">
          Manage the live status of the Diwali Grand Draw and manually trigger certified winner picks from active tickets.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleUpdateStatus('SCHEDULED')}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#1f2244] hover:bg-[#2a2e5c] text-white border border-white/10"
          >
            Set Status: SCHEDULED
          </button>
          <button
            onClick={() => handleUpdateStatus('LIVE')}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-rose-700 hover:bg-rose-600 text-white shadow-lg"
          >
            Set Status: LIVE DRAW
          </button>
          <button
            onClick={() => handleUpdateStatus('COMPLETED')}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-800 hover:bg-emerald-700 text-white"
          >
            Set Status: COMPLETED
          </button>
          <button
            onClick={handleTriggerDraw}
            className="px-6 py-2.5 rounded-xl font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] shadow-gold-glow hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <Trophy className="w-4 h-4" />
            <span>PICK RANDOM WINNER NOW</span>
          </button>
        </div>
      </div>

      {/* Audit Logs */}
      <div className="p-6 rounded-3xl bg-[#141634] border border-white/10 space-y-4">
        <h3 className="font-serif text-lg font-bold text-white/90 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#e5b32f]" />
          <span>Real-Time Audit Trail</span>
        </h3>
        <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-3 rounded-xl bg-[#090b1c] border border-white/5 text-xs flex items-center justify-between">
              <div>
                <span className="font-mono text-[#ffe58f] font-bold mr-2">[{log.action}]</span>
                <span className="text-white/80">by {log.actor}</span>
              </div>
              <span className="text-white/40 text-[10px]">
                {new Date(log.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
