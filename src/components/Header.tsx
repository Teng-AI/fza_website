"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/team", label: "TEAM" },
    { href: "/support-us", label: "SUPPORT US" },
  ];

  const conferenceLinks = [
    { href: "/conference/2024", label: "2024" },
    { href: "/conference/2023", label: "2023" },
    { href: "https://www.facebook.com/events/1004654596871924", label: "2022", external: true },
  ];

  return (
    <header className="bg-cream sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Fuzhou America"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Conference Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsConferenceOpen(true)}
              onMouseLeave={() => setIsConferenceOpen(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium tracking-wide text-sm flex items-center gap-1">
                CONFERENCE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isConferenceOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-[120px]">
                  <div className="bg-white shadow-lg rounded-md py-2">
                  {conferenceLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-foreground hover:bg-cream hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-foreground hover:bg-cream hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide text-sm"
            >
              CONTACT
            </Link>

            <a
              href="https://bit.ly/sitebuttons"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-white px-5 py-2 rounded hover:bg-foreground/80 transition-colors font-medium tracking-wide text-sm"
            >
              JOIN OUR COMMUNITY
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Conference Section */}
              <div className="py-2">
                <span className="text-foreground font-medium">CONFERENCE</span>
                <div className="pl-4 mt-2 space-y-2">
                  {conferenceLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground/70 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-foreground/70 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>

              <a
                href="https://bit.ly/sitebuttons"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-white px-6 py-2 rounded hover:bg-foreground/80 transition-colors font-medium text-center mt-2"
              >
                JOIN OUR COMMUNITY
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
