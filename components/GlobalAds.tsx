"use client";

import { usePathname } from "next/navigation";
import AdSenseBlock from "@/components/AdSenseBlock";

const hideAdsOn = new Set([
  "/privacy-policy",
  "/terms",
]);

export default function GlobalAds() {
  const pathname = usePathname();

  if (hideAdsOn.has(pathname)) {
    return null;
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
      <AdSenseBlock adSlot="1667262541" adFormat="auto" />
    </div>
  );
}