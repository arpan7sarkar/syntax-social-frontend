
import { Link} from "react-router";

const LandingNavBar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/50">
        <div className="flex items-center gap-2">
            
          <div className="w-6 h-6 border border-white/20 rounded rotate-45 bg-white">
              <img src="https://imgs.search.brave.com/cZeya5FVG8Ts7RD_KZCZJu36wcTJWSxFU53F-dQB8Ms/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9jb25uZWN0/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/Nzc5MDk5LnBuZz9m/PXdlYnAmdz0xMjg" alt="" />
              </div>
          <span className="text-sm font-bold tracking-wide">Syntax Social</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#docs" className="hover:text-white transition-colors">
            Documentation
          </a>
        </div>

        <Link
          to="/login"
          className="px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all"
        >
          Start for free
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavBar;
