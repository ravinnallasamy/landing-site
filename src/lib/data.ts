import ceoImage from "@/assets/images/ceo.jpg";
import ctoImage from "@/assets/images/cto.jpg";
import { TeamMember } from "@/components/ui/team-card";

export const teamMembers: TeamMember[] = [
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

export const pricingPlans = [
  {
    title: "Basic",
    price: "Free",
    description: "Perfect for getting started with AI networking.",
    features: ["50 Connections/mo", "Basic AI Insights", "Standard Support"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    description: "Advanced tools for active networkers.",
    features: ["Unlimited Connections", "Advanced AI Predictor", "Priority Support", "Custom Branding"],
    isPopular: true,
  },
];
