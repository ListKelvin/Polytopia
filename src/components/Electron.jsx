/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;

    const x = Math.sin(t) * radius;
    const y = (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25;
    const z = 0;
    ref.current.position.set(x, y, z);
  });
  return (
    <group {...props}>
      <Trail
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
export default Electron;
