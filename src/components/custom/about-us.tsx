import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div id="about" className="w-full min-h-screen py-20 px-4 md:px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight ">
          About Technisoul
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We are your one-stop partner for software, staffing, and digital marketing solutions — delivering ROI-driven results since day one.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto mb-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-xl blur-xl"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                To empower businesses with scalable digital solutions — combining quality, speed, and measurable impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                To become India’s most trusted partner for software development, recruitment, and digital growth by 2030.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Why Clients Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Customer-first approach with transparent pricing</li>
                <li>Experienced & certified team across domains</li>
                <li>End-to-end support — from hiring to high-conversion websites</li>
                <li>Fast delivery timelines and post-launch support</li>
                <li>Affordable pricing with premium quality results</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-md text-gray-700 dark:text-gray-300 mb-2">
          Technisoul — Shaping Brands, Bridging Futures.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Your trusted partner in the digital era.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;