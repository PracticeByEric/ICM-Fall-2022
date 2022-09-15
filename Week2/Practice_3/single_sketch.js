// // Single-sketch example

// function setup() {
//   createCanvas(800, 800);
// }

// let circleA = {
//   originX: 400,
//   originY: 400,
//   radius: 50,
//   strokeColor: 255,
//   sX: 1,
// };

// // infinite loop updates by sec
// function draw() {
//   background(0);

//   noFill();
//   stroke(circleA.strokeColor);
//   circle(circleA.originX, circleA.originY, circleA.radius);
//   // each loop, update value of originX
//   circleA.originX += circleA.sX;
// }

// ================================>>> Part 1 <<<=======================================

// // Single-sketch example
// let canvasWidth = 800;
// let canvasHeight = 800;

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
// }

// let circleA = {
//   originX: 400,
//   originY: 400,
//   radius: 50,
//   strokeColor: 255,
//   sX: 1,
//   sY: 0,
// };

// let circleB = {
//   originX: 400,
//   originY: 400,
//   radius: 30,
//   strokeColor: "red",
//   sX: -1,
//   sY: 0,
// };

// // infinite loop updates by sec
// function draw() {
//   background(0);

//   drawCircle(circleA);
//   drawCircle(circleB);
// }

// function drawCircle(aCricle) {
//   noFill();
//   stroke(aCricle.strokeColor);
//   circle(aCricle.originX, aCricle.originY, aCricle.radius);
//   aCricle.originX += aCricle.sX;
//   aCricle.originY -= aCricle.sY;

//   // restrict inside horizontal boundary
//   if (aCricle.originX > canvasWidth) {
//     aCricle.originX = 0;
//   }
//   if (aCricle.originX < 0) {
//     aCricle.originX = canvasWidth;
//   }
// }

// ========================>>> Part 2 <<< ==================================
// let canvasWidth = 800;
// let canvasHeight = 800;

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
// }

// let circleA = {
//   originX: 400,
//   originY: 400,
//   radius: 80,
//   strokeColor: 255,
//   sX: 1,
//   sY: 0,
// };

// let circleB = {
//   originX: 400,
//   originY: 400,
//   radius: 30,
//   strokeColor: "red",
//   sX: -1,
//   sY: 0,
// };

// let circleC = {
//   originX: 400,
//   originY: 400,
//   radius: 50,
//   strokeColor: "green",
//   sX: 0,
//   sY: 1,
// };

// let circleD = {
//   originX: 400,
//   originY: 400,
//   radius: 5,
//   strokeColor: "yellow",
//   sX: 0,
//   sY: -1,
// };

// // infinite loop updates by sec
// function draw() {
//   background(0);

//   drawCircle(circleA);
//   drawCircle(circleB);
//   drawCircle(circleC);
//   drawCircle(circleD);
// }

// function drawCircle(aCricle) {
//   noFill();
//   stroke(aCricle.strokeColor);
//   circle(aCricle.originX, aCricle.originY, aCricle.radius);
//   aCricle.originX += aCricle.sX;
//   aCricle.originY += aCricle.sY;

//   // restrict inside horizontal boundary
//   if (aCricle.originX - aCricle.radius > canvasWidth) {
//     aCricle.originX = 0;
//   }
//   if (aCricle.originX + aCricle.radius < 0) {
//     aCricle.originX = canvasWidth;
//   }
//   if (aCricle.originY - aCricle.radius > canvasHeight) {
//     aCricle.originY = 0;
//   }
//   if (aCricle.originY + aCricle.radius < 0) {
//     aCricle.originY = canvasHeight;
//   }
// }
// ================================>>> Part 3 <<<=======================================
// let canvasWidth = 800;
// let canvasHeight = 800;

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
// }

// let circleA = {
//   originX: 400,
//   originY: 400,
//   radius: 10,
//   strokeColor: 255,
//   sX: 1,
//   sY: 0,
// };

// let circleB = {
//   originX: 400,
//   originY: 400,
//   radius: 20,
//   strokeColor: "red",
//   sX: -1,
//   sY: 0,
// };

// let circleC = {
//   originX: 400,
//   originY: 400,
//   radius: 30,
//   strokeColor: "green",
//   sX: 0,
//   sY: 1,
// };

// let circleD = {
//   originX: 400,
//   originY: 400,
//   radius: 40,
//   strokeColor: "yellow",
//   sX: 0,
//   sY: -1,
// };

