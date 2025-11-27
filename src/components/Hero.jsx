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
  const HeroButtons = () => (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
      <Link
        to="/signup"
        className="px-8 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-200 transition-all min-w-[160px]"
      >
        Start for free
      </Link>
      <Link
        to="/landing"
        className="px-8 py-3 text-sm font-semibold bg-[#111] text-white border border-white/10 rounded-xl hover:bg-[#222] transition-all min-w-[160px]"
      >
        Get Demo
      </Link>
    </div>
  );
  const DashBoard = () => (
    <div className="relative max-w-5xl mx-auto">
      {/* Glow behind dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/[0.05] blur-[80px] -z-10 rounded-full"></div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden">
        <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-4 h-4 border border-white/20 rounded rotate-45"></div>
              <span className="text-sm font-medium text-white">
                Syntax Social
              </span>
            </div>
            <div className="flex-1 max-w-md mx-8">
              <div className="bg-[#000] border border-white/10 rounded-lg px-4 py-1.5 flex items-center justify-between text-xs text-gray-500">
                <span>Search</span>
                <i className="ri-search-line"></i>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">
                Jump to: <span className="text-white">Feed</span>
              </span>
              <button className="bg-[#222] hover:bg-[#333] text-white text-xs px-3 py-1.5 rounded-lg transition-colors border border-white/10">
                Create +
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-64 bg-[#0A0A0A] border-r border-white/5 p-4 hidden md:flex flex-col gap-1">
              {[
                { icon: "ri-home-5-line", label: "Home", active: true },
                { icon: "ri-group-line", label: "Connections", active: false },
                { icon: "ri-inbox-line", label: "Inbox", active: false },
                { icon: "ri-time-line", label: "Activity", active: false },
                {
                  icon: "ri-file-list-line",
                  label: "Projects",
                  active: false,
                },
                {
                  icon: "ri-settings-4-line",
                  label: "Settings",
                  active: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    item.active
                      ? "bg-[#222] text-white border border-white/5"
                      : "text-gray-500 hover:text-gray-300 hover:bg-[#151515]"
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-[#0F0F0F] p-8 overflow-hidden">
              <h2 className="text-xl font-bold text-white mb-6">Overview</h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  {
                    val: "20",
                    label: "New Projects",
                    icon: "ri-folder-add-line",
                    color: "text-red-400",
                  },
                  {
                    val: "48",
                    label: "On Progress",
                    icon: "ri-loader-4-line",
                    color: "text-green-400",
                  },
                  {
                    val: "117",
                    label: "Completed",
                    icon: "ri-check-double-line",
                    color: "text-blue-400",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#151515] border border-white/5 p-4 rounded-xl relative group hover:border-white/10 transition-colors"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.val}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <i className={`${stat.icon} ${stat.color}`}></i>
                      {stat.label}
                    </div>
                    <button className="absolute top-4 right-4 w-6 h-6 rounded bg-[#222] text-gray-400 flex items-center justify-center text-xs hover:text-white hover:bg-[#333] transition-colors">
                      +
                    </button>
                  </div>
                ))}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    title: "Frontend Architecture",
                    date: "Wed, 12 Jan",
                    tag: "React",
                    progress: 13,
                  },
                  {
                    title: "Backend API Design",
                    date: "Thu, 14 Feb",
                    tag: "Node.js",
                    progress: 80,
                  },
                  {
                    title: "UI/UX Design System",
                    date: "Fri, 28 Mar",
                    tag: "Figma",
                    progress: 100,
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-[#151515] border border-white/5 p-5 rounded-xl flex flex-col gap-4 hover:border-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {card.title}
                      </h3>
                      <i className="ri-more-2-fill text-gray-500"></i>
                    </div>
                    <div className="text-[10px] text-gray-500 flex items-center gap-1">
                      <i className="ri-time-line"></i> {card.date}
                    </div>
                    <div className="mt-auto">
                      <span className="px-2 py-1 bg-[#222] rounded text-[10px] text-gray-400 border border-white/5">
                        {card.tag}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-500">
                        <span>Progress</span>
                        <span>{card.progress}%</span>
                      </div>
                      <div className="h-1 w-full bg-[#222] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white/20 rounded-full"
                          style={{ width: `${card.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <header className="relative z-10 pt-48 pb-32 text-center container mx-auto px-6">
        <MainText />
        <HeroButtons />
        <DashBoard />
      </header>
    </div>
  );
};

export default Hero;
