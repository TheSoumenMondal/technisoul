import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white w-full">
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-blue-100 mb-6">
            Have a project in mind or just want to say hello? Drop us a line and
            let’s build something great together.
          </p>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-white text-black"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white text-black"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-white text-black"
            />
            <Button className="bg-white text-blue-800 hover:bg-blue-100 font-semibold">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Technisoul</h2>
          <p className="text-blue-100 mb-4 max-w-md">
            Technisoul is your partner in software development, recruitment, and digital growth. We deliver modern, scalable, ROI-driven results across industries.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#blog" className="hover:underline">Services</a></li>
                <li><a href="#career" className="hover:underline">Careers</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>Email: info@technisoul.in</li>
                <li>Phone: +91 9876543210</li>
                <li>Location: Kolkata, India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-600 py-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} Technisoul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
