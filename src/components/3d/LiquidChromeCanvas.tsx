"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

function LiquidChromeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Organic rotation
    meshRef.current.rotation.x = time * 0.15 + state.pointer.y * 0.4;
    meshRef.current.rotation.y = time * 0.2 + state.pointer.x * 0.4;

    // Dynamic distortion responsiveness to cursor movement
    if (materialRef.current) {
      const mouseDist = Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2);
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        0.45 + mouseDist * 0.35,
        0.05
      );
      materialRef.current.speed = THREE.MathUtils.lerp(
        materialRef.current.speed,
        2.5 + mouseDist * 2.0,
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[2.2, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#F1F5F9"
          roughness={0.08}
          metalness={0.95}
          distort={0.5}
          speed={3}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
        />
      </Sphere>

      {/* Volumetric Refractive Accent Sphere */}
      <mesh position={[0, 0, -1.2]}>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.12} wireframe />
      </mesh>

      {/* Dynamic Colored Lighting for Liquid Metal Reflections */}
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={25} color="#EC4899" />
      <pointLight position={[-6, -6, 4]} intensity={20} color="#A855F7" />
      <pointLight position={[0, -8, -5]} intensity={18} color="#6366F1" />
      <directionalLight position={[0, 10, 8]} intensity={3} color="#FFFFFF" />
    </Float>
  );
}

export function LiquidChromeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full border border-purple-500/20 bg-purple-500/5 animate-pulse" />
      </div>
    );
  }

  return (
    <CanvasErrorBoundary>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full"
        >
          <LiquidChromeMesh />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
