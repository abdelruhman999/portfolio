'use client';
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

interface BallProps {
  imgUrl: string;
  isMobile: boolean;
}

const Ball = ({ imgUrl, isMobile }: BallProps) => {
  const [colorMap, bumpMap, decal] = useTexture([
    '/textures/moon/moon_bump.jpg',      // خريطة سطح القمر
    '/textures/moon/moon_bump.jpg',  // ملمس القمر
    imgUrl                           // الأيقونة اللي هتلزق
  ]);

  return (
    <Float
      speed={isMobile ? 0.3 : 1}
      rotationIntensity={isMobile ? 0.4 : 0.8}
      floatIntensity={isMobile ? 0.6 : 1.2}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} intensity={2} />
      
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
          roughness={1}
          metalness={0}
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.5}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Canvas
      className=""
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
