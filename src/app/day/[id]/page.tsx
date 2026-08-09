"use client";

import { use, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { useAppState } from "@/lib/AppStateContext";

type Props = {
  params: Promise<{ id: string }>;
};

export default function DayPage({ params }: Props) {
  const { id } = use(params);
  const { getDay, completeDay } = useAppState();
  const day = getDay(parseInt(id, 10));
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (!day) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pb-32 relative z-10">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.05] px-10 py-6 flex items-center shadow-sm">
        <Link href="/dashboard" className="text-zinc-500 hover:text-white transition-colors">
          <ArrowLeft size={20} strokeWidth={1.5} />
        </Link>
        <div className="ml-6 flex-1">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">DAY {day.dayNumber} / 60</p>
          <div className="w-full h-px bg-white/10 overflow-hidden">
            <div 
              className="h-full bg-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
              style={{ width: `${(day.dayNumber / 60) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 p-10 space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-light tracking-tighter-luxury leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
            {day.title}
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed tracking-tight-luxury">
            {day.description}
          </p>
        </header>

        {/* Deliverables */}
        <section>
          <h2 className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-6">
            Deliverables
          </h2>
          <ul className="space-y-4">
            {day.deliverables.map((item) => (
              <li key={item.id} className="flex items-start">
                <CheckCircle2 size={16} strokeWidth={1.5} className="text-zinc-500 mt-0.5 mr-4 shrink-0" />
                <span className="text-zinc-300 text-sm tracking-tight-luxury">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Submission Form */}
        <form 
          className="space-y-10"
          onSubmit={(e) => {
            e.preventDefault();
            startTransition(() => {
              completeDay(day.dayNumber);
              router.push('/dashboard');
            });
          }}
        >
          <h2 className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-6">
            Proof of Work
          </h2>
          
          <div className="space-y-3">
            <label htmlFor="github" className="text-[10px] uppercase tracking-widest text-zinc-500 block">GitHub Commit URL</label>
            <input 
              type="url" 
              id="github"
              placeholder="https://github.com/..." 
              className="w-full bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="linkedin" className="text-[10px] uppercase tracking-widest text-zinc-500 block">LinkedIn Post URL</label>
            <input 
              type="url" 
              id="linkedin"
              placeholder="https://linkedin.com/..." 
              className="w-full bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
            />
          </div>

          <div className="space-y-3 pt-4">
            <label htmlFor="insight" className="text-[10px] uppercase tracking-widest text-zinc-500 block">Daily Insight (Mandatory)</label>
            <p className="text-xs text-zinc-500 mb-4 tracking-tight-luxury">Reflect on your primary learning or struggle today. This goes into your final journal.</p>
            <textarea 
              id="insight"
              rows={5}
              placeholder="Today I struggled with... but I learned..." 
              className="w-full bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Floating Action Bar */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-5rem)] max-w-[342px] z-50">
            <button 
              type="submit"
              disabled={isPending}
              className="w-full py-5 bg-zinc-100 text-zinc-900 shadow-[0_2px_15px_rgba(255,255,255,0.15)] font-medium rounded-xl hover:bg-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:active:scale-100"
            >
              {isPending ? "Submitting..." : "Submit Proof of Work"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
