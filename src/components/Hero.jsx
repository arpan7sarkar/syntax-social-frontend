import React from "react";
import { Link } from "react-router";
const Hero = () => {
  const MainText = () => (
    <div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
        The Smarter Way <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          to Grow Your Network
        </span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        Syntax Social helps modern developers streamline their connections with
        a powerful, flexible platform that scales with you.
      </p>
    </div>
  );
  const HeroButtons=()=>(
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Link
            to="/signup"
            className="px-8 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-200 transition-all min-w-[160px]"
          >
            Start for free
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 text-sm font-semibold bg-[#111] text-white border border-white/10 rounded-xl hover:bg-[#222] transition-all min-w-[160px]"
          >
            Get Demo
          </Link>
        </div>)
  return (
    <div>
      {" "}
      <header className="relative z-10 pt-48 pb-32 text-center container mx-auto px-6">
        <MainText />
        <HeroButtons/>
        
      </header>
    </div>
  );
};

export default Hero;
