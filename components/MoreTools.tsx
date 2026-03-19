"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const toolLinks = [
  { href: "/instagram-font-generator", label: "Instagram Font Generator" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator" },
  { href: "/zalgo-text-generator", label: "Zalgo Text Generator" },
  { href: "/stylish-font-generator", label: "Stylish Font Generator" },
  { href: "/bubble-text-generator", label: "Bubble Text Generator" },
  { href: "/aesthetic-text-generator", label: "Aesthetic Text Generator" },
  { href: "/cute-text-generator", label: "Cute Text Generator" },
  { href: "/discord-text-generator", label: "Discord Text Generator" },
  { href: "/small-caps-text", label: "Small Caps Text" },
  { href: "/glitch-text-generator", label: "Glitch Text Generator" },
];

const generatorPages = new Set(toolLinks.map((item) => item.href));

export default function MoreTools() {
  const pathname = usePathname();

  if (!generatorPages.has(pathname)) {
    return null;
  }

  const filteredLinks = toolLinks.filter((item) => item.href !== pathname);

  return (
    <section
      style={{
        marginTop: 40,
        paddingTop: 24,
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ fontSize: 22, marginBottom: 16 }}>More Tools</h3>
      <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
        {filteredLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}