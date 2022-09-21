let grow = true;

// set click count
let clickCount = 0;

// regulate the frame rate
let setFrame = 30;

function setup() {
  frameRate(setFrame);
  // set up different backgrounds
  let backgroundColors = [5, 10, 15, 20];
  createCanvas(800, 800);
  background(random(backgroundColors));

  textSize(15);
  fill(180);
  text("In dark mode, click switch to light mode", 260, 780);
}

// Create object A in object literals
let abstractObjectA = {
  sideL: 0,
  maxSide: 400,
  minSide: 0,
  sGrow: 3,

  sStroke: 255 / (setFrame * 5),
  stroke: 0,
  strokeWeight: 0.2,

  angle: 0,
  angleGrow: 0.015,
};

// mouse click control
function mouseClicked() {
  clear();

  clickCount++;

  if (clickCount % 2 == 0 && clickCount != 0) {
    background(15);
    textSize(15);
    fill(180);
    text("In dark mode, click switch to light mode.", 260, 780);
  } else {
    background(190);
    textSize(15);
    fill(10);
    text("In light mode, click switch to dark mode.", 260, 780);
  }
}

// Update by sec
function draw() {
  drawObject(abstractObjectA);
}

function drawObject(Object1) {
  push();

  translate(width / 2, height / 2);

  Object1.angle += Object1.angleGrow;
  rotate(Object1.angle);

  noFill();
  strokeWeight += Object1.strokeWeight;

  // state of growing and shrinking
  if (Object1.sideL >= Object1.maxSide) {
    grow = false;
  } else if (Object1.sideL <= Object1.minSide) {
    grow = true;
  }

  if (grow == true) {
    // increase the size
    Object1.sideL += abstractObjectA.sGrow;
    Object1.stroke += abstractObjectA.sStroke;
    stroke(Object1.stroke);
  } else {
    // decrease the size
    Object1.sideL -= abstractObjectA.sGrow;
    // decrease the stroke #color
    Object1.stroke -= Object1.sStroke;
    stroke(Object1.stroke);
  }

  // draw square
  square(-Object1.sideL / 2, -Object1.sideL / 2, Object1.sideL);

  pop();
}

// Rotation center
// https://www.youtube.com/watch?v=H6QQIZeVuew "How to Rotate Multiple Objects in Javascript Coding on P5.js"
