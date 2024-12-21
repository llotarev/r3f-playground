import { WaveMaterial } from '@/shaders/WaveMaterial';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';


function ShaderPlane() {
  const ref = useRef({ time: 0, });

  const { viewport, size } = useThree();

  useFrame((_, delta) => {ref.current.time += delta;});

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial
        key={WaveMaterial.key}
        ref={ref}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
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
