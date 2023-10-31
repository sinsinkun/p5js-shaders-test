function preload() {
  // load in custom shader
  test = loadShader('/shaders/test.vert', '/shaders/test.frag');
}

function setup() {
  // draws canvas on html body
  createCanvas(800, 600, WEBGL);

  // load custom shader
  shader(test);
  // dont draw vertices
  noStroke();
}

function draw() {
  // wipe every frame
  clear();
  // add timer
  test.setUniform("millis", millis());
  // draw rect on canvas
  rect(0, 0, width, height);
}