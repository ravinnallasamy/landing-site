import { LegalPage } from "@/components/layout/legal-page";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: 'By accessing and using WayTree ("the Service"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you may not access or use our Service.'
    },
    {
      title: "Use of Service",
      content: "You must use the Service in compliance with all applicable laws and regulations."
    }
  ];

  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated={new Date().toLocaleDateString()}
      sections={sections}
    />
  );
};

export default TermsAndConditions;
