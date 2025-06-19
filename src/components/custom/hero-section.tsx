import React from "react";
import { Button } from "../ui/button";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full h-screen pt-24 md:pt-0 flex items-center justify-center px-6 select-none">
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Your One-Stop Partner for{" "}
            <span className="text-primary/50">
              Digital, Talent, and Technology
            </span>{" "}
            Solutions
          </h1>

          <p className="text-lg">
            Technisoul is empowering startups, scaling enterprises, and building
            digital success stories across India
          </p>

          {/* Bullet Points */}
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <IconCircleDashedCheck className="text-green-600 w-5 h-5" />{" "}
              ROI-Driven & Scalable Software Solutions
            </li>
            <li className="flex items-center gap-2">
              <IconCircleDashedCheck className="text-green-600 w-5 h-5" />{" "}
              End-to-End Recruitment & Staffing Support
            </li>
            <li className="flex items-center gap-2">
              <IconCircleDashedCheck className="text-green-600 w-5 h-5" />{" "}
              <span className="text-start">SEO-Optimized Websites & Digital Campaigns</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <Button size="sm">Get Started</Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Visual Image */}
        <div className="w-full h-full mt-10 md:mt-0 bg-secondary hidden md:flex justify-end items-end">
          <div className="w-[80%] h-[80%] relative">
            <Image
              src="/software.png" // your image here
              alt="Working with tech"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
