import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ffe58f] via-[#e5b32f] to-[#aa8010] p-1 shadow-gold-glow mx-auto flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#141634] flex items-center justify-center">
            <Flame className="w-10 h-10 text-amber-400 animate-flicker" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="font-mono text-5xl font-black gold-gradient-text tracking-widest">
            404
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Festive Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-white/60">
            The page you're searching for does not exist or has moved. Return to the main festival grounds below.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-[#0b0d1e] bg-gradient-to-r from-[#ffe58f] via-[#e5b32f] to-[#d4af37] shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>RETURN TO HOME</span>
        </Link>
      </div>
    </div>
  );
}
