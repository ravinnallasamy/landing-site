import { LegalPage } from "@/components/layout/legal-page";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "When you use WayTree, we may collect personal information that you voluntarily provide to us.",
      subsections: [
        {
          title: "Personal Information",
          content: (
            <>
              <p>Including but not limited to:</p>
              <ul className="content-list">
                <li>Name and contact information</li>
                <li>Professional details and job title</li>
                <li>Company and organization information</li>
                <li>Networking preferences and interests</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: "To provide and maintain our Service, notify you about changes, and provide customer support."
    }
  ];

  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={new Date().toLocaleDateString()}
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
