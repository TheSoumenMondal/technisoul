"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.avif",
  "/hero5.avif",
  "/hero6.jpg",
];

const showcaseTexts = [
  "Web Development",
  "Mobile Apps",
  "Digital Marketing",
  "Staffing Solutions",
  "Branding & UI/UX",
  "SEO Services",
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    const showcaseTimer = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setShowcaseIndex((prev) => (prev + 1) % showcaseTexts.length);
        setShowText(true);
      }, 100); 
    }, 1000);

    return () => {
      clearInterval(bgTimer);
      clearInterval(showcaseTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgrounds[bgIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={backgrounds[bgIndex]}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Central Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="flex flex-col items-center justify-center text-white space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Technisoul
          </h1>

          {/* Animated Showcase Text */}
          <div className="h-10">
            <AnimatePresence mode="wait">
              {showText && (
                <motion.p
                  key={showcaseTexts[showcaseIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg md:text-xl text-center text-white/80"
                >
                  {showcaseTexts[showcaseIndex]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
