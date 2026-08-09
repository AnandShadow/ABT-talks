import Link from "next/link";
import { getDay } from "@/lib/mockData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DayPage({ params }: Props) {
  const { id } = await params;
  const day = getDay(parseInt(id, 10));

  if (!day) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black pb-28">
      {/* Sticky Top Nav */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex items-center">
        <Link href="/dashboard" className="text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div className="ml-4 flex-1">
          <p className="text-xs text-zinc-500 font-medium">DAY {day.dayNumber} / 60</p>
          <div className="w-full h-1 bg-zinc-900 mt-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all" 
              style={{ width: `${(day.dayNumber / 60) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 p-6 space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold text-white tracking-tighter-luxury leading-tight mb-3">
            {day.title}
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {day.description}
          </p>
        </header>

        {/* Deliverables */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Deliverables
          </h2>
          <ul className="space-y-3">
            {day.deliverables.map((item, idx) => (
              <li key={item.id} className="flex items-start">
                <CheckCircle2 size={18} className="text-zinc-700 mt-0.5 mr-3 shrink-0" />
                <span className="text-zinc-300 text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Submission Form */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Proof of Work
          </h2>
          
          <div className="space-y-2">
            <label htmlFor="github" className="text-xs font-medium text-zinc-400">GitHub Commit URL</label>
            <input 
              type="url" 
              id="github"
              placeholder="https://github.com/..." 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="linkedin" className="text-xs font-medium text-zinc-400">LinkedIn Post URL</label>
            <input 
              type="url" 
              id="linkedin"
              placeholder="https://linkedin.com/..." 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-2 pt-2">
            <label htmlFor="insight" className="text-xs font-medium text-zinc-400">Daily Insight (Mandatory)</label>
            <p className="text-[10px] text-zinc-600 mb-2">Reflect on your primary learning or struggle today. This goes into your final journal.</p>
            <textarea 
              id="insight"
              rows={4}
              placeholder="Today I struggled with... but I learned..." 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>
        </section>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[342px] z-50">
        <button className="w-full py-4 bg-white text-black font-bold rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95 transition-transform flex items-center justify-center">
          Submit Proof of Work
        </button>
      </div>
    </div>
  );
}
