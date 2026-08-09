import Link from "next/link";
import { ArrowRight, Code2, Rocket, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen p-12">
      {/* Header / Logo */}
      <header className="pt-12 pb-24 flex justify-center">
        <div className="text-xl font-medium tracking-tighter-luxury text-white">
          ABTalks<span className="text-zinc-500">.</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center space-y-20">
        <div className="space-y-6">
          <h1 className="text-5xl font-medium tracking-tighter-luxury leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
            60 Days.<br />
            <span className="from-zinc-400 to-zinc-600 bg-gradient-to-b bg-clip-text text-transparent">Prove your potential.</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-[280px] mx-auto tracking-tight-luxury">
            The ultimate challenge to transform your ideas into reality. No excuses, just execution.
          </p>
        </div>

        {/* 3-Step Breakdown */}
        <div className="w-full space-y-6 text-left">
          <div className="flex items-start space-x-6 p-6 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl backdrop-blur-sm">
            <div className="text-zinc-300 mt-0.5 drop-shadow-md">
              <Code2 size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-zinc-100 tracking-tight-luxury">1. Build</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Write code every single day. Lay the foundation.</p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-6 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl backdrop-blur-sm">
            <div className="text-zinc-300 mt-0.5 drop-shadow-md">
              <Rocket size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-zinc-100 tracking-tight-luxury">2. Ship</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Deploy your work. Share it with the world publicly.</p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-6 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl backdrop-blur-sm">
            <div className="text-zinc-300 mt-0.5 drop-shadow-md">
              <TrendingUp size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-zinc-100 tracking-tight-luxury">3. Grow</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Reflect, learn, and iterate on your daily insights.</p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Bottom */}
      <footer className="pb-12 pt-20">
        <Link 
          href="/dashboard"
          className="flex items-center justify-center w-full py-5 bg-zinc-100 text-zinc-900 shadow-[0_2px_15px_rgba(255,255,255,0.15)] font-medium rounded-xl transition-all duration-200 hover:bg-white active:scale-[0.98]"
        >
          <span>Commit to the Challenge</span>
          <ArrowRight size={18} strokeWidth={2} className="ml-3" />
        </Link>
      </footer>
    </div>
  );
}
