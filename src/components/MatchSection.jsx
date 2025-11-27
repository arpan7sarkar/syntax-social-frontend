import React from "react";

const MatchSection = () => {
  return (
    <>
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Developer Match
          </h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto">
            Swipe to connect with developers who share your stack and interests.
          </p>

          <div className="relative w-full max-w-sm mx-auto h-[550px] flex items-center justify-center">

            <div className="absolute w-[340px] h-[500px] bg-[#1a1a1a] rounded-[32px] transform -rotate-12 -translate-x-12 opacity-40 border border-white/5"></div>
            <div className="absolute w-[340px] h-[500px] bg-[#1a1a1a] rounded-[32px] transform -rotate-6 -translate-x-6 opacity-70 border border-white/5"></div>
            <div className="absolute w-[340px] h-[500px] bg-[#1a1a1a] rounded-[32px] transform rotate-6 translate-x-6 opacity-40 border border-white/5"></div>
            <div className="absolute w-[340px] h-[500px] bg-[#1a1a1a] rounded-[32px] transform rotate-12 translate-x-12 opacity-20 border border-white/5"></div>

            <div className="relative w-[340px] h-[500px] bg-[#111] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10">
              {/* Image Section (60%) */}
              <div className="h-[60%] relative">
                <img
                  src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sias profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Content Section (40%) */}
              <div className="h-[40%] bg-[#111] p-6 flex flex-col relative -mt-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Alex, 24</h3>
                    <p className="text-gray-400 text-sm font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                  <i className="ri-macbook-line text-2xl text-gray-600"></i>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-3 mb-4">
                  <span className="px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs text-gray-300 border border-white/5 flex items-center gap-1.5">
                    React
                  </span>
                  <span className="px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs text-gray-300 border border-white/5 flex items-center gap-1.5">
                    Node.js
                  </span>
                  <span className="px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs text-gray-300 border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    Python
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex justify-center gap-6 items-center">
                  <button className="w-14 h-14 rounded-full bg-[#1A1A1A] text-gray-400 text-xl flex items-center justify-center hover:bg-[#222] hover:text-white transition-all border border-white/5 group">
                    <i className="ri-close-line group-hover:scale-110 transition-transform"></i>
                  </button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-400 to-gray-600 text-white text-2xl flex items-center justify-center shadow-lg  hover:scale-105 transition-all">
                    <i className="ri-heart-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MatchSection;
