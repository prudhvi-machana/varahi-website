"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0.15 }
      );
      observer.observe(footer);
    }, 1200);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/*
        Single wrapper slides the entire header (topbar + navbar) up together.
        No JS-measured marginTop needed — both children are in normal flow.
      */}
      <motion.div
        animate={{ y: footerVisible ? -topBarHeight : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        {/* Top Bar — now in normal flow, no absolute */}
        <div
          ref={topBarRef}
          className="w-full bg-gray-900 text-white text-xs sm:text-sm"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-1 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center sm:text-left">
              <span>+91 9701879791</span>
              <span>varahiautomations@gmail.com</span>
            </div>
            <span>Mon–Sat 8:00–20:00</span>
          </div>
        </div>

        {/* Navbar — backdrop-blur replaced with solid bg to avoid paint cost */}
        <div className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.jpg"
                alt="Varahi Logo"
                width={50}
                height={50}
                priority
                className="w-auto h-auto"
              />
              <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#333]">
                VARAHI AUTOMATIONS
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name === "Contact Us" ? (
                    <button
                      onClick={scrollToContact}
                      className="text-gray-700 font-medium hover:text-red-500"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-red-500"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <motion.svg
                animate={{ rotate: menuOpen ? 90 : 0 }}
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-t overflow-hidden"
              >
                <div className="px-4 py-4 space-y-4">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item.name === "Contact Us" ? (
                        <button
                          onClick={scrollToContact}
                          className="text-gray-800 font-medium"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-800 font-medium"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
}