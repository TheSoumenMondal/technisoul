"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";

export function CareersPage() {
  const testimonials = [
    {
      quote:
        "Join our mobile team to build intuitive, high-performance Android apps used by thousands. Kotlin or Flutter experience preferred.",
      name: "Android Developer",
      designation: "Full-time | Remote",
      src: "/andde.jpg",
    },
    {
      quote:
        "Design and develop modern websites and eCommerce platforms. WordPress, Tailwind, and basic SEO skills will be a bonus.",
      name: "WordPress & Web Developer",
      designation: "Full-time | Hybrid",
      src: "/wordpress.jpg",
    },
    {
      quote:
        "Execute SEO strategies, perform audits, and help clients improve their digital visibility. Great learning opportunity!",
      name: "SEO Executive",
      designation: "Internship | Remote",
      src: "/seo.jpg",
    },
    {
      quote:
        "Help us recruit top tech and non-tech talent for exciting companies. Strong communication and sourcing skills are a must.",
      name: "HR Recruiter",
      designation: "Full-time | Kolkata, India",
      src: "/sdev.jpg",
    },
    {
      quote:
        "Identify new business opportunities, build client relationships, and drive revenue. Experience in IT/digital sales preferred.",
      name: "Business Development Manager",
      designation: "Full-time | Hybrid",
      src: "/bus.jpg",
    },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-screen px-6 py-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold ">We're Hiring!</h1>
        <p className="text-lg ">
          At Technisoul, we’re building a team of passionate problem-solvers,
          designers, and builders. Explore open positions below and be part of
          our fast-growing journey.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
