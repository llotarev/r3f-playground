import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface WaveMaterialProps {
    uTime?: number;
    uResolution?: THREE.Vector2;
    uPointer?: THREE.Vector2;
}

const WaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uPointer: new THREE.Vector2()
  },
  vertexShader,
  fragmentShader
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            waveMaterial:
                DetailedHTMLProps<HTMLAttributes<THREE.ShaderMaterial>, THREE.ShaderMaterial> & WaveMaterialProps;
        }
    }
}

export type { WaveMaterialProps };
export { WaveMaterial };
