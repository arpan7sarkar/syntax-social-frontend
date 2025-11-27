import React from "react";

const Featured = () => {
  const MatchingCard = () => (
    <div className="md:col-span-1 bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative">
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">Smart Matching</h3>
        <p className="text-sm text-gray-400 mb-8">
          Swipe cards to find your developer match.
        </p>

        {/* Swipe Card Visual */}
        <div className="relative w-full aspect-[3/4] mx-auto max-w-[220px]">
          <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-[#222] rounded-2xl transform rotate-6 opacity-50 border border-white/5"></div>
          <div className="absolute inset-0 bg-[#1A1A1A] rounded-2xl p-4 shadow-2xl border border-white/10 flex flex-col items-center text-center transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-[#333] mb-3 overflow-hidden border border-white/10">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=code"
                alt="Avatar"
              />
            </div>
            <div className="font-bold text-white">Arpan</div>
            <div className="text-xs text-gray-500 mb-3">Full Stack Dev</div>
            <div className="flex gap-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
              <span className="w-2 h-2 rounded-full bg-white/40"></span>
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
            </div>
            <div className="mt-auto flex gap-4 w-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#222] text-gray-500 flex items-center justify-center text-lg border border-white/5 hover:bg-[#333] hover:text-white transition-colors">
                ✕
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg shadow-lg hover:bg-gray-200 transition-colors">
                ♥
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const LiveCollaboration = () => (
    <div className="md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group overflow-hidden">
      <h3 className="text-xl font-bold text-white mb-2">Live Collaboration</h3>
      <p className="text-sm text-gray-400 mb-6">
        Code editor and chat in one place.
      </p>

      {/* Code Editor Visual */}
      <div className="bg-[#0A0A0A] rounded-xl border border-white/5 p-4 font-mono text-xs relative overflow-hidden">
        <div className="flex gap-4">
          <div className="text-gray-700 select-none">
            1<br />2<br />3<br />4
          </div>
          <div className="text-gray-300">
            <span className="text-purple-400">function</span>{" "}
            <span className="text-yellow-200">collaborate</span>() {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-purple-400">const</span> team ={" "}
            <span className="text-green-400">"ready"</span>;
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">return</span> team;
            <br />
            {"}"}
          </div>
        </div>
        <div className="absolute right-4 top-4 bg-[#222] text-white px-3 py-2 rounded-lg rounded-tr-none text-[10px] border border-white/10 shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          Looks good! Merging now.
        </div>
      </div>
    </div>
  );
  const CommunityProject = () => (
    <div className="bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group">
      <h3 className="text-xl font-bold text-white mb-2">Community Projects</h3>
      <p className="text-sm text-gray-400 mb-6">Showcase your best work.</p>
      <div className="flex gap-3 overflow-hidden">
        <div className="w-24 h-16 bg-[#222] rounded-lg border border-white/5 flex-shrink-0"></div>
        <div className="w-24 h-16 bg-[#333] rounded-lg border border-white/10 flex-shrink-0"></div>
        <div className="w-24 h-16 bg-[#222] rounded-lg border border-white/5 flex-shrink-0"></div>
      </div>
    </div>
  );
  const SkillGrowth = () => (
    <div className="bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group">
      <h3 className="text-xl font-bold text-white mb-2">Skill Growth</h3>
      <p className="text-sm text-gray-400 mb-6">Track your progress.</p>
      <div className="relative h-20 flex items-end gap-2">
        <div className="w-1/5 bg-[#222] h-[40%] rounded-t-sm"></div>
        <div className="w-1/5 bg-[#222] h-[60%] rounded-t-sm"></div>
        <div className="w-1/5 bg-[#222] h-[50%] rounded-t-sm"></div>
        <div className="w-1/5 bg-white h-[80%] rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
        <div className="w-1/5 bg-[#222] h-[70%] rounded-t-sm"></div>

        <div className="absolute top-0 right-0 bg-[#222] text-[10px] px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-white">
          <i className="ri-trophy-line text-yellow-500"></i> Top 10%
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section id="features" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Unlock Your Potential
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
              Syntax Social helps developers build networks, share projects, and
              level up their skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <MatchingCard />

            {/* Right Column Grid */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <LiveCollaboration />
              <CommunityProject />
              <SkillGrowth />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
