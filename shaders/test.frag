precision mediump float;

varying vec2 pos;
uniform float millis;

void main() {
  // set color per pixel
  float scale = 0.2 * abs(sin(millis/1200.0) + 1.0) + 0.7;
  gl_FragColor = vec4(scale * pos.x, scale * pos.y, scale * 0.5, 1.0);
}