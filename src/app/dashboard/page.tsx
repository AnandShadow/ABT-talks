"use client";

import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";
import { useAppState } from "@/lib/AppStateContext";

export default function Dashboard() {
  const { user, days } = useAppState();
  const currentDay = days.find(d => d.status === 'current');
  const completedCount = days.filter(d => d.status === 'completed').length;
  const progressPercent = Math.round((completedCount / 60) * 100);

  return (
    <div className="flex flex-col min-h-screen p-10 pb-32 relative z-10">
      {/* Header */}
      <header className="flex items-center justify-between py-8">
        <div className="flex items-center space-x-4">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-12 h-12 rounded-full border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Welcome back</p>
            <h2 className="font-medium text-white leading-tight drop-shadow-sm">{user.name}</h2>
          </div>
        </div>
      </header>

      {/* Stats Card */}
      <section className="mt-8 p-8 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-3xl backdrop-blur-sm relative">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Current Streak</p>
            <div className="flex items-center text-5xl font-light tracking-tighter-luxury bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              {user.streak} <span className="text-zinc-600 text-2xl font-medium ml-3 mt-2">days</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-[20px] rounded-full"></div>
            <Flame className="text-zinc-300 mb-2 relative" size={28} strokeWidth={1.5} />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest mb-3">
            <span className="text-zinc-500">Progress</span>
            <span className="text-zinc-300 font-medium">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-black/50 rounded-full border border-white/[0.05] overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
            <div 
              className="h-full bg-gradient-to-r from-zinc-500 to-white transition-all duration-1000 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Today's Mission Action */}
      {currentDay && (
        <section className="mt-12">
          <Link 
            href={`/day/${currentDay.dayNumber}`}
            className="flex flex-col p-8 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-3xl transition-all hover:bg-white/[0.04] active:scale-[0.98] backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Today's Mission</span>
              <ArrowRight className="text-zinc-400" size={16} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-light tracking-tighter-luxury mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              {currentDay.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {currentDay.description}
            </p>
          </Link>
        </section>
      )}

      {/* 60-Day Grid */}
      <section className="mt-16 mb-8">
        <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-8">The 60-Day Journey</h3>
        <div className="grid grid-cols-6 gap-3 sm:gap-4">
          {days.map((day) => {
            let cellStyle = "text-zinc-700 bg-white/[0.01] border border-white/[0.02]"; // locked
            
            if (day.status === 'completed') {
              cellStyle = "bg-white/[0.05] text-zinc-300 font-medium border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";
            } else if (day.status === 'current') {
              cellStyle = "bg-white text-zinc-900 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]";
            } else if (day.status === 'missed') {
              cellStyle = "bg-black text-zinc-600 border border-white/[0.05] border-dashed";
            }

            return (
              <div 
                key={day.dayNumber}
                className={`aspect-square flex items-center justify-center text-xs transition-colors rounded-xl ${cellStyle}`}
              >
                {day.dayNumber}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
