"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#05050b] text-white select-none">
      <Header />

      <section className="flex-1 relative flex items-center justify-center overflow-hidden py-12 px-4 md:px-10">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(225,0,18,0.12)_0%,transparent_65%)]" />
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', 
            backgroundSize: '45px 45px' 
          }} 
        />

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
          <div className="mb-6 animate-pulse">
            <div className="border border-red-500/30 bg-red-950/20 px-4 py-1 rounded text-xs tracking-widest text-red-500 uppercase font-bold shadow-[0_0_15px_rgba(225,0,18,0.2)]">
              ROG Elite Edition
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">
            BECOME AN <span className="text-[#E10012] drop-shadow-[0_0_25px_rgba(225,0,18,0.6)]">ROG ELITE</span> MEMBER
          </h1>
          
          <p className="text-md sm:text-lg md:text-xl font-medium tracking-widest text-gray-400 uppercase max-w-2xl mb-12">
            AND GET REWARDED
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md justify-center">
            <Link 
              href="/login" 
              className="w-full sm:w-48 text-center border-2 border-red-600 bg-transparent text-white font-bold py-3 uppercase tracking-widest text-sm hover:bg-red-600/10 active:scale-95 transition-all rounded-sm"
            >
              Log In
            </Link>

            <Link 
              href="/signup" 
              className="w-full sm:w-48 text-center bg-[#E10012] hover:bg-red-700 text-white font-bold py-3.5 uppercase tracking-widest text-sm active:scale-95 transition-all rounded-tl-xl rounded-br-xl shadow-[0_4px_15px_rgba(225,0,18,0.4)]"
            >
              Sign Up Now
            </Link>
          </div>

          <div className="mt-16">
            <a href="#faq" className="text-xs tracking-widest text-gray-500 hover:text-white uppercase font-bold flex items-center gap-1 transition-colors">
              FAQ <span className="text-red-500">❯</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}