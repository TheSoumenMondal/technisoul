"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "w-full px-4 h-16 md:px-10 flex items-center justify-between fixed top-0 z-50 transition-colors duration-300",
          isTop ? "text-background" : "bg-background text-foreground shadow"
        )}
      >
        <div className="text-xl font-bold tracking-wide flex items-center gap-1">
          <Image src="/logo.jpg" alt="logo" width={25} height={25} />
          <span>Technisoul</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/" className="transition">
            Home
          </Link>
          <Link href="#service" className="transition">
            Services
          </Link>
          <Link href="#blog" className="transition">
            Blog
          </Link>
          <Link href="#about" className="transition">
            About Us
          </Link>
          <Link href="#career" className="transition">
            Careers
          </Link>
          <Link href="#contact" className="transition">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="cursor-pointer" size="sm">
            Get in touch
          </Button>
        </div>

        <div className="md:hidden">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 w-full bg-background text-foreground z-[20000] overflow-hidden shadow"
          >
            <div className="flex flex-col p-4 gap-4 text-base">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#service" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="#blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="#career" onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Button
                className="w-full mt-2"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
