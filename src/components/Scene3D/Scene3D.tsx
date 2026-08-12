"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import styles from "./Scene3D.module.css";
import GrillEmbers from "./GrillEmbers";

export default function Scene3D() {
  return (
    <div className={styles.sceneContainer}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        
        <Suspense fallback={null}>
          <GrillEmbers />
        </Suspense>
      </Canvas>
    </div>
  );
}
