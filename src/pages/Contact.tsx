import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Globe, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactDetails = [
    {
      icon: Globe,
      title: "Website",
      detail: "fuzionest.com",
      link: "https://fuzionest.com/",
      description: "Explore our full range of enterprise solutions.",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "contact@fuzionest.com",
      link: "mailto:contact@fuzionest.com",
      description: "Direct line to our core engineering team.",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Coimbatore IT Park",
      description: "Module No. 12 & 18 Ground Floor Elcot SEZ, Coimbatore IT Park Rd",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      formRef.current.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <BaseSection id="contact-hero" className="pt-24 lg:pt-32 pb-4" showParticles>
        <SectionHeading
          tag="CONTACT US"
          title={<>Get in Touch with <span className="gradient-text">Fuzionest</span></>}
          description="Have a specific project in mind? Our team is ready to help you innovate."
        />
      </BaseSection>

      {/* Main Content Grid */}
      <BaseSection id="contact-main" className="py-6 md:py-10 lg:py-12" backgroundVariant="none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Left Column - Contact Form */}
          <ScrollCard animation="fadeUp">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 h-full bg-[#051611] border border-white/10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Subtle accent glow in corner */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[100px] rounded-full" />

              <h2 className="headline-md !text-white !text-xl sm:!text-2xl md:!text-3xl mb-6 md:mb-8 lg:mb-10 border-b border-white/10 pb-4 md:pb-6 font-bold relative z-10">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 pl-1">Full Name</label>
                    <input
                      required
                      name="fullName"
                      type="text"
                      placeholder="e.g. Ram"
                      className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 pl-1">Email Address</label>
                    <input
                      required
                      name="userEmail"
                      type="email"
                      placeholder="Ram@gmail.com"
                      className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 pl-1">Company</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Ram Solutions"
                      className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 pl-1">Inquiry Type</label>
                    <div className="relative">
                      <select
                        name="subject"
                        className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all appearance-none outline-none cursor-pointer"
                      >
                        <option className="bg-[#051611] text-white" value="General Inquiry">General Inquiry</option>
                        <option className="bg-[#051611] text-white" value="Business Partnership">Business Partnership</option>
                        <option className="bg-[#051611] text-white" value="Technical Support">Technical Support</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 pl-1">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Tell us about your networking goals..."
                    className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all outline-none resize-none"
                  />
                </div>

                <input
                  type="hidden"
                  name="submittedAt"
                  value={new Date().toLocaleString()}
                />

                <div className="pt-4">
                  <Button
                    disabled={isSending}
                    type="submit"
                    className="w-full md:w-auto px-10 py-6 md:px-12 md:py-8 text-lg md:text-xl rounded-full bg-amber-500 hover:bg-amber-600 border-none shadow-xl shadow-amber-500/20 group transition-all hover:scale-105 active:scale-95"
                  >
                    {isSending ? (
                      <Loader2 className="animate-spin mr-2" />
                    ) : (
                      <Send className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                {showSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 font-bold mt-4 text-center"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </ScrollCard>

          {/* Right Column - Contact Cards */}
          <StaggerGroup
            className="space-y-4 md:space-y-6 mt-8 lg:mt-0"
          >
            {contactDetails.map((detail) => (
              <ScrollCard key={detail.title} animation="slideRight">
                {detail.link ? (
                  <a 
                    href={detail.link} 
                    target={detail.link.startsWith('http') ? "_blank" : undefined} 
                    rel={detail.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block group"
                  >
                    <GlassCard className="p-6 md:p-8 flex items-start gap-4 md:gap-6 border-emerald-500/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 transition-all duration-500 cursor-pointer h-full" variant="primary">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                        <detail.icon className="text-emerald-600 w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <div className="text-left">
                        <h3 className="headline-md !text-base md:!text-lg !mb-1 text-gray-900">{detail.title}</h3>
                        <span className="text-emerald-600 font-bold text-lg md:text-xl block mb-2 group-hover:underline break-all">
                          {detail.detail}
                        </span>
                        <p className="body-md !text-xs md:!text-sm text-gray-600 leading-relaxed">{detail.description}</p>
                      </div>
                    </GlassCard>
                  </a>
                ) : (
                  <GlassCard className="p-6 md:p-8 flex items-start gap-4 md:gap-6 border-emerald-500/10 transition-all duration-500" variant="primary">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="text-emerald-600 w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="headline-md !text-base md:!text-lg !mb-1 text-gray-900">{detail.title}</h3>
                      <span className="text-emerald-600 font-bold text-lg md:text-xl block mb-2">{detail.detail}</span>
                      <p className="body-md !text-xs md:!text-sm text-gray-600 leading-relaxed">{detail.description}</p>
                    </div>
                  </GlassCard>
                )}
              </ScrollCard>
            ))}


            {/* Fuzionest Branding Social / CTA */}
            <ScrollCard animation="fadeUp" className="pt-6 md:pt-8">
              <div className="bg-gradient-to-br from-[#051611] to-[#0a2a22] p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] border border-emerald-500/20 backdrop-blur-xl shadow-2xl">
                <h4 className="headline-md !text-white !text-lg sm:!text-xl md:!text-2xl mb-3 md:mb-4">Why Fuzionest?</h4>
                <p className="text-white/80 text-sm md:text-base lg:text-lg">
                  We specialize in building deep-tech solutions that transform how people connect. WayTree is a testament to our commitment to AI-driven human interaction and relationship intelligence.
                </p>
              </div>
            </ScrollCard>
          </StaggerGroup>

        </div>
      </BaseSection>
    </div>
  );
};

export default Contact;

