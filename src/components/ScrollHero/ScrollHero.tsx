"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./ScrollHero.module.css";

const TOTAL_FRAMES = 361;
const FRAME_PREFIX = "/frames/burger/frame_";
const FRAME_SUFFIX = ".jpg";

const BURGER_LABELS = [
  {
    title: "Artisan Brioche",
    desc: "Toasted with clarified butter and dusted with edible gold.",
    start: 0.15,
    end: 0.3,
    style: { top: "15%", left: "10%" }
  },
  {
    title: "Truffle Aioli",
    desc: "Hand-foraged black truffles, aged for 30 days.",
    start: 0.4,
    end: 0.55,
    style: { top: "40%", right: "10%", textAlign: "right" as const }
  },
  {
    title: "A5 Wagyu Smash",
    desc: "Pure A5 Wagyu, ground fresh daily for a perfect crust.",
    start: 0.65,
    end: 0.85,
    style: { bottom: "25%", left: "10%" }
  }
];

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedFrames, setLoadedFrames] = useState(0);
  
  const scrollProgress = useMotionValue(0);
  const [reactProgress, setReactProgress] = useState(0);

  // Portal Morph Transforms (Active only at the very end of the scroll)
  const scale = useTransform(scrollProgress, [0.85, 1], [1, 0.6]);
  const borderRadius = useTransform(scrollProgress, [0.85, 1], ["0px", "100px"]);
  const y = useTransform(scrollProgress, [0.95, 1], ["0%", "10%"]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(4, "0");
      img.src = `${FRAME_PREFIX}${paddedIndex}${FRAME_SUFFIX}`;
      img.onload = () => {
        loadedCount++;
        setLoadedFrames(loadedCount);
        // Draw first frame when it loads
        if (i === 1) {
          drawFrame(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = img.width || 1920;
    canvas.height = img.height || 1080;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // Scroll handler
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current || images.length === 0) return;
        
        const container = containerRef.current;
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const scrollableDistance = height - windowHeight;
        const scrolled = -top;
        
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
        scrollProgress.set(progress);
        setReactProgress(progress);
        
        const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
        
        if (images[frameIndex] && images[frameIndex].complete) {
          drawFrame(images[frameIndex]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [images, scrollProgress]);

  const getLabelOpacity = (progress: number, start: number, end: number) => {
    const fadeDuration = 0.05;
    if (progress < start - fadeDuration || progress > end + fadeDuration) return 0;
    if (progress >= start && progress <= end) return 1;
    if (progress < start) return (progress - (start - fadeDuration)) / fadeDuration;
    if (progress > end) return 1 - ((progress - end) / fadeDuration);
    return 0;
  };

  return (
    <div className={styles.heroContainer} ref={containerRef}>
      <div className={styles.stickyContainer}>
        <motion.div 
          style={{ 
            width: "100%", 
            height: "100%", 
            position: "relative",
            scale,
            borderRadius,
            y,
            overflow: "hidden"
          }}
        >
          <canvas ref={canvasRef} className={styles.canvas} width="1920" height="1080" suppressHydrationWarning />
          
          <div className={styles.overlay} style={{ opacity: Math.max(0, 1 - reactProgress * 1.5) }}></div>
          
          {BURGER_LABELS.map((label, index) => {
            const opacity = getLabelOpacity(reactProgress, label.start, label.end);
            return (
              <div 
                key={index} 
                className={styles.dynamicLabel}
                style={{
                  ...label.style,
                  opacity,
                  transform: `translateY(${(1 - opacity) * 20}px)`
                }}
              >
                <h3 className={styles.labelTitle}>{label.title}</h3>
                <p className={styles.labelDesc}>{label.desc}</p>
              </div>
            );
          })}
          
          <div 
            className={styles.content}
            style={{
              opacity: Math.max(0, 1 - reactProgress * 3), // Fades out quicker
            }}
          >
            <div className={styles.scrollIndicator}>
              <span>Scroll to Taste</span>
              <div className={styles.scrollLine}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
