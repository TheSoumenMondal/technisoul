"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconLayoutDashboard,
  IconShoppingCart,
  IconUserCheck,
  IconSchool,
} from "@tabler/icons-react";
import { SparklesText } from "../magicui/sparkles-text";

const solutions = [
  {
    title: "eCommerce App & Website",
    description:
      "Custom-built online stores with payment integration, admin panel, and mobile-first UX design.",
    icon: <IconShoppingCart className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Online Learning Platform",
    description:
      "Feature-rich portals for courses, video uploads, tests, and student tracking.",
    icon: <IconSchool className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Hiring & Recruitment Systems",
    description:
      "Resume tracking, automated shortlisting, candidate pipelines — built for staffing firms.",
    icon: <IconUserCheck className="h-6 w-6 text-yellow-600" />,
  },
  {
    title: "Admin Dashboards & CRMs",
    description:
      "Scalable internal tools to manage leads, sales, employees, and more.",
    icon: <IconLayoutDashboard className="h-6 w-6 text-purple-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ThirdPage = () => {
  return (
    <motion.section
      id="blog"
      className="w-full min-h-screen py-20 px-4 md:px-12 bg-white dark:bg-neutral-900 text-blue-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-16">
        <SparklesText className="text-4xl font-bold tracking-tight text-blue-800 dark:text-blue-300">
          What We Can Build For You
        </SparklesText>
        <p className="mt-4 text-sm text-blue-600 dark:text-blue-200 max-w-2xl mx-auto">
          Technisoul crafts modern digital solutions tailored for startups,
          SMEs, and growing enterprises.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 relative z-10">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants as any}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-white dark:bg-neutral-800 border border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div>{item.icon}</div>
                  <CardTitle className="text-blue-800 dark:text-blue-200">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">
            Have an idea in mind?
          </h3>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ThirdPage;
