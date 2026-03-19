import type { Metadata } from "next";

export const metadata = {
  title: "Contact",
  description: "Contact Textify Lab",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Contact</h1>
      <p>
        If you have any questions, suggestions, or business inquiries, feel free
        to reach out.
      </p>
      <p>Email: support@textifylab.com</p>
    </main>
  );
}
