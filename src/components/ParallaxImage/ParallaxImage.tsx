"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  offset?: number;
}

export default function ParallaxImage({ children, className, style, offset = 50 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ ...style, overflow: "hidden", position: "relative" }}>
      <motion.div 
        style={{ 
          y, 
          width: "100%", 
          height: "120%", // Make background taller to allow for parallax scrolling without empty space
          position: "absolute", 
          top: "-10%", // Offset to center the taller background
          left: 0,
          zIndex: 0,
          ...(style?.backgroundImage ? { 
            backgroundImage: style.backgroundImage, 
            backgroundSize: style.backgroundSize, 
            backgroundPosition: style.backgroundPosition 
          } : {}) 
        }} 
      />
      {children && <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div>}
    </div>
  );
}
