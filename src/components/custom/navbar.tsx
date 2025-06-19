import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full max-w-6xl px-4 h-16 md:px-10 flex items-center bg-transparent backdrop-blur-xl justify-between fixed top-0 z-50 border-b">
      {/* Logo */}
      <div className="text-xl font-bold  tracking-wide">Technisoul</div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-6 text-sm items-center">
        <Link href="/" className="transition">
          Home
        </Link>
        <a href={"#service"} className="relative group">
          <button className=" transition">Services</button>
          <div className="absolute hidden group-hover:block shadow-lg mt-2 rounded-md p-2">
            <Link href="#software" className="block px-4 py-2 ">
              Software Development
            </Link>
            <Link href="#digital" className="block px-4 py-2 ">
              Digital Marketing
            </Link>
            <Link href="#recruitment" className="block px-4 py-2 ">
              Recruitment
            </Link>
            <Link href="#webdev" className="block px-4 py-2 ">
              Website Development
            </Link>
          </div>
        </a>

        <Link href="#about" className="transition">
          About Us
        </Link>

        <Link href="#blog" className=" transition">
          Blog
        </Link>
        <Link href="#careers" className=" transition">
          Careers
        </Link>
        <Link href="#contact" className=" transition">
          Contact
        </Link>
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button className="cursor-pointer" variant={"outline"} size={"sm"}>
          Get a Quote
        </Button>
      </div>

      {/* Mobile Menu Icon (optional toggle logic later) */}
      <div className="md:hidden">
        <button className=" text-2xl">&#9776;</button>
      </div>
    </header>
  );
};

export default Navbar;
