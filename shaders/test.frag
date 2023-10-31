precision mediump float;

varying vec2 pos;
uniform float millis;

void main() {
  // set color per pixel
  float scale = 0.2 * abs(sin(millis/1000.0) + 1.0) + 0.7;
  float cust_x = 0.4 * sin(pos.x * 28.0 + millis/1000.0) + 0.7;
  float cust_y = 0.4 * cos(pos.y * 12.0) + 0.7;

  vec4 color_1 = vec4(cust_x, cust_y, scale * 0.5, 1.0);
  // vec4 color_2 = vec4(scale * pos.x, scale * pos.y, scale * 0.5, 1.0);
  gl_FragColor = color_1;
}