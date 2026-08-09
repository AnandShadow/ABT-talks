import Link from "next/link";
import { ArrowRight, Code2, Rocket, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen p-8 bg-black">
      {/* Header / Logo */}
      <header className="pt-8 pb-16 flex justify-center">
        <div className="text-2xl font-bold tracking-tighter-luxury text-white">
          ABTalks<span className="text-zinc-500">.</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter-luxury text-white leading-tight">
            60 Days.<br />
            <span className="text-zinc-400">Prove your potential.</span>
          </h1>
          <p className="text-zinc-500 text-sm max-w-[280px] mx-auto tracking-tight-luxury">
            The ultimate challenge to transform your ideas into reality. No excuses, just execution.
          </p>
        </div>

        {/* 3-Step Breakdown */}
        <div className="w-full space-y-6 text-left">
          <div className="flex items-start space-x-4 p-4 border border-zinc-900 rounded-xl bg-zinc-950/50">
            <div className="p-2 bg-zinc-900 rounded-lg text-white">
              <Code2 size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-tight-luxury">1. Build</h3>
              <p className="text-xs text-zinc-500 mt-1">Write code every single day. Lay the foundation.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border border-zinc-900 rounded-xl bg-zinc-950/50">
            <div className="p-2 bg-zinc-900 rounded-lg text-white">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-tight-luxury">2. Ship</h3>
              <p className="text-xs text-zinc-500 mt-1">Deploy your work. Share it with the world publicly.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 border border-zinc-900 rounded-xl bg-zinc-950/50">
            <div className="p-2 bg-zinc-900 rounded-lg text-white">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-tight-luxury">3. Grow</h3>
              <p className="text-xs text-zinc-500 mt-1">Reflect, learn, and iterate on your daily insights.</p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Bottom */}
      <footer className="pb-8 pt-12">
        <Link 
          href="/dashboard"
          className="group flex items-center justify-center w-full py-4 bg-white text-black font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-95"
        >
          <span>Commit to the Challenge</span>
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </footer>
    </div>
  );
}
