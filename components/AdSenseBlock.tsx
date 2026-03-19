"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdSenseBlockProps = {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
};

export default function AdSenseBlock({
  adSlot,
  adFormat = "auto",
  style,
}: AdSenseBlockProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "32px auto",
        textAlign: "center",
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...(adFormat === "rectangle"
            ? { width: "100%", minHeight: 280 }
            : adFormat === "horizontal"
            ? { width: "100%", height: 90 }
            : adFormat === "vertical"
            ? { width: "100%", minHeight: 600 }
            : { display: "block" }),
        }}
        data-ad-client="ca-pub-8170455252781139"
        data-ad-slot={adSlot}
        data-ad-format={adFormat === "auto" ? "auto" : undefined}
        data-full-width-responsive="true"
      />
    </div>
  );
}