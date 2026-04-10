import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "/logo.svg";
import { Button } from "@/components/ui/button";
import { AppStoreLink } from "@/components/ui/app-store-link";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // Change colors when scrolling past the dark hero section
        setScrolled(window.scrollY > window.innerHeight - 100);
      } else {
        // Always show the non-dark nav on other pages, but add shadow on scroll
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Evaluate immediately initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavigation = (to: string) => {
    // Always scroll to top, even if navigating to same page
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    navigate(to);
    setOpen(false);
  };

  const isDarkArea = isHomePage && !scrolled;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-6xl">
      <div className={`
        backdrop-blur-xl border
        rounded-full px-6 py-3
        transition-all duration-300
        ${isDarkArea 
          ? 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-white/40 border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
        }
      `}>
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <img src={logo} alt="WayTree" className="h-10 w-10 transition-transform group-hover:scale-105" />
          <span className={`headline-md !mb-0 !text-xl transition-colors ${isDarkArea ? 'text-white' : 'text-gray-900'} group-hover:text-amber-500`}>WayTree</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`body-md !text-sm transition-all px-4 py-2 rounded-lg 
                  ${isDarkArea 
                    ? `text-white/80 hover:text-white hover:bg-white/10 ${isActive ? 'text-emerald-400 bg-emerald-500/20 shadow-xl shadow-emerald-500/50' : ''}`
                    : `text-gray-700 hover:text-gray-900 hover:bg-white/50 ${isActive ? 'text-emerald-600 bg-emerald-50 shadow-xl shadow-emerald-500/40' : ''}`
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
          
          {/* Get Started Button */}
          <AppStoreLink
            className="bg-amber-500 hover:bg-amber-600 text-white body-md !text-sm !font-semibold rounded-full px-5 py-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 border border-amber-400/50"
          >
            Get Started
          </AppStoreLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors ${isDarkArea ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden mt-4 backdrop-blur-xl border rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)]
              ${isDarkArea 
                ? 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]' 
                : 'bg-white/60 border-white/50'
              }
            `}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`body-md !text-sm transition-all px-4 py-3 rounded-lg block text-left
                      ${isDarkArea 
                        ? `text-white/80 hover:text-white hover:bg-white/10 ${isActive ? 'text-emerald-400 bg-emerald-500/20 shadow-xl shadow-emerald-500/50' : ''}`
                        : `text-gray-700 hover:text-gray-900 hover:bg-white/50 ${isActive ? 'text-emerald-600 bg-emerald-50 shadow-xl shadow-emerald-500/40' : ''}`
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}
              
              {/* Mobile Get Started Button */}
              <div className="pt-4">
                <AppStoreLink
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white body-md !text-sm !font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 border border-amber-400/50"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </AppStoreLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;