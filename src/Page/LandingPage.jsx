import React from "react";
import LandingNavBar from "../components/LandingNavBar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] border-t border-white/10 rounded-[100%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
      </div>

      <LandingNavBar />
      <Hero />
      <Featured/>
    </div>
  );
};

export default LandingPage;
