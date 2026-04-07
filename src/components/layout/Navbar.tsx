"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { productsMenu } from "@/config/productsMenu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  const desktopMegaRef = useRef<HTMLDivElement>(null);
  const mobileMegaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        desktopMegaRef.current &&
        !desktopMegaRef.current.contains(target) &&
        mobileMegaRef.current &&
        !mobileMegaRef.current.contains(target)
      ) {
        setOpenMega(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-1 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center sm:text-left">
            <span>+91 9701879791</span>
            <span>varahiautomations@gmail.com</span>
          </div>
          <span>Mon–Sat 8:00–20:00</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image src="/logo.jpg" alt="Varahi Logo" width={50} height={50} />
            <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#333]">
              VARAHI AUTOMATIONS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className={item.megaMenu ? undefined : "relative"}
                ref={item.megaMenu ? desktopMegaRef : null}
              >
                {item.megaMenu ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setOpenMega(openMega === item.name ? null : item.name)
                    }
                    className="flex items-center gap-1 text-gray-700 font-medium hover:text-red-500"
                  >
                    {item.name}
                    <motion.svg
                      animate={{ rotate: openMega === item.name ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </motion.button>
                ) : (
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-red-500"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.megaMenu && openMega === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[min(95vw,900px)] bg-white shadow-xl border border-t-2 border-t-blue-800 p-6 sm:p-8 z-50"
                    >
                      <h3 className="font-black mb-6 text-lg text-[#333]">
                        VARAHI PRODUCTS
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {productsMenu.map((product) => (
                          <motion.div
                            key={product.name}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              href={product.href}
                              className="flex items-center gap-4 hover:text-red-500"
                            >
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={40}
                                height={40}
                              />
                              <span>{product.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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

        {/* Mobile Menu */}
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
                    <Link
                      href={item.href}
                      className="text-gray-800 font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}