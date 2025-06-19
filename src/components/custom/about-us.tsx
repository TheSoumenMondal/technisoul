"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutPage = () => {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen px-6 py-24 bg-white text-blue-950 dark:bg-neutral-900 dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="text-center mb-16">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight mb-4 text-blue-800 dark:text-blue-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Technisoul
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-blue-700 dark:text-blue-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are your one-stop partner for software, staffing, and digital
          marketing solutions — delivering ROI-driven results since day one.
        </motion.p>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto mb-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              content:
                "To empower businesses with scalable digital solutions — combining quality, speed, and measurable impact.",
            },
            {
              title: "Our Vision",
              content:
                "To become India’s most trusted partner for software development, recruitment, and digital growth by 2030.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants as any}
            >
              <Card className="bg-white shadow-md dark:bg-neutral-800 border border-blue-100 dark:border-blue-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-900 dark:text-blue-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-blue-700 dark:text-blue-200">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            className="md:col-span-2"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants as any}
          >
            <Card className="bg-white shadow-md dark:bg-neutral-800 border border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-900 dark:text-blue-300">
                  Why Clients Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-base text-blue-700 dark:text-blue-200">
                  <li>Customer-first approach with transparent pricing</li>
                  <li>Experienced & certified team across domains</li>
                  <li>
                    End-to-end support — from hiring to high-conversion websites
                  </li>
                  <li>Fast delivery timelines and post-launch support</li>
                  <li>Affordable pricing with premium quality results</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-1">
          Technisoul — Shaping Brands, Bridging Futures.
        </p>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Your trusted partner in the digital era.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