// let circleE = {
//   originX: 400,
//   originY: 400,
//   radius: 50,
//   strokeColor: "orange",
//   sX: 1,
//   sY: 1,
// };

// let circleF = {
//   originX: 400,
//   originY: 400,
//   radius: 60,
//   strokeColor: "blue",
//   sX: -1,
//   sY: -1,
// };

// let circleG = {
//   originX: 400,
//   originY: 400,
//   radius: 70,
//   strokeColor: "magenta",
//   sX: 1,
//   sY: -1,
// };

// let circleH = {
//   originX: 400,
//   originY: 400,
//   radius: 70,
//   strokeColor: "grey",
//   sX: -1,
//   sY: 1,
// };

// // infinite loop updates by sec
// function draw() {
//   background(0);

//   drawCircle(circleA);
//   drawCircle(circleB);
//   drawCircle(circleC);
//   drawCircle(circleD);
//   drawCircle(circleE);
//   drawCircle(circleF);
//   drawCircle(circleG);
//   drawCircle(circleH);
// }

// function drawCircle(aCricle) {
//   noFill();
//   stroke(aCricle.strokeColor);
//   circle(aCricle.originX, aCricle.originY, aCricle.radius);
//   aCricle.originX += aCricle.sX;
//   aCricle.originY += aCricle.sY;

//   // restrict inside horizontal boundary
//   if (aCricle.originX - aCricle.radius > canvasWidth) {
//     aCricle.originX = 0;
//   }
//   if (aCricle.originX + aCricle.radius < 0) {
//     aCricle.originX = canvasWidth;
//   }
//   if (aCricle.originY - aCricle.radius > canvasHeight) {
//     aCricle.originY = 0;
//   }
//   if (aCricle.originY + aCricle.radius < 0) {
//     aCricle.originY = canvasHeight;
//   }
// }

// ============================>>> Part 4 <<<======================================
let canvasWidth = 800;
let canvasHeight = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

let circleA = {
  originX: 400,
  originY: 400,
  radius: 10,
  strokeColor: 255,
  strokeWeight: 1,
  sX: 10,
  sY: 0,
};

let circleB = {
  originX: 400,
  originY: 400,
  radius: 20,
  strokeColor: "red",
  strokeWeight: 2,
  sX: -1,
  sY: 0,
};

let circleC = {
  originX: 400,
  originY: 400,
  radius: 30,
  strokeColor: "green",
  strokeWeight: 3,
  sX: 0,
  sY: 1,
};

let circleD = {
  originX: 400,
  originY: 400,
  radius: 40,
  strokeColor: "yellow",
  strokeWeight: 4,
  sX: 0,
  sY: -1,
};

let circleE = {
  originX: 400,
  originY: 400,
  radius: 50,
  strokeColor: "orange",
  strokeWeight: 5,
  sX: 1,
  sY: 1,
};

let circleF = {
  originX: 400,
  originY: 400,
  radius: 60,
  strokeColor: "blue",
  strokeWeight: 6,
  sX: -1,
  sY: -1,
};

let circleG = {
  originX: 400,
  originY: 400,
  radius: 70,
  strokeColor: "magenta",
  strokeWeight: 7,
  sX: 1,
  sY: -1,
};

let circleH = {
  originX: 400,
  originY: 400,
  radius: 70,
  strokeColor: "grey",
  strokeWeight: 8,
  sX: -1,
  sY: 1,
};

// infinite loop updates by sec
function draw() {
  background(0);

  drawCircle(circleA);
  drawCircle(circleB);
  drawCircle(circleC);
  drawCircle(circleD);
  drawCircle(circleE);
  drawCircle(circleF);
  drawCircle(circleG);
  drawCircle(circleH);
}

function drawCircle(aCricle) {
  noFill();
  stroke(aCricle.strokeColor);
  strokeWeight(aCricle.strokeWeight);
  circle(aCricle.originX, aCricle.originY, aCricle.radius);
  aCricle.originX += aCricle.sX;
  aCricle.originY += aCricle.sY;

  // restrict inside horizontal boundary
  if (aCricle.originX - aCricle.radius > canvasWidth) {
    aCricle.originX = 0;
  }
  if (aCricle.originX + aCricle.radius < 0) {
    aCricle.originX = canvasWidth;
  }
  if (aCricle.originY - aCricle.radius > canvasHeight) {
    aCricle.originY = 0;
  }
  if (aCricle.originY + aCricle.radius < 0) {
    aCricle.originY = canvasHeight;
  }
}
