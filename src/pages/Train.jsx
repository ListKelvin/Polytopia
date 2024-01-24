/* eslint-disable react/no-unknown-property */
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelTrain } from "../Mod/ModelTrain";

function Train() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
      <Stage environment="city" intensity={0.6}>
        <ModelTrain />
      </Stage>
      <BakeShadows />
      <OrbitControls makeDefault autoRotate />
    </Canvas>
  );
}

export default Train;
