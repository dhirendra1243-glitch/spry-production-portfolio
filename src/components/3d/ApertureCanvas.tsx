"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Ring, Torus } from "@react-three/drei";
import * as THREE from "three";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

function ApertureLens() {
  const groupRef = useRef<THREE.Group>(null);
  const bladesGroupRef = useRef<THREE.Group>(null);

  // Mouse lerp tracking
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.y * Math.PI) / 8;
    const targetY = (state.pointer.x * Math.PI) / 8;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);

    if (bladesGroupRef.current) {
      bladesGroupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Outer Heavy Metallic Chassis Ring */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.22, 32, 100]} />
          <meshStandardMaterial
            color="#0E0E14"
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>

        {/* Electric Cyan Glowing Inner Bezel Ring */}
        <mesh position={[0, 0, 0.05]}>
          <torusGeometry args={[2.0, 0.06, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>

        {/* Neon Violet Secondary Ring */}
        <mesh position={[0, 0, -0.05]}>
          <torusGeometry args={[2.35, 0.04, 16, 100]} />
          <meshBasicMaterial color="#9D4EDD" />
        </mesh>

        {/* Aperture Blade Segments Group */}
        <group ref={bladesGroupRef} position={[0, 0, 0.1]}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <group key={idx} rotation={[0, 0, (angle * Math.PI) / 180]}>
              <mesh position={[0.9, 0.5, 0]} rotation={[0, 0, 0.3]}>
                <boxGeometry args={[1.4, 0.15, 0.02]} />
                <meshStandardMaterial
                  color="#1C1C28"
                  metalness={0.95}
                  roughness={0.15}
                />
              </mesh>
            </group>
          ))}
        </group>

        {/* High-Refraction Glass Iris Lens (Center) */}
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[1.8, 1.8, 0.1, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.95}
            roughness={0.08}
            ior={1.5}
            thickness={0.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            clearcoat={1}
            color="#38F6FF"
          />
        </mesh>

        {/* Core Glowing Orb Light */}
        <mesh position={[0, 0, -0.4]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>
      </Float>

      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={15} color="#00F0FF" />
      <pointLight position={[-5, -5, -3]} intensity={12} color="#9D4EDD" />
      <directionalLight position={[0, 10, 5]} intensity={2} />
    </group>
  );
}

export function ApertureCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full border border-cyan-500/20 bg-cyan-500/5 animate-pulse" />
      </div>
    );
  }

  return (
    <CanvasErrorBoundary>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full"
        >
          <ApertureLens />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
