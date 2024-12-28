import { DetailedHTMLProps, HTMLAttributes } from 'react';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import vertexShader from './shaders/shader.vert';
import fragmentShader from './shaders/shader.frag';

interface SunSurfaceMaterialProps {
    uTime?: number;
    uColor?: THREE.Color;
}

const SunSurfaceMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0xffffff),
  },
  vertexShader,
  fragmentShader
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            sunSurfaceMaterial:
                DetailedHTMLProps<HTMLAttributes<THREE.ShaderMaterial>, THREE.ShaderMaterial> & SunSurfaceMaterialProps;
        }
    }
}

export type { SunSurfaceMaterialProps };
export { SunSurfaceMaterial };
