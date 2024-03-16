"use client";
import { Canvas } from "@react-three/fiber";

import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import { MonkeyVietnameseHat } from "@/Mod/MonkeyVietnameseHat";
export default function page() {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between p-10">
      <div className="z-10  w-full h-[100vh] items-center justify-between font-mono text-sm lg:flex">
        <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
          <Stage environment="city" intensity={0.6}>
            <MonkeyVietnameseHat />
          </Stage>
          <BakeShadows />
          <OrbitControls makeDefault autoRotate />
        </Canvas>
      </div>
    </main>
  );
}
