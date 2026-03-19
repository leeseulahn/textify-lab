import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Textify Lab",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and do not collect personal data unless required
        for improving the service.
      </p>
      <p>
        Third-party vendors, including Google, use cookies to serve ads based on
        users' prior visits to this website.
      </p>
    </main>
  );
}