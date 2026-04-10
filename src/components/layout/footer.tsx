import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";
import { fadeUp, staggerContainer, baseViewport } from "@/lib/animations";
import BackgroundParticles from "@/components/ui/background-particles";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
    // Scroll to top after navigation
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer id="footer" className="bg-[#050a09] border-t border-emerald-900/30 overflow-hidden relative group">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 opacity-40">
        <BackgroundParticles />
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Logo & Info */}
          <motion.div variants={fadeUp} className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <motion.img 
                src={logo} 
                alt="WayTree" 
                className="h-8 md:h-10 w-auto" 
                whileHover={{ rotate: 10, scale: 1.1 }}
              />
              <span className="headline-md !mb-0 !text-xl md:!text-2xl tracking-tight text-white">WayTree</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-[280px] text-sm md:text-base">
              AI-powered networking memory system. Built for the modern professional.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
            <h4 className="hook-text !text-xs md:!text-sm !mb-0 opacity-80">Product</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Features", "How it works"].map((item) => (
                <motion.button 
                  key={item}
                  onClick={() => handleNavigate(`/${item.toLowerCase().replace(/ /g, "-")}`)}
                  className="body-md !text-sm md:!text-base text-muted-foreground hover:text-emerald-400 transition-colors text-left w-fit"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
            <h4 className="hook-text !text-xs md:!text-sm !mb-0 opacity-80">Company</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <motion.button 
                onClick={() => handleNavigate("/about")}
                className="body-md !text-sm md:!text-base text-muted-foreground hover:text-emerald-400 transition-colors text-left w-fit"
                whileHover={{ x: 5 }}
              >
                About
              </motion.button>
              <motion.button 
                onClick={() => handleNavigate("/contact")}
                className="body-md !text-sm md:!text-base text-muted-foreground hover:text-emerald-400 transition-colors text-left w-fit"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
            <h4 className="hook-text !text-xs md:!text-sm !mb-0 opacity-80">Legal</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Privacy", "Terms"].map((item) => (
                <motion.button 
                  key={item}
                  onClick={() => handleNavigate(`/${item.toLowerCase()}`)}
                  className="body-md !text-sm md:!text-base text-muted-foreground hover:text-emerald-400 transition-colors text-left w-fit"
                  whileHover={{ x: 5 }}
                >
                  {item === "Privacy" ? "Privacy Policy" : "Terms & Conditions"}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border/10 flex justify-center items-center body-sm"
        >
          <p className="text-center">© {new Date().getFullYear()} WayTree. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
