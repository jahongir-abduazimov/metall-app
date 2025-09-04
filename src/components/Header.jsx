"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50">
        <Container>
          <nav className="h-[72px] md:h-[84px] flex items-center justify-between">
            <Link
              href={"/"}
              className="text-white rounded-lg px-4 py-2 text-lg font-semibold tracking-wide border border-white/20 hover:border-white transition"
            >
              LOGO
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10 text-white text-[16px] font-medium">
              <Link className="hover:text-white/80 transition" href={"/"}>
                Home
              </Link>
              <Link
                className="hover:text-white/80 transition"
                href={"/privacy-policy"}
              >
                Privacy
              </Link>
              <Link className="hover:text-white/80 transition" href={"/terms"}>
                Terms
              </Link>
              <Link
                className="hover:text-white/80 transition"
                href={"/contact"}
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-white text-black rounded-lg px-5 py-2.5 font-semibold hover:bg-gray-200 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-white/25 text-white hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          <div
            className={`${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } lg:hidden overflow-hidden transition-all duration-300 ease-out`}
          >
            <div className="pb-6 pt-2 border-t border-white/10 text-white">
              <div className="flex flex-col gap-3 text-base font-medium">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/privacy-policy"}
                >
                  Privacy
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/terms"}
                >
                  Terms
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/contact"}
                >
                  Contact
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center bg-white text-black rounded-lg px-4 py-2.5 font-semibold hover:bg-gray-200 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
