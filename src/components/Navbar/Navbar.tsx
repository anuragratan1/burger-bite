"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        BURGER BITE
      </Link>
      <div className={styles.navLinks}>
        <Link href="#" className={styles.link}>Menu</Link>
        <Link href="#" className={styles.link}>Locations</Link>
        <Link href="#" className={styles.link}>Our Story</Link>
      </div>
      <div className={styles.rightSide}>
        <Link href="#" className={styles.ctaButton}>Order Now</Link>
      </div>
    </nav>
  );
}
