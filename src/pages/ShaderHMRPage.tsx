import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { WaveMaterial, WaveMaterialProps } from '@/materials/WaveMaterial';

extend({ WaveMaterial });

function ShaderPlane() {

  const three = useThree();
  const waveMaterialRef = useRef<THREE.ShaderMaterial & WaveMaterialProps>(null);

  useFrame(({ pointer }, delta) => {
    if (waveMaterialRef.current) {
        waveMaterialRef.current.uTime! += delta;
        waveMaterialRef.current.uPointer! = pointer;
    }
  });

  return (
    <mesh scale={[three.viewport.width, three.viewport.height, 1]}>
      <planeGeometry/>
      <waveMaterial
        ref={waveMaterialRef}
        uResolution={new THREE.Vector2(
          three.size.width * three.viewport.dpr,
          three.size.height * three.viewport.dpr
        )}
      />
    </mesh>
  );
}

function ShaderHMRPage() {
  return (
    <Canvas>
      <ShaderPlane/>
    </Canvas>
  );
}

export default ShaderHMRPage;
