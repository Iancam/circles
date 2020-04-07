function setup() {
  createCanvas(1000, 480);
  angleMode(DEGREES);
}
// example for loop
for (let x = 0; x < 5; x++) {
  console.log(x);
}

function draw() {
  // do the same thing as below, except with a for loop
  circle(40, 40, 30);
  circle(40, 40, 25);
  circle(40, 40, 20);
  circle(40, 40, 15);

  translate(500, 20);
  // plot the quadratic function using a for loop!
  for (let x = 0; x < 100; x++) {}

  // help me make this code better (it's supposed to be a smiley face)
  circle(40, 40, 20);
  circle(80, 40, 20);

  circle(60 + 0 * 10, 105, 10);
  circle(60 + 1 * 10, 100, 10);
  circle(60 + 2 * 10, 95, 10);
  circle(60 + 3 * 10, 90, 10);
  circle(60 + 4 * 10, 85, 10);

  circle(60 - 0 * 10, 105, 10);
  circle(60 - 1 * 10, 100, 10);
  circle(60 - 2 * 10, 95, 10);
  circle(60 - 3 * 10, 90, 10);
  circle(60 - 4 * 10, 85, 10);

  // remember that grid you made once with a nested for loop?

  // how could we make a spiral using relative positions?
  // don't forget translate and rotate
  for (let x = 0; x < 100; x++) {}
}
