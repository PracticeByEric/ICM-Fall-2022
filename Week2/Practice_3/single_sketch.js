// Single-sketch example

function setup() {
  createCanvas(800, 800);
}

let circleA = {
  originX: 400,
  originY: 400,
  radius: 50,
  strokeColor: 255,
  sX: 1,
};

// infinite loop updates by sec
function draw() {
  background(0);

  noFill();
  stroke(circleA.strokeColor);
  circle(circleA.originX, circleA.originY, circleA.radius);
  // each loop, update value of originX
  circleA.originX += circleA.sX;
}
