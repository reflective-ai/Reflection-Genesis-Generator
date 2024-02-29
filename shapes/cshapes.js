function Shape_c0_0(point) {
  console.log("Shape_c0_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 4, point.y + 4); // directly to a point 1 right and 1 down
  vertex(point.x + 4, point.y + 23); // down 19 points
  vertex(point.x + 3, point.y + 24); // directly to a point 1 left and 1 down
  vertex(point.x, point.y + 24); // left 3 points
  vertex(point.x, point.y + 27); // down 3 points
  vertex(point.x + 11, point.y + 27); // right 11 points
  vertex(point.x + 11, point.y + 24); // up 3 points
  vertex(point.x + 8, point.y + 24); // left 3 points
  vertex(point.x + 7, point.y + 23); // directly to a point 1 left and 1 up
  vertex(point.x + 7, point.y); // up 23 points
  endShape(CLOSE); // back to the beginning
}

// Start at first point the then draw a line down 3 points, directly to a point 1 left and 1 down, 
// left 3 points, down 19 points, right 3 points, directly to a point 1 right and 1 down, down 3 points, right 11 points,
// up 3 points, directly to a point 1 right and 1 up, right 3 points, up 19 points, left 3 points, 
// directly to a point 1 left and 1 up, up 3 points, and finish by going back to the beginning.
function Shape_c1_0(point) {
  console.log("Shape_c1_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 4); // left 1 point and down 1 point
  vertex(point.x - 4, point.y + 4); // left 3 points
  vertex(point.x - 4, point.y + 23); // down 19 points
  vertex(point.x - 3, point.y + 24); // right 1 point and down 1 point
  vertex(point.x - 3, point.y + 27); // down 3 points
  vertex(point.x + 8, point.y + 27); // right 11 points
  vertex(point.x + 8, point.y + 24); // up 3 points
  vertex(point.x + 5, point.y + 24); // left 3 points
  vertex(point.x + 6, point.y + 23); // directly to a point 1 right and 1 up
  vertex(point.x + 9, point.y + 23); // right 3 points
  vertex(point.x + 9, point.y + 4); // up 19 points
  vertex(point.x + 6, point.y + 4); // left 3 points
  vertex(point.x + 5, point.y + 3); // directly to a point 1 left and 1 up
  vertex(point.x + 5, point.y); // up 3 points
  // back to the beginning
  endShape(CLOSE);
}

function Shape_c2_0(point) {
  console.log("Shape_c2_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 7); // down 7 points
  vertex(point.x - 1, point.y + 6); // 1 left and 1 down
  vertex(point.x - 3, point.y + 6); // left 3 points
  vertex(point.x - 3, point.y + 3); // down 3 points
  vertex(point.x + 8, point.y + 3); // right 11 points
  vertex(point.x + 8, point.y + 6); // up 3 points
  vertex(point.x + 5, point.y + 6); // left 3 points
  vertex(point.x + 4, point.y + 7); // 1 left and 1 up
  vertex(point.x + 4, point.y); // up 7 points
  endShape(CLOSE); // back to the beginning
}

function Shape_c3_0(point) {
  console.log("Shape_c3_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 15); // down 15 points
  vertex(point.x - 1, point.y + 14); // 1 left and 1 down
  vertex(point.x - 3, point.y + 14); // left 3 points
  vertex(point.x - 3, point.y + 1); // down 3 points
  vertex(point.x + 8, point.y + 1); // right 11 points
  vertex(point.x + 8, point.y + 4); // up 3 points
  vertex(point.x + 5, point.y + 4); // left 3 points
  vertex(point.x + 4, point.y + 5); // 1 left and 1 up
  vertex(point.x + 4, point.y - 10); // up 15 points
  endShape(CLOSE); // back to the beginning
}

function Shape_c4_0(point) {
  console.log("Shape_c4_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 3, point.y + 2); // left 3 points
  vertex(point.x - 3, point.y + 20); // down 19 points
  vertex(point.x - 2, point.y + 21); // 1 right and 1 down
  vertex(point.x - 2, point.y + 24); // down 3 points
  vertex(point.x + 9, point.y + 24); // right 11 points
  vertex(point.x + 9, point.y + 21); // up 3 points
  vertex(point.x + 6, point.y + 21); // left 3 points
  vertex(point.x + 7, point.y + 20); // 1 right and 1 up
  vertex(point.x + 7, point.y + 5); // right 3 points
  vertex(point.x + 10, point.y + 5); // up 15 points
  vertex(point.x + 7, point.y + 2); // left 3 points
  vertex(point.x + 7, point.y + 17); // down 15 points
  vertex(point.x - 4, point.y + 17); // 1 left and 1 down
  vertex(point.x - 4, point.y + 20); // left 11 points
  vertex(point.x - 5, point.y + 20); // 1 left and 1 up
  vertex(point.x - 5, point.y + 39); // up 19 points
  vertex(point.x + 2, point.y + 39); // 1 right and 1 up
  vertex(point.x + 9, point.y + 36); // right 7 points
  vertex(point.x + 9, point.y + 33); // up 3 points
  endShape(CLOSE); // back to the beginning
}

function Shape_c5_0(point) {
  console.log("Shape_c5_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 4, point.y + 4); // 1 right and 1 down
  vertex(point.x + 4, point.y + 7); // down 3 points
  vertex(point.x + 1, point.y + 7); // right 3 points
  vertex(point.x + 1, point.y + 4); // up 3 points
  vertex(point.x - 2, point.y + 4); // left 3 points
  vertex(point.x - 3, point.y + 3); // 1 left and 1 up
  vertex(point.x - 3, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c6_0(point) {
  console.log("Shape_c6_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 11); // down 11 points
  vertex(point.x - 1, point.y + 10); // 1 left and 1 down
  vertex(point.x - 3, point.y + 10); // left 3 points
  vertex(point.x - 3, point.y + 7); // down 3 points
  vertex(point.x + 8, point.y + 7); // right 11 points
  vertex(point.x + 8, point.y + 4); // up 3 points
  vertex(point.x + 5, point.y + 4); // left 3 points
  vertex(point.x + 4, point.y + 5); // 1 left and 1 up
  vertex(point.x + 4, point.y - 6); // up 11 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c7_0(point) {
  console.log("Shape_c7_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 7, point.y + 3); // right 7 points
  vertex(point.x + 8, point.y + 4); // 1 right and 1 down
  vertex(point.x + 8, point.y + 23); // down 19 points
  vertex(point.x + 7, point.y + 24); // 1 left and 1 down
  vertex(point.x - 4, point.y + 24); // left 11 points
  vertex(point.x - 4, point.y + 13); // 1 left and 1 up
  vertex(point.x - 7, point.y + 13); // up 3 points
  vertex(point.x - 10, point.y + 13); // left 3 points
  vertex(point.x - 10, point.y + 10); // down 3 points
  vertex(point.x - 7, point.y + 10); // right 3 points
  vertex(point.x - 7, point.y + 7); // 1 right and 1 down
  vertex(point.x + 4, point.y + 7); // down 3 points
  vertex(point.x + 15, point.y + 7); // right 11 points
  vertex(point.x + 15, point.y + 4); // up 3 points
  vertex(point.x + 16, point.y + 4); // 1 right and 1 up
  vertex(point.x + 16, point.y - 15); // right 3 points
  vertex(point.x + 13, point.y - 15); // up 19 points
  vertex(point.x + 10, point.y - 15); // left 3 points
  vertex(point.x + 10, point.y - 12); // 1 left and 1 up
  vertex(point.x + 10, point.y - 9); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c8_0(point) {
  console.log("Shape_c8_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 3, point.y + 2); // left 3 points
  vertex(point.x - 3, point.y - 1); // down 3 points
  vertex(point.x - 1, point.y - 1); // right 3 points
  vertex(point.x - 1, point.y + 2); // up 3 points
  vertex(point.x + 2, point.y + 2); // 1 right and 1 up
  vertex(point.x + 2, point.y + 5); // right 3 points
  vertex(point.x + 2, point.y + 8); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c9_0(point) {
  console.log("Shape_c9_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 7); // down 7 points
  vertex(point.x + 3, point.y + 7); // right 3 points
  vertex(point.x + 4, point.y + 6); // 1 right and 1 down
  vertex(point.x + 4, point.y + 3); // down 3 points
  vertex(point.x + 15, point.y + 3); // right 11 points
  vertex(point.x + 15, point.y + 6); // up 3 points
  vertex(point.x + 4, point.y + 6); // left 11 points
  vertex(point.x + 4, point.y - 1); // 1 left and 1 up
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c10_0(point) {
  console.log("Shape_c10_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 19); // down 19 points
  vertex(point.x + 3, point.y + 19); // right 3 points
  vertex(point.x + 4, point.y + 18); // 1 right and 1 down
  vertex(point.x + 4, point.y + 15); // down 3 points
  vertex(point.x + 15, point.y + 15); // right 11 points
  vertex(point.x + 15, point.y + 18); // up 3 points
  vertex(point.x + 18, point.y + 18); // 1 right and 1 up
  vertex(point.x + 18, point.y + 7); // right 3 points
  vertex(point.x + 7, point.y + 7); // up 11 points
  vertex(point.x + 4, point.y + 7); // left 3 points
  vertex(point.x + 4, point.y + 4); // down 11 points
  vertex(point.x - 7, point.y + 4); // 1 left and 1 down
  vertex(point.x - 7, point.y + 15); // left 11 points
  vertex(point.x - 8, point.y + 15); // 1 left and 1 up
  vertex(point.x - 8, point.y + 34); // up 19 points
  vertex(point.x + 5, point.y + 34); // 1 right and 1 up
  vertex(point.x + 12, point.y + 31); // right 3 points
  vertex(point.x + 12, point.y + 28); // up 3 points
  vertex(point.x + 15, point.y + 28); // 1 right and 1 up
  vertex(point.x + 15, point.y + 9); // right 3 points
  vertex(point.x + 12, point.y + 9); // up 19 points
  vertex(point.x + 9, point.y + 9); // left 3 points
  vertex(point.x + 9, point.y + 6); // 1 left and 1 up
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c11_0(point) {
  console.log("Shape_c11_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 23); // down 23 points
  vertex(point.x - 1, point.y + 22); // 1 left and 1 down
  vertex(point.x - 3, point.y + 22); // left 3 points
  vertex(point.x - 3, point.y + 19); // down 3 points
  vertex(point.x + 8, point.y + 19); // right 11 points
  vertex(point.x + 8, point.y + 16); // up 3 points
  vertex(point.x + 5, point.y + 16); // left 3 points
  vertex(point.x + 2, point.y + 19); // 1 left and 1 up
  vertex(point.x + 2, point.y - 4); // up 23 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c12_0(point) {
  console.log("Shape_c12_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 3, point.y + 2); // left 3 points
  vertex(point.x - 3, point.y - 17); // down 19 points
  vertex(point.x - 2, point.y - 18); // 1 right and 1 down
  vertex(point.x - 2, point.y - 21); // down 3 points
  vertex(point.x + 9, point.y - 21); // right 11 points
  vertex(point.x + 9, point.y - 18); // up 3 points
  vertex(point.x + 6, point.y - 18); // left 3 points
  vertex(point.x + 7, point.y - 17); // 1 right and 1 up
  vertex(point.x + 7, point.y - 2); // right 3 points
  vertex(point.x + 4, point.y - 2); // up 3 points
  vertex(point.x + 4, point.y + 1); // left 3 points
  vertex(point.x + 1, point.y + 1); // down 3 points
  vertex(point.x + 1, point.y - 16); // 1 left and 1 down
  vertex(point.x - 10, point.y - 16); // left 11 points
  vertex(point.x - 10, point.y - 18); // 1 left and 1 up
  vertex(point.x - 10, point.y - 37); // up 19 points
  vertex(point.x - 3, point.y - 37); // 1 right and 1 up
  vertex(point.x + 4, point.y - 34); // right 3 points
  vertex(point.x + 4, point.y - 31); // up 3 points
  vertex(point.x + 1, point.y - 31); // left 3 points
  vertex(point.x + 1, point.y - 28); // down 3 points
  vertex(point.x - 10, point.y - 28); // 1 left and 1 down
  vertex(point.x - 10, point.y - 9); // left 11 points
  vertex(point.x - 9, point.y - 9); // 1 left and 1 up
  vertex(point.x - 9, point.y + 10); // up 19 points
  vertex(point.x - 2, point.y + 10); // 1 right and 1 up
  vertex(point.x + 5, point.y + 7); // right 3 points
  vertex(point.x + 5, point.y + 4); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c13_0(point) {
  console.log("Shape_c13_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 4, point.y + 4); // 1 right and 1 down
  vertex(point.x + 4, point.y + 7); // down 3 points
  vertex(point.x + 1, point.y + 7); // right 3 points
  vertex(point.x + 1, point.y + 4); // up 3 points
  vertex(point.x - 2, point.y + 4); // left 3 points
  vertex(point.x - 3, point.y + 3); // 1 left and 1 up
  vertex(point.x - 3, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c14_0(point) {
  console.log("Shape_c14_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 3, point.y); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c15_0(point) {
  console.log("Shape_c15_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 19); // down 19 points
  vertex(point.x - 1, point.y + 18); // 1 left and 1 down
  vertex(point.x - 3, point.y + 18); // left 3 points
  vertex(point.x - 3, point.y + 15); // down 3 points
  vertex(point.x + 8, point.y + 15); // right 11 points
  vertex(point.x + 8, point.y + 18); // up 3 points
  vertex(point.x + 5, point.y + 18); // left 3 points
  vertex(point.x + 2, point.y + 15); // 1 left and 1 up
  vertex(point.x + 2, point.y - 4); // up 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c16_0(point) {
  console.log("Shape_c16_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 19); // down 19 points
  vertex(point.x - 1, point.y + 18); // 1 left and 1 down
  vertex(point.x - 12, point.y + 18); // left 11 points
  vertex(point.x - 12, point.y + 17); // 1 left and 1 up
  vertex(point.x - 9, point.y + 17); // up 15 points
  vertex(point.x - 6, point.y + 14); // left 3 points
  vertex(point.x - 3, point.y + 14); // down 15 points
  vertex(point.x, point.y + 14); // right 3 points
  vertex(point.x, point.y + 15); // 1 right and 1 down
  vertex(point.x + 3, point.y + 15); // down 3 points
  vertex(point.x + 14, point.y + 15); // right 11 points
  vertex(point.x + 14, point.y + 18); // up 3 points
  vertex(point.x + 13, point.y + 18); // 1 right and 1 up
  vertex(point.x + 13, point.y + 37); // right 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c17_0(point) {
  console.log("Shape_c17_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 7, point.y + 3); // right 7 points
  vertex(point.x + 8, point.y + 4); // 1 right and 1 down
  vertex(point.x + 8, point.y + 23); // down 19 points
  vertex(point.x - 1, point.y + 23); // 1 left and 1 down
  vertex(point.x - 12, point.y + 23); // left 11 points
  vertex(point.x - 12, point.y + 22); // 1 left and 1 up
  vertex(point.x - 1, point.y + 22); // up 19 points
  vertex(point.x - 3, point.y + 19); // left 3 points
  vertex(point.x - 3, point.y + 38); // down 19 points
  vertex(point.x, point.y + 38); // right 3 points
  vertex(point.x, point.y + 39); // 1 right and 1 down
  vertex(point.x + 3, point.y + 39); // down 3 points
  vertex(point.x + 14, point.y + 39); // right 11 points
  vertex(point.x + 14, point.y + 42); // up 3 points
  vertex(point.x + 13, point.y + 42); // 1 right and 1 up
  vertex(point.x + 13, point.y + 61); // right 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c18_0(point) {
  console.log("Shape_c18_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 7, point.y + 3); // right 7 points
  vertex(point.x + 7, point.y); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c19_0(point) {
  console.log("Shape_c19_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 15); // down 15 points
  vertex(point.x - 1, point.y + 14); // 1 left and 1 down
  vertex(point.x - 12, point.y + 14); // left 11 points
  vertex(point.x - 12, point.y + 13); // 1 left and 1 up
  vertex(point.x - 9, point.y + 13); // up 3 points
  vertex(point.x - 6, point.y + 10); // left 3 points
  vertex(point.x - 3, point.y + 10); // down 3 points
  vertex(point.x, point.y + 10); // right 3 points
  vertex(point.x, point.y + 11); // 1 right and 1 down
  vertex(point.x + 3, point.y + 11); // down 3 points
  vertex(point.x + 14, point.y + 11); // right 11 points
  vertex(point.x + 14, point.y + 14); // up 3 points
  vertex(point.x + 13, point.y + 14); // 1 right and 1 up
  vertex(point.x + 13, point.y + 29); // right 15 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c20_0(point) {
  console.log("Shape_c20_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 7); // down 7 points
  vertex(point.x + 3, point.y + 7); // right 3 points
  vertex(point.x + 3, point.y); // up 7 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c21_0(point) {
  console.log("Shape_c21_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 3); // 1 left and 1 down
  vertex(point.x - 3, point.y + 3); // left 3 points
  vertex(point.x - 3, point.y); // down 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c22_0(point) {
  console.log("Shape_c22_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 3); // 1 left and 1 down
  vertex(point.x - 3, point.y + 3); // left 3 points
  vertex(point.x - 3, point.y + 21); // down 19 points
  vertex(point.x, point.y + 21); // right 3 points
  vertex(point.x, point.y + 24); // 1 right and 1 down
  vertex(point.x + 3, point.y + 24); // down 3 points
  vertex(point.x + 14, point.y + 24); // right 11 points
  vertex(point.x + 14, point.y + 27); // up 3 points
  vertex(point.x + 3, point.y + 27); // left 11 points
  vertex(point.x + 3, point.y + 46); // up 19 points
  vertex(point.x - 3, point.y + 46); // left 3 points
  vertex(point.x - 3, point.y + 27); // down 19 points
  vertex(point.x, point.y + 27); // right 3 points
  vertex(point.x, point.y + 30); // 1 right and 1 up
  vertex(point.x + 3, point.y + 30); // up 3 points
  vertex(point.x + 14, point.y + 30); // right 11 points
  vertex(point.x + 14, point.y + 33); // up 3 points
  vertex(point.x + 13, point.y + 33); // 1 right and 1 up
  vertex(point.x + 13, point.y + 52); // right 19 points
  vertex(point.x + 2, point.y + 52); // 1 right and 1 down
  vertex(point.x - 9, point.y + 52); // left 11 points
  vertex(point.x - 9, point.y + 37); // 1 left and 1 up
  vertex(point.x - 9, point.y + 30); // up 7 points
  vertex(point.x - 6, point.y + 30); // left 3 points
  vertex(point.x - 3, point.y + 27); // 1 left and 1 up
  vertex(point.x - 3, point.y + 6); // up 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c23_0(point) {
  console.log("Shape_c23_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 3); // 1 left and 1 down
  vertex(point.x - 7, point.y + 3); // left 7 points
  vertex(point.x - 7, point.y); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c24_0(point) {
  console.log("Shape_c24_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 3); // 1 left and 1 down
  vertex(point.x - 3, point.y + 3); // left 3 points
  vertex(point.x - 3, point.y + 7); // down 7 points
  vertex(point.x, point.y + 7); // right 3 points
  vertex(point.x, point.y + 10); // 1 right and 1 up
  vertex(point.x + 3, point.y + 10); // up 3 points
  vertex(point.x + 14, point.y + 10); // right 11 points
  vertex(point.x + 14, point.y + 13); // up 3 points
  vertex(point.x + 13, point.y + 13); // 1 right and 1 up
  vertex(point.x + 13, point.y + 32); // right 19 points
  vertex(point.x + 2, point.y + 32); // 1 right and 1 down
  vertex(point.x - 9, point.y + 32); // left 11 points
  vertex(point.x - 9, point.y + 17); // 1 left and 1 up
  vertex(point.x - 9, point.y + 10); // up 7 points
  vertex(point.x - 6, point.y + 10); // left 3 points
  vertex(point.x - 3, point.y + 7); // 1 left and 1 up
  vertex(point.x - 3, point.y); // up 7 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c25_0(point) {
  console.log("Shape_c25_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 4, point.y + 4); // 1 right and 1 down
  vertex(point.x + 4, point.y + 15); // down 11 points
  vertex(point.x + 7, point.y + 15); // right 3 points
  vertex(point.x + 7, point.y + 18); // up 3 points
  vertex(point.x + 4, point.y + 18); // left 3 points
  vertex(point.x + 1, point.y + 15); // 1 left and 1 up
  vertex(point.x + 1, point.y + 4); // up 11 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c26_0(point) {
  console.log("Shape_c26_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 3, point.y + 3); // right 3 points
  vertex(point.x + 4, point.y + 4); // 1 right and 1 down
  vertex(point.x + 4, point.y + 18); // down 15 points
  vertex(point.x + 7, point.y + 18); // right 3 points
  vertex(point.x + 7, point.y + 37); // up 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}
function Shape_c27_0(point) {
  console.log("Shape_c27_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 4, point.y + 2); // left 3 points
  vertex(point.x - 4, point.y + 21); // down 19 points
  vertex(point.x, point.y + 21); // right 3 points
  vertex(point.x, point.y + 20); // up 19 points
  vertex(point.x - 1, point.y + 20); // 1 left and 1 up
  vertex(point.x - 1, point.y + 3); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c28_0(point) {
  console.log("Shape_c28_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 4, point.y + 2); // left 3 points
  vertex(point.x - 4, point.y + 21); // down 19 points
  vertex(point.x, point.y + 21); // right 3 points
  vertex(point.x + 1, point.y + 18); // 1 right and 1 down
  vertex(point.x + 7, point.y + 18); // right 7 points
  vertex(point.x + 7, point.y + 15); // up 3 points
  vertex(point.x + 1, point.y + 15); // left 7 points
  vertex(point.x + 1, point.y + 3); // 1 left and 1 up
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c29_0(point) {
  console.log("Shape_c29_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 11); // down 11 points
  vertex(point.x - 1, point.y + 10); // 1 left and 1 down
  vertex(point.x - 4, point.y + 10); // left 3 points
  vertex(point.x - 4, point.y + 13); // down 3 points
  vertex(point.x - 1, point.y + 13); // right 3 points
  vertex(point.x + 2, point.y + 13); // up 3 points
  vertex(point.x + 2, point.y + 2); // 1 right and 1 up
  vertex(point.x + 2, point.y); // up 11 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c30_0(point) {
  console.log("Shape_c30_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 4, point.y + 2); // left 3 points
  vertex(point.x - 4, point.y + 21); // down 19 points
  vertex(point.x, point.y + 21); // right 3 points
  vertex(point.x + 1, point.y + 18); // 1 right and 1 down
  vertex(point.x + 7, point.y + 18); // right 7 points
  vertex(point.x + 7, point.y + 15); // up 3 points
  vertex(point.x + 4, point.y + 15); // left 3 points
  vertex(point.x + 1, point.y + 18); // 1 left and 1 up
  vertex(point.x + 1, point.y + 3); // up 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c31_0(point) {
  console.log("Shape_c31_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 4, point.y + 2); // left 3 points
  vertex(point.x - 4, point.y + 5); // down 3 points
  vertex(point.x + 7, point.y + 5); // right 11 points
  vertex(point.x + 7, point.y + 2); // up 3 points
  vertex(point.x + 4, point.y + 2); // left 3 points
  vertex(point.x + 1, point.y + 5); // 1 left and 1 up
  vertex(point.x + 1, point.y + 3); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c32_0(point) {
  console.log("Shape_c32_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 19); // down 19 points
  vertex(point.x - 11, point.y + 19); // left 11 points
  vertex(point.x - 11, point.y + 16); // down 3 points
  vertex(point.x - 8, point.y + 16); // right 11 points
  vertex(point.x - 8, point.y + 13); // up 3 points
  vertex(point.x - 5, point.y + 13); // right 3 points
  vertex(point.x - 5, point.y + 32); // up 19 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c33_0(point) {
  console.log("Shape_c33_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x - 1, point.y + 2); // 1 left and 1 down
  vertex(point.x - 4, point.y + 2); // left 3 points
  vertex(point.x - 4, point.y + 21); // down 19 points
  vertex(point.x, point.y + 21); // right 3 points
  vertex(point.x + 1, point.y + 18); // 1 right and 1 down
  vertex(point.x + 7, point.y + 18); // right 7 points
  vertex(point.x + 7, point.y + 5); // up 13 points
  vertex(point.x + 4, point.y + 5); // left 3 points
  vertex(point.x + 1, point.y + 8); // 1 left and 1 up
  vertex(point.x + 1, point.y + 27); // up 19 points
  vertex(point.x - 3, point.y + 27); // left 3 points
  vertex(point.x - 3, point.y + 8); // down 19 points
  vertex(point.x, point.y + 8); // right 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c34_0(point) {
  console.log("Shape_c34_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 7, point.y + 3); // right 7 points
  vertex(point.x + 7, point.y + 22); // directly to a point 1 right and 1 down
  vertex(point.x - 4, point.y + 22); // down 19 points
  vertex(point.x - 15, point.y + 22); // directly to a point 1 left and 1 down
  vertex(point.x - 15, point.y + 15); // left 11 points
  vertex(point.x - 18, point.y + 15); // directly to a point 1 left and 1 up
  vertex(point.x - 18, point.y + 8); // up 7 points
  vertex(point.x - 15, point.y + 5); // left 3 points
  vertex(point.x - 12, point.y + 5); // down 7 points
  vertex(point.x - 12, point.y + 12); // right 3 points
  vertex(point.x - 12, point.y + 19); // up 7 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c35_0(point) {
  console.log("Shape_c35_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 7); // down 7 points
  vertex(point.x + 3, point.y + 7); // right 3 points
  vertex(point.x + 4, point.y + 8); // directly to a point 1 right and 1 down
  vertex(point.x + 4, point.y + 15); // down 7 points
  vertex(point.x + 15, point.y + 15); // right 11 points
  vertex(point.x + 15, point.y + 18); // directly to a point 1 right and 1 up
  vertex(point.x + 15, point.y + 33); // right 15 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}


function Shape_c36_0(point) {
  console.log("Shape_c36_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 7); // down 7 points
  vertex(point.x - 1, point.y + 6); // 1 left and 1 down
  vertex(point.x - 12, point.y + 6); // left 11 points
  vertex(point.x - 12, point.y + 5); // 1 left and 1 up
  vertex(point.x - 9, point.y + 5); // up 3 points
  vertex(point.x - 6, point.y + 2); // left 3 points
  vertex(point.x - 3, point.y + 2); // down 3 points
  vertex(point.x, point.y + 2); // right 3 points
  vertex(point.x, point.y + 3); // 1 right and 1 down
  vertex(point.x + 3, point.y + 3); // down 3 points
  vertex(point.x + 14, point.y + 3); // right 11 points
  vertex(point.x + 14, point.y + 6); // up 3 points
  vertex(point.x + 13, point.y + 6); // 1 right and 1 up
  vertex(point.x + 13, point.y + 13); // right 3 points
  vertex(point.x + 13, point.y + 20); // up 7 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

function Shape_c37_0(point) {
  console.log("Shape_c37_0 at " + point.x + ", " + point.y);
  beginShape();
  vertex(point.x, point.y); // start point
  vertex(point.x, point.y + 3); // down 3 points
  vertex(point.x + 14, point.y + 3); // right 11 points
  vertex(point.x + 14, point.y + 2); // 1 right and 1 down
  vertex(point.x + 14, point.y - 17); // down 19 points
  vertex(point.x + 13, point.y - 18); // 1 left and 1 down
  vertex(point.x + 2, point.y - 18); // left 11 points
  vertex(point.x + 2, point.y - 15); // down 3 points
  vertex(point.x + 13, point.y - 15); // right 11 points
  vertex(point.x + 13, point.y - 12); // up 3 points
  vertex(point.x + 10, point.y - 12); // 1 right and 1 up
  vertex(point.x + 10, point.y + 7); // right 3 points
  vertex(point.x + 10, point.y + 26); // up 19 points
  vertex(point.x + 7, point.y + 26); // left 3 points
  vertex(point.x + 4, point.y + 23); // 1 left and 1 up
  vertex(point.x + 4, point.y + 20); // up 3 points
  vertex(point.x, point.y); // back to the beginning
  endShape(CLOSE);
}

// Add the remaining Shape functions here...
