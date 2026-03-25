"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-transparent">
      <div className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium tracking-wider transition-colors hover:text-gold ${
              pathname === link.href ? "text-white" : "text-white/70"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/apply"
        className="text-sm font-medium tracking-wider text-gold hover:text-gold-light transition-colors flex items-center gap-1"
      >
        <span>→</span> Register
      </Link>
    </nav>
  );
}
