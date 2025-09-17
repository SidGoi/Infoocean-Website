"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ✅ Central Nav Items Config
const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Service", path: "/service" },
  { label: "Blog", path: "/blog" },
  { label: "Career", path: "/career" },
  { label: "About us", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 1. Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="z-50 sticky top-2.5 md:top-5">
      <div className="w-full flex items-center justify-between px-4 lg:px-3 py-4 bg-primary rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer space-x-2">
          <Image
            src={"/images/Infoocean-Logo.png"}
            height={1000}
            width={1000}
            className="h-4 w-auto px-4 z-50"
            alt="Infoocean-Logo"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-light font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-secondary transition-colors duration-300 ${
                  pathname === item.path
                    ? "text-secondary"
                    : "text-light hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-secondary text-primary font-semibold shadow hover:bg-secondary transition"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Animated 3 lines menu */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* 2. Mobile Menu Dropdown with correct positioning */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-primary flex items-center justify-center flex-col transition-transform duration-500 ease-in-out lg:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-light text-xl font-medium focus:text-secondary">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="hover:text-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href="/contact"
            className="block text-center px-5 py-2 rounded-full bg-secondary text-primary font-semibold shadow hover:bg-secondary transition"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
