import Link from "next/link";
import { mockUser, mockDays } from "@/lib/mockData";
import { Flame, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const currentDay = mockDays.find(d => d.status === 'current');
  const completedCount = mockDays.filter(d => d.status === 'completed').length;
  const progressPercent = Math.round((completedCount / 60) * 100);

  return (
    <div className="flex flex-col min-h-screen p-6 pb-24 bg-black">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-3">
          <img 
            src={mockUser.avatarUrl} 
            alt={mockUser.name} 
            className="w-10 h-10 rounded-full border border-zinc-800"
          />
          <div>
            <p className="text-xs text-zinc-500">Welcome back,</p>
            <h2 className="font-semibold text-white leading-tight">{mockUser.name}</h2>
          </div>
        </div>
      </header>

      {/* Stats Card */}
      <section className="mt-4 p-6 border border-zinc-900 rounded-2xl bg-zinc-950/30">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1">Current Streak</p>
            <div className="flex items-center text-4xl font-bold tracking-tighter-luxury">
              {mockUser.streak} <span className="text-zinc-600 text-2xl ml-2">days</span>
            </div>
          </div>
          <Flame className="text-orange-500 mb-1" size={28} />
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-zinc-400">Progress</span>
            <span className="text-white font-medium">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Today's Mission Action */}
      {currentDay && (
        <section className="mt-8">
          <Link 
            href={`/day/${currentDay.dayNumber}`}
            className="group flex flex-col p-6 bg-white rounded-2xl transition-transform active:scale-95 hover:scale-[1.02]"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Today's Mission</span>
              <ArrowRight className="text-black group-hover:translate-x-1 transition-transform" size={18} />
            </div>
            <h3 className="text-xl font-bold text-black tracking-tight-luxury mb-1">
              {currentDay.title}
            </h3>
            <p className="text-sm text-zinc-600 line-clamp-2">
              {currentDay.description}
            </p>
          </Link>
        </section>
      )}

      {/* 60-Day Grid */}
      <section className="mt-12 mb-8">
        <h3 className="text-sm font-semibold text-zinc-300 mb-6">The 60-Day Journey</h3>
        <div className="grid grid-cols-6 gap-2 sm:gap-3">
          {mockDays.map((day) => {
            let cellStyle = "bg-zinc-900/50 border border-transparent text-zinc-600"; // locked
            
            if (day.status === 'completed') {
              cellStyle = "bg-white text-black font-bold border-white";
            } else if (day.status === 'current') {
              cellStyle = "bg-black text-white font-bold border-white relative before:absolute before:inset-0 before:ring-2 before:ring-white/20 before:rounded-lg";
            } else if (day.status === 'missed') {
              cellStyle = "bg-zinc-950 text-red-900/50 border border-red-900/20";
            }

            return (
              <div 
                key={day.dayNumber}
                className={`aspect-square rounded-lg flex items-center justify-center text-xs transition-colors ${cellStyle}`}
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
