"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Desktop register link */}
        <Link
          href="/apply"
          className="hidden md:flex text-sm font-medium tracking-wider text-gold hover:text-gold-light transition-colors items-center gap-1"
        >
          <span>&rarr;</span> Register
        </Link>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white/80" />
          <span className="block w-6 h-0.5 bg-white/80" />
          <span className="block w-6 h-0.5 bg-white/80" />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-8 text-white/70 hover:text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-medium tracking-wider transition-colors hover:text-gold ${
                pathname === link.href ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 text-xl font-semibold text-gold hover:text-gold-light transition-colors"
          >
            <span>&rarr;</span> Register
          </Link>
        </div>
      )}
    </>
  );
}
