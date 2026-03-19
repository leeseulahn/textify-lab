import type { Metadata } from "next";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Textify Lab",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Terms of Service</h1>
      <p>
        By using Textify Lab, you agree to use the service responsibly and not
        for illegal or harmful purposes.
      </p>
    </main>
  );
}
