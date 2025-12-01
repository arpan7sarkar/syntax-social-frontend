import React from "react";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className="py-12 text-center text-gray-600 text-sm relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
         <Link to="/feed" className="flex items-center gap-2 group">
          <div className="w-5 h-5 border border-white/20 rounded rotate-45 bg-white flex items-center justify-center overflow-hidden group-hover:rotate-0 transition-all duration-300">
            <img
              src="https://imgs.search.brave.com/cZeya5FVG8Ts7RD_KZCZJu36wcTJWSxFU53F-dQB8Ms/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9jb25uZWN0/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/Nzc5MDk5LnBuZz9m/PXdlYnAmdz0xMjg"
              alt="Logo"
              className="w-full h-full object-cover -rotate-45 group-hover:rotate-0 transition-all duration-300"
            />
          </div>
          <span className="text-sm font-bold tracking-wide text-white group-hover:text-gray-300 transition-colors">
            Syntax Social
          </span>
        </Link> 
          <p>
            © {new Date().getFullYear()} Syntax Social. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://x.com/arpan7sarkar"
              rel="noopener noreferrer"
              aria-label="Visit Arpan Sarkar on LinkedIn"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arpan7sarkar/"
              rel="noopener noreferrer"
              aria-label="Visit Arpan Sarkar on LinkedIn"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/arpan7sarkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arpan Sarkar on LinkedIn"
              className="hover:text-white transition-colors"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
