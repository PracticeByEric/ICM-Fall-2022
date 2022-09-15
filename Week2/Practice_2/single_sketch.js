// Single-sketch example

function setup() {
  createCanvas(400, 400);
  background(255);

  // declare rect size variables
  let originX;
  let originY;
  let rectWidth;
  let rectHeight;
  // distance between rect
  let rectDistance;

  // assign values
  (originX = 0), (originY = 0);
  rectWidth = 100;
  rectHeight = 400;
  rectDistance = 100;

  // draw rectangles
  for (let i = 0; i < 4; i++) {
    rect(originX, originY, rectWidth, rectHeight);
    // update orginX each round
    originX += rectDistance;
  }
}
