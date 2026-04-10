import { motion } from "framer-motion";
import { fadeUp, textReveal, baseViewport, pageTransition } from "@/lib/animations";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReactNode } from "react";

interface LegalSection {
  title: string;
  content: ReactNode;
  subsections?: { title: string; content: ReactNode }[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const LegalPage = ({ title, lastUpdated, sections }: LegalPageProps) => {
  return (
    <motion.div 
      variants={pageTransition} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <BaseSection id="legal" showParticles backgroundVariant="none" className="pt-32 pb-24">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading
            align="left"
            title={title}
            description={
              <div className="flex items-center gap-4 text-muted-foreground mt-4">
                <div className="h-[1px] w-12 bg-primary/30" />
                <p className="text-sm font-medium text-left">Last Updated: {lastUpdated}</p>
              </div>
            }
            className="mb-16"
          />

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section 
                key={section.title}
                variants={fadeUp} 
                initial="initial" 
                whileInView="animate" 
                viewport={baseViewport}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="content-h2 mb-6">{index + 1}. {section.title}</h2>
                <div className="space-y-6">
                  <div className="content-p">{section.content}</div>
                  
                  {section.subsections?.map((sub, subIndex) => (
                    <div key={sub.title} className="pl-6 border-l-2 border-primary/10">
                      <h3 className="content-h3 mb-3">{index + 1}.{subIndex + 1} {sub.title}</h3>
                      <div className="content-p">{sub.content}</div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </BaseSection>
    </motion.div>
  );
};
