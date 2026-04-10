import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export const ScrollCard = ({ children, className, ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
