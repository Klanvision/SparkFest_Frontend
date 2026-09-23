import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate, onStatusChange, variant = 'default' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 34,
    seconds: 27,
    status: 'SCHEDULED' // SCHEDULED, LIVE, COMPLETED
  });

  useEffect(() => {
    if (!targetDate) return;

    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        // If within 2 hours after target, consider it LIVE
        if (diff > -2 * 60 * 60 * 1000) {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'LIVE' });
          if (onStatusChange) onStatusChange('LIVE');
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'COMPLETED' });
          if (onStatusChange) onStatusChange('COMPLETED');
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, status: 'SCHEDULED' });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n) => String(n).padStart(2, '0');

  // Variant: Banner (Compact horizontal as in reference image Grand Draw banner)
  if (variant === 'banner') {
    return (
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#ffe58f] tracking-wider">
            {pad(timeLeft.days)}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-white/60">Days</div>
        </div>
        <span className="text-lg font-bold text-[#e5b32f]">:</span>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#ffe58f] tracking-wider">
            {pad(timeLeft.hours)}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-white/60">Hours</div>
        </div>
        <span className="text-lg font-bold text-[#e5b32f]">:</span>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#ffe58f] tracking-wider">
            {pad(timeLeft.minutes)}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-white/60">Minutes</div>
        </div>
        <span className="text-lg font-bold text-[#e5b32f]">:</span>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#ffe58f] tracking-wider">
            {pad(timeLeft.seconds)}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-white/60">Seconds</div>
        </div>
      </div>
    );
  }

  // Variant: Default Hero Card (Matching the Reference Image exactly)
  return (
    <div className="inline-flex items-center gap-2 sm:gap-6 px-4 sm:px-8 py-4 rounded-2xl bg-transparent border border-amber-400/30 backdrop-blur-sm animate-container-float">
      {/* Days */}
      <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px]">
        <span className="font-['Cinzel_Decorative'] text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d97706] to-[#fde047] tracking-wider drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)] animate-shimmer">
          {pad(timeLeft.days)}
        </span>
        <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-amber-200/80 font-medium mt-1">
          Days
        </span>
      </div>

      <div className="h-10 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>

      {/* Hours */}
      <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px]">
        <span className="font-['Cinzel_Decorative'] text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d97706] to-[#fde047] tracking-wider drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)] animate-shimmer">
          {pad(timeLeft.hours)}
        </span>
        <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-amber-200/80 font-medium mt-1">
          Hours
        </span>
      </div>

      <div className="h-10 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>

      {/* Minutes */}
      <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px]">
        <span className="font-['Cinzel_Decorative'] text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d97706] to-[#fde047] tracking-wider drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)] animate-shimmer">
          {pad(timeLeft.minutes)}
        </span>
        <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-amber-200/80 font-medium mt-1">
          Minutes
        </span>
      </div>

      <div className="h-10 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>

      {/* Seconds */}
      <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px]">
        <span className="font-['Cinzel_Decorative'] text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d97706] to-[#fde047] tracking-wider animate-heartbeat-glow">
          {pad(timeLeft.seconds)}
        </span>
        <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-amber-200/80 font-medium mt-1">
          Seconds
        </span>
      </div>
    </div>
  );
}
