"use client";

import { useGLTF } from "@react-three/drei";

export function ModelTrain(props) {
  const { nodes } = useGLTF("/model/Train_Model.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-1.693, -0.327, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.train_wheel_right_front.geometry}
        material={nodes.train_wheel_right_front.material}
        position={[-1.309, -0.325, 0.336]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.train_wheel_right_affter.geometry}
        material={nodes.train_wheel_right_affter.material}
        position={[-2.043, -0.325, 0.336]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.train_wheel_lefft_front.geometry}
        material={nodes.train_wheel_lefft_front.material}
        position={[-1.309, -0.325, -0.339]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.train_wheel_left_affter.geometry}
        material={nodes.train_wheel_left_affter.material}
        position={[-2.043, -0.325, -0.339]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-1.237, 0.024, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-1.237, 0.024, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-1.372, 0.358, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-1.225, 0.36, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-2.096, 0.235, 0]}
        scale={[1, 1.851, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-1.886, 0.013, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-0.877, -0.292, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-0.853, -0.327, 0]}
        rotation={[0, -0.438, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0.837, 0.001, -0.002]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0.02, -0.037, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[1.653, 0.035, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[0.837, 0.182, 0.205]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[0.837, 0.182, -0.21]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[1.677, 0, 0]}
          rotation={[0, -0.435, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[-0.832, -0.001, -0.002]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={nodes.Cube011.material}
            position={[-0.016, 0.036, 0]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={nodes.Cube014.material}
            position={[-1.258, -0.352, 0]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={nodes.Cube015.material}
            position={[-0.549, -0.54, 0.001]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={nodes.Cube016.material}
            position={[-0.549, -0.369, 0.001]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={nodes.Cube017.material}
            position={[-0.549, -0.194, 0.001]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={nodes.Cylinder007.material}
            position={[-1.26, -0.647, 0]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={nodes.Cylinder008.material}
            position={[-0.568, -0.434, 0]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.train_wheel_lefft_front003.geometry}
            material={nodes.train_wheel_lefft_front003.material}
            position={[-1.219, -0.002, -0.339]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.train_wheel_left_affter003.geometry}
            material={nodes.train_wheel_left_affter003.material}
            position={[-0.485, -0.002, -0.339]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.train_wheel_right_affter003.geometry}
            material={nodes.train_wheel_right_affter003.material}
            position={[-0.485, -0.002, 0.336]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.train_wheel_right_front003.geometry}
            material={nodes.train_wheel_right_front003.material}
            position={[-1.219, -0.002, 0.336]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[0.9, 0.459, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_lefft_front002.geometry}
          material={nodes.train_wheel_lefft_front002.material}
          position={[1.225, 0.002, -0.339]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_left_affter001.geometry}
          material={nodes.train_wheel_left_affter001.material}
          position={[0.491, 0.002, -0.339]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_left_affter002.geometry}
          material={nodes.train_wheel_left_affter002.material}
          position={[0.491, 0.002, -0.339]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_right_affter001.geometry}
          material={nodes.train_wheel_right_affter001.material}
          position={[0.491, 0.002, 0.336]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_right_affter002.geometry}
          material={nodes.train_wheel_right_affter002.material}
          position={[0.491, 0.002, 0.336]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_right_front001.geometry}
          material={nodes.train_wheel_right_front001.material}
          position={[1.225, 0.002, 0.336]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.train_wheel_right_front002.geometry}
          material={nodes.train_wheel_right_front002.material}
          position={[1.225, 0.002, 0.336]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-0.877, -0.292, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-0.833, -0.365, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-0.853, -0.327, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-0.001, -0.554, -0.004]}
        scale={29.745}
      />
    </group>
    // <Clone object={scene} />
  );
}
useGLTF.preload("/model/Train_Model.gltf");
