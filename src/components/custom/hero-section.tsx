"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/one.jpg",
    heading: "Your One-Stop Partner for Digital Solutions",
    description: "Empowering startups with cutting-edge apps and seamless UI/UX.",
  },
  {
    image: "/se.jpg",
    heading: "IT Recruitment & Staffing, Simplified",
    description: "We connect talent with opportunity across India’s tech landscape.",
  },
  {
    image: "/two.png",
    heading: "Boost Your Online Presence",
    description: "SEO-optimized websites and campaigns that drive real traffic.",
  },
  {
    image: "/uiux.jpg",
    heading: "Strategic Branding Meets Execution",
    description: "Turn ideas into identity with our creative digital marketing.",
  },
  {
    image: "/sdev.jpg",
    heading: "Scalable Mobile Applications",
    description: "High-performance mobile apps built with Flutter and Kotlin.",
  },
  {
    image: "/wordpress.jpg",
    heading: "Enterprise-Grade Tech Solutions",
    description: "Robust backend, secure APIs, and scalable architecture.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <section className="w-full h-screen relative select-none overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt="Technisoul Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>


      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {currentSlide.heading}
              </h1>
              <p className="text-lg max-w-xl mx-auto mt-2">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
