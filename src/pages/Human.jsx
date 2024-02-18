import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../Mod/HumanIllustrate";
function Human() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
      <Stage environment="city" intensity={0.6}>
        <Model />
      </Stage>
      <BakeShadows />
      <OrbitControls makeDefault autoRotate />
    </Canvas>
  );
}

export default Human;
