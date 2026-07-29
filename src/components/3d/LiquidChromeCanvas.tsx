"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

// Celestial Coordinates Wireframe Grid (Slightly larger than the bubble)
function CelestialGrid({ scale }: { scale: number }) {
  const gridRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.04;
      gridRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <mesh ref={gridRef} scale={scale * 1.18}>
      <sphereGeometry args={[1, 32, 16]} />
      <meshBasicMaterial
        wireframe
        color="#8b5cf6"
        transparent
        opacity={0.22}
      />
    </mesh>
  );
}

// Core Liquid Chrome Sphere
function LiquidChromeSphere({ scale }: { scale: number }) {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.08;
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.8}>
      <mesh ref={sphereRef} scale={scale}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={3.0}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.95}
          roughness={0.08}
          distort={0.45}
          speed={3}
        />
      </mesh>

      {/* Dynamic Colored Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#c084fc" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3b82f6" />
      <Environment preset="studio" />
    </Float>
  );
}

export default function LiquidChromeCanvas() {
  const [baseScale, setBaseScale] = useState(1.15);

  useEffect(() => {
    const handleResize = () => {
      // 0.7 on mobile fits the bubble + grid cleanly inside 1st screen height
      // 1.15 on desktop matches exact proportion
      if (window.innerWidth < 768) {
        setBaseScale(0.7);
      } else {
        setBaseScale(1.15);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CanvasErrorBoundary>
      {/* 'fixed inset-0' keeps both elements fixed in place while scrolling */}
      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0 touch-pan-y flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          {/* Core Chrome Sphere */}
          <LiquidChromeSphere scale={baseScale} />

          {/* Celestial Coordinates Grid (Locked tightly around bubble) */}
          <CelestialGrid scale={baseScale} />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}

export { LiquidChromeCanvas };
