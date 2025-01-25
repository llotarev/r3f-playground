import { FC, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';


const Scene: FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const controls = useControls({
    rotate: true,
    color: '#ffffff'
  });

  useFrame((_, delta) => {
    if (meshRef.current && controls.rotate) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <>
      <color attach='background' args={[0x000000]}/>
      <pointLight position={[5, 5, 5]} intensity={100}/>
      <ambientLight/>
      <axesHelper args={[5]}/>
      <gridHelper args={[5]}/>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial shadowSide={THREE.DoubleSide} color={controls.color}/>
        {/*<shaderMaterial*/}
        {/*  vertexShader={''}*/}
        {/*  fragmentShader={''}*/}
        {/*/>*/}
      </mesh>
      <OrbitControls/>
    </>
  );
};


const CubeShader: FC = () => (
  <Canvas>
    <Scene/>
  </Canvas>
);

export { CubeShader };
