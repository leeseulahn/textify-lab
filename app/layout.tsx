import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Textify Lab – Fancy Text Generator",
    template: "%s | Textify Lab",
  },

  description:
    "Convert normal text into fancy text styles like Zalgo, bubble, small caps, and more. Copy instantly for Instagram, TikTok, and Discord.",

  keywords: [
    "fancy text generator",
    "zalgo text",
    "bubble text",
    "stylish fonts",
    "instagram fonts",
    "weird text generator",
  ],

  openGraph: {
    title: "Textify Lab – Fancy Text Generator",
    description:
      "Generate stylish and fancy text instantly. Copy and paste for social media.",
    url: "https://yourdomain.com",
    siteName: "Textify Lab",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Textify Lab",
    description: "Fancy text generator for social media",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}