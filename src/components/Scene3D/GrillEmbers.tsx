"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function GrillEmbers() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Simulate slow rising heat updraft by moving the entire group
      groupRef.current.position.y = (state.clock.elapsedTime * 0.2) % 2;
      // Gentle swirling effect
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Intense Core Embers (Fast rising, orange/red) */}
      <Sparkles 
        count={200} 
        scale={10} 
        size={3} 
        speed={0.8} 
        opacity={0.8} 
        color="#ff4500" // OrangeRed
        position={[0, -2, 0]}
      />
      
      {/* Gold Flakes / Sparks (Smaller, faster, scattered) */}
      <Sparkles 
        count={150} 
        scale={15} 
        size={1.5} 
        speed={1.2} 
        opacity={1} 
        color="#ffd700" // Gold
        position={[0, -3, 0]}
      />

      {/* Ambient Heat (Larger, faded, slow moving dark red) */}
      <Sparkles 
        count={100} 
        scale={12} 
        size={5} 
        speed={0.2} 
        opacity={0.3} 
        color="#8b0000" // DarkRed
        position={[0, -1, 0]}
      />
      
      {/* Deep Core Heat (Very dense, bottom center) */}
      <Sparkles 
        count={50} 
        scale={5} 
        size={4} 
        speed={0.1} 
        opacity={0.9} 
        color="#ff8c00" // DarkOrange
        position={[0, -4, 0]}
      />
    </group>
  );
}
