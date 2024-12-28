import { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SunSurfaceMaterial, SunSurfaceMaterialProps } from '@/materials/SunSurfaceMaterial';

extend({ SunSurfaceMaterial });

const Scene = () => {

  const materialRef = useRef<THREE.ShaderMaterial & SunSurfaceMaterialProps>(null!);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, 32, 32]}/>
        <sunSurfaceMaterial
          ref={materialRef}
          uTime={0}
          uColor={new THREE.Color(0xfff000)}
        />
      </mesh>
    </group>
  );
};


const SunPage = () => (
  <Canvas>
    <color attach="background" args={[0x000000]}/>
    <ambientLight intensity={1000} args={[0xffffff]}/>
    <OrbitControls/>
    <Scene/>
  </Canvas>
);

export { SunPage };
