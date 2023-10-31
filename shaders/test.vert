precision mediump float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 pos;
uniform float millis;

void main() {
  pos = aTexCoord;

  // reposition vertices
  vec4 position = vec4(aPosition, 1.0);
  // origin is at center of canvas - need to scale and reposition
  position.xy = position.xy * (1.98 + 0.02 * sin(millis/1000.0)) - (0.99 + 0.01 * sin(millis/1000.0));

  // set position of vertices
  gl_Position = position;
}