precision mediump float;

varying vec2 pos;
uniform float millis;

void main() {
  // set color per pixel
  gl_FragColor = vec4(pos.x, pos.y, 0.5, 1.0);
}