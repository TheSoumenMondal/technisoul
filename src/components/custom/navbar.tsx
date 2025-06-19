"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "w-full px-4 h-16 md:px-10 flex items-center justify-between fixed top-0 z-50 transition-colors duration-300",
        isTop ? " text-background" : "bg-background text-foreground shadow"
      )}
    >
      <div className="text-xl font-bold tracking-wide">Technisoul</div>

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
        <button className="text-2xl">&#9776;</button>
      </div>
    </header>
  );
};

export default Navbar;
