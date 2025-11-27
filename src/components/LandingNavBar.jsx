
import { Link} from "react-router";

const LandingNavBar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black text-xs font-bold transform rotate-3">
            S
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
