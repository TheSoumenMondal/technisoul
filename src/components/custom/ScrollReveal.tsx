"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); 
  return (
    <motion.div
      ref={ref}
      variants={sectionVariants as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
