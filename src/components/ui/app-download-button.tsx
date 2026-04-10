import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { hoverScale, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AppDownloadButtonProps {
  className?: string;
}

export const AppDownloadButton = ({ className }: AppDownloadButtonProps) => {
  return (
    <motion.a
      variants={fadeUp}
      href="https://play.google.com/store/apps/details?id=com.waytree.app"
      target="_blank"
      rel="noopener noreferrer"
      {...hoverScale}
      className={cn(
        "flex items-center px-6 py-3 rounded-full bg-white text-gray-900 shadow-xl hover:shadow-2xl transition-all group",
        className
      )}
    >
      <div className="flex relative items-center mr-8">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative z-10 border border-gray-200 group-hover:bg-gray-200 transition-colors">
          <FaApple className="text-xl" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center absolute left-6 z-0 border border-gray-200 group-hover:bg-gray-200 transition-colors">
          <SiGoogleplay className="text-lg text-emerald-600" />
        </div>
      </div>
      <span className="font-bold">Download App</span>
    </motion.a>
  );
};
