import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-12 text-center text-gray-600 text-sm relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#222] rounded flex items-center justify-center text-white text-[10px] font-bold border border-white/10">
              S
            </div>
            <span className="text-gray-400 font-bold">Syntax Social</span>
          </div>
          <p>
            © {new Date().getFullYear()} Syntax Social. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/arpan7sarkar"  target="_blank" className="hover:text-white transition-colors">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/arpan7sarkar/" target="_blank" className="hover:text-white transition-colors">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="https://github.com/arpan7sarkar" target="_blank" className="hover:text-white transition-colors">
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
