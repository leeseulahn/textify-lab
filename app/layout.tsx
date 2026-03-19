import type { Metadata } from "next";
import "./globals.css";
import MoreTools from "@/components/MoreTools";
import GlobalAds from "@/components/GlobalAds";

export const metadata: Metadata = {
  metadataBase: new URL("https://textify-lab.vercel.app/"),

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

  verification: {
    google: "UI4gjpct9CkHk5SAEn2Dyk1RaqgtAtGY36Dy6vPKr-4",
  },

  openGraph: {
    title: "Textify Lab – Fancy Text Generator",
    description:
      "Generate stylish and fancy text instantly. Copy and paste for social media.",
    url: "https://textify-lab.vercel.app/",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8170455252781139"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <GlobalAds />
        <MoreTools />
      </body>
    </html>
  );
}