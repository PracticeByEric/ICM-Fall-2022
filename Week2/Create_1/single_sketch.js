// One element controlled by mouse
// One element different everytime you run

function setup() {
  createCanvas(800, 800);
  background(51);
}

// Create object A in object literals
let abstractObjectA = {
  sideL: 0,
  maxSide: 400,
  minSide: 0,
  sGrow: 1.5,

  sStroke: 1,
  stroke: 0,

  angle: 0,
};

let grow = true;

let runTime = 0;

// Update by sec
function draw() {
  drawObject(abstractObjectA);
}

function drawObject(Object1) {
  push();

  abstractObjectA.angle += 0.025;

  translate(400, 400);

  rotate(abstractObjectA.angle);

  noFill();
  strokeWeight = 1;

  if (abstractObjectA.sideL >= abstractObjectA.maxSide) {
    grow = false;
  }
  if (abstractObjectA.sideL <= abstractObjectA.minSide) {
    grow = true;
  }

  CountRunTime(abstractObjectA);

  if (grow == true) {
    // increase the size
    abstractObjectA.sideL += abstractObjectA.sGrow;
    // increase the stroke #color
    abstractObjectA.stroke += abstractObjectA.sStroke;
    if (CountRunTime(abstractObjectA) % 2 == 0) {
      stroke(150);
    } else {
      stroke(abstractObjectA.stroke);
    }
  } else {
    // decrease the size
    abstractObjectA.sideL -= abstractObjectA.sGrow;
    // decrease the stroke #color
    abstractObjectA.stroke -= abstractObjectA.sStroke;
    stroke(abstractObjectA.stroke);
  }

  square(
    -abstractObjectA.sideL / 2,
    -abstractObjectA.sideL / 2,
    abstractObjectA.sideL
  );

  pop();
}

// count run time
function CountRunTime(Object1) {
  if (Object1.sideL == Object1.maxSide) {
    runTime += 1;
  }
  return runTime;
}
// Rotate
//https://www.youtube.com/watch?v=H6QQIZeVuew

// Grow and shrink
// https://editor.p5js.org/amcc/sketches/3ZLqytY_4
