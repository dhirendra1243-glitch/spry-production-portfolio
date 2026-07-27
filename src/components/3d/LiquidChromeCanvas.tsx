"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

function LiquidChromeMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.8}>
      <mesh ref={meshRef} scale={2.2}>
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

      {/* Volumetric Refractive Accent Wireframe */}
      <mesh position={[0, 0, -1.2]}>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.12} wireframe />
      </mesh>

      {/* Dynamic Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#a855f7" />
      <directionalLight position={[-10, -10, -5]} intensity={2.0} color="#ec4899" />
      <Environment preset="studio" />
    </Float>
  );
}

export function LiquidChromeCanvas() {
  return (
    <CanvasErrorBoundary>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80 touch-pan-y">
        <Canvas
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{ powerPreference: 'high-performance', antialias: false }}
          camera={{ position: [0, 0, 6], fov: 45 }}
        >
          <LiquidChromeMesh />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}

export default LiquidChromeCanvas;
