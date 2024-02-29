"use client";
import { FC } from "react";
import { Canvas } from "@react-three/fiber";

import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import { Model } from "@/Mod/HumanIllustrate";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between p-10">
      <div className="z-10  w-full h-[100vh] items-center justify-between font-mono text-sm lg:flex">
        <Canvas shadows camera={{ position: [0, 0, 150], fov: 10 }}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
          <BakeShadows />
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </main>
  );
};

export default page;
