uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;

varying vec2 vUv;

#include "./palette"

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / uResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    uv = fract(uv * 1.5) - 0.5;
    uv = sin(uv * 0.5) - uPointer;
    float d = length(uv) * exp(-length(uv0));
    vec3 col = palette(length(uv0) + uTime * 0.4);
    d = sin(d * 8.0 + uTime) / 8.0;
    d = abs(d);
    d = pow(0.02 / d, 2.0);
    finalColor += col * d;

    gl_FragColor = vec4(finalColor, 1.0);
}
