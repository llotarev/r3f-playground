uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;

    pos.x += sin(uTime + position.y * 1.0) * 0.1;
    pos.y += cos(uTime + position.y * 2.0) * 0.1;
    pos.z += sin(uTime + position.y * 3.0) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
