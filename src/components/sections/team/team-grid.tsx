import { motion } from "framer-motion";
import ceoImage from "@/assets/images/ceo.jpg";
import ctoImage from "@/assets/images/cto.jpg";
const teamMembers = [
  {
    name: "Nagarajan",
    role: "Founder & CEO",
    image: ceoImage,
    description: "Driving the vision behind WayTree, Nagarajan focuses on building systems that solve real-world business problems with precision and scalability.",
    focusAreas: ["AI Strategy", "ERP Systems", "Global Expansion"],
  },
  {
    name: "Tamilarasu",
    role: "Chief Technology Officer",
    image: ctoImage,
    description: "Leading the engineering backbone of WayTree, Tamilarasu builds scalable architectures and integrates advanced AI systems into real-world applications.",
    focusAreas: ["GenAI Integrations", "System Architecture", "Mobile Engineering"],
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background gradient - only for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 opacity-0 dark:opacity-100" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >

        
        <h2 className="headline-lg">
          The minds behind <span className="gradient-text">WayTree</span>.
        </h2>
        
        <p className="body-lg max-w-2xl mx-auto">
          Built by people who understand real-world systems, not just code.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="border border-gray-200 dark:border-green-900/20 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/10 dark:shadow-green-900/10 bg-white dark:bg-gradient-to-br dark:from-[#0B3D2E] dark:to-[#071E16]"
          >
            {/* Image Section */}
            <div className={`relative overflow-hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
              member.name === "Nagarajan" ? "max-h-[384px]" : member.name === "Tamilarasu" ? "max-h-[384px]" : ""
            }`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-auto object-cover ${
                    member.name === "Nagarajan" ? "object-position: center top" : 
                    member.name === "Tamilarasu" ? "object-position: center bottom" : ""
                  }`}
                  style={
                    member.name === "Nagarajan" ? { objectPosition: 'center top' } : 
                    member.name === "Tamilarasu" ? { objectPosition: 'center bottom' } : {}
                  }
                />
              </motion.div>
              
              {/* Name + Role Overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="headline-md !text-primary-accent mb-1 drop-shadow-2xl shadow-black">
                  {member.name}
                </h3>
                <p className="body-sm !text-white/90 drop-shadow-2xl shadow-black font-medium">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <p className="text-gray-700 dark:text-foreground/90 leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Focus Areas Tags */}
              <div className="flex flex-wrap gap-2">
                {member.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-green-600/50 dark:border-accent/50 rounded-full px-3 py-1 text-xs text-green-600 dark:text-accent"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
