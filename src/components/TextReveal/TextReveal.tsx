"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import styles from "./TextReveal.module.css";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

const slideUp: Variants = {
  initial: {
    y: "100%",
  },
  open: (delay: number) => ({
    y: "0%",
    transition: { duration: 0.8, delay: delay, ease: [0.33, 1, 0.68, 1] }
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.8 }
  }
};

export default function TextReveal({ children, delay = 0 }: TextRevealProps) {
  return (
    <div className={styles.revealContainer}>
      <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="open"
        viewport={{ once: true, amount: 0.3 }}
        custom={delay}
      >
        {children}
      </motion.div>
    </div>
  );
}
