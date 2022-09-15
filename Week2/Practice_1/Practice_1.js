// Original sketch to identify problems

// function setup() {
//   createCanvas(400, 400);
//   let xpos = 200;
// }

// function draw() {
//   background(220);
//   circle(xpos, 200, 100);
// }

// Problem: the xpos variable is not accessible by the draw() function
// Solution 1: Attach variable to draw() function
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   let xpos = 200;

//   background(220);
//   circle(xpos, 200, 100);
// }

// Solution 2: Let xpos variable be a global variable
let xpos = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(xpos, 200, 100);
}
