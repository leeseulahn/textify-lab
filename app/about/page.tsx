import type { Metadata } from "next";

export const metadata = {
  title: "About",
  description: "About Textify Lab",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <h1>About</h1>
      <p>
        Textify Lab is a simple web app for generating fancy text styles like
        Zalgo, bubble text, small caps, and more.
      </p>
    </main>
  );
}
