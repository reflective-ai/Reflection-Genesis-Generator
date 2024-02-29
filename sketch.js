const shapeFunctions = [];
let shapesC, shapesD, shapesF, shapesH, shapesK, shapesM;
let posC, posD, posF, posH, posK, posM;
let straightLines1, straightLines2, straightLines3, straightLines4, straightLines5, straightLines6, straightLines7, straightLines8, straightLines9, straightLines10, straightLines11, straightLines12;
let circles1, circles2;

const width = 2000;
const height = 2000;

// colors
const blue_green = "#0d98ba";
const vibrant_green = "#00ff00";
const dark_gray_50 = [169, 169, 169, 50];
const light_gray_50 = [211, 211, 211, 50];
const gray_50 = [128, 128, 128, 50];
const off_white_50 = [255, 255, 228, 50];
const black_50 = [0, 0, 0, 50];

// stroke sizes
const pointTwoInches = 20;
const pointZeroTwoInches = 2;


function setup() {
  createCanvas(width, height, SVG);
  noLoop();
}

function preload() {
  // Load the files. Each file contains the instructions copy pasted from the book
  shapesC = loadStrings("./resources/cshapes.txt");
  shapesD = loadStrings("./resources/dshapes.txt");
  shapesF = loadStrings("./resources/fshapes.txt");
  shapesH = loadStrings("./resources/hshapes.txt");
  shapesK = loadStrings("./resources/kshapes.txt");
  shapesM = loadStrings("./resources/mshapes.txt");
  posC = loadStrings("./resources/cpositions.txt");
  posD = loadStrings("./resources/dpositions.txt");
  posF = loadStrings("./resources/fpositions.txt");
  posH = loadStrings("./resources/hpositions.txt");
  posK = loadStrings("./resources/kpositions.txt");
  posM = loadStrings("./resources/mpositions.txt");
  straightLines1 = loadStrings("./resources/straightlines1.txt");
  straightLines2 = loadStrings("./resources/straightlines2.txt");
  straightLines3 = loadStrings("./resources/straightlines3.txt");
  straightLines4 = loadStrings("./resources/straightlines4.txt");
  straightLines5 = loadStrings("./resources/straightlines5.txt");
  straightLines6 = loadStrings("./resources/straightlines6.txt");
  straightLines7 = loadStrings("./resources/straightlines7.txt");
  straightLines8 = loadStrings("./resources/straightlines8.txt");
  straightLines9 = loadStrings("./resources/straightlines9.txt");
  straightLines10 = loadStrings("./resources/straightlines10.txt");
  straightLines11 = loadStrings("./resources/straightlines11.txt");
  straightLines12 = loadStrings("./resources/straightlines12.txt");
  circles1 = loadStrings("./resources/circles1.txt");
  circles2 = loadStrings("./resources/circles2.txt");
}

function draw() {
  // Populate the array of shape functions
  [shapesC, shapesD, shapesF, shapesH, shapesK, shapesM].forEach((resource) => {
    resource.forEach((line) => {
      if (line.includes("Shape")) {
        createShapeFunction(line);
      }
    });
  });

  stroke(blue_green);
  fill(blue_green);
  square(375, 375, 1250);

  stroke(dark_gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines1);

  stroke(light_gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines2);

  stroke("black");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawShapes(posC);

  stroke("white");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawShapes(posD);

  stroke(dark_gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines3);

  stroke(gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines4);

  stroke(off_white_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines5);

  stroke("gray");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawShapes(posF);

  stroke("white");
  strokeWeight(pointZeroTwoInches);
  drawLines(straightLines6);

  stroke("white");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawCircles(circles1);

  stroke("red");
  noFill();
  strokeWeight(pointZeroTwoInches);
  drawShapes(posH);

  stroke("red");
  strokeWeight(pointZeroTwoInches);
  drawLines(straightLines7);

  stroke("red");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawCircles(circles2);

  stroke(black_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines8);

  stroke(dark_gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines9);

  stroke(gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines10);

  stroke(light_gray_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines11);

  stroke(off_white_50);
  strokeWeight(pointTwoInches);
  drawLines(straightLines12);

  stroke(vibrant_green);
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawShapes(posK);

  stroke("white");
  strokeWeight(pointZeroTwoInches);
  noFill();
  drawShapes(posM);

  stroke("white");
  strokeWeight(pointZeroTwoInches);
  noFill();
  square(375, 375, 1250);

}

function drawCircles(pos) {
  const circles = pos
    .join(" ") // Join all lines into one string
    .replaceAll("\\s{2,}", " ") // Clean up extra spaces
    .match(/\d+,\d+.with.a.radius.of.\d+/g); // Match all circles, ex: 983,1086 with a radius of 169
  circles.forEach((value) => {
    const [x, y, r] = value.split(/.with.a.radius.of.|,/); // Split circle into x, y and r
    try {
      circle(parseInt(x), parseInt(y), 2 * parseInt(r));
    } catch (error) {
      console.error(`Error drawing figure: Missing ${type}`);
    }
  });
}
function drawLines(pos) {
  const lines = pos
    .join(" ") // Join all lines into one string
    .replaceAll("\\s{2,}", " ") // Clean up extra spaces
    .match(/\d+,\d+.to.\d+,\d+/g); // Match all lines, ex 1060,480 to 1265,685
  lines.forEach((values) => {
    const [x1, y1, x2, y2] = values.split(/.to.|,/); // Split line into x1, y1, x2, and y2
    line(x1, y1, x2, y2);
  });
}

function drawShapes(pos) {
  const figures = pos
    .join(" ")// Join all lines into one string
    .replaceAll("\\s{2,}", " ") // Clean up extra spaces
    .match(/[c,d,f,h,k,m]\d+_0.at.\d+,\d+/g); // Match all figures, ex c1_0 at 100,100
  figures.forEach((figure) => {
    const [type, x, y] = figure.split(/.at.|,/); // Split figure into type, x, and y
    try {
      shapeFunctions[type]({ x: parseInt(x), y: parseInt(y) });
    } catch (error) {
      console.error(`Error drawing figure: Missing ${type}`);
    }
  });
}

function createShapeFunction(instructions) {
  // Extract function name
  const functionName = instructions.split(":")[0].trim().split(" ")[1].trim();

  // Extract and parse instructions
  const instructionList = instructions
    .split(":")[1]
    .trim()
    .split(",")
    .map((s) => s.trim());

  // Parse instructions to generate vertex and next point
  let nextPoint = { x: 0, y: 0 };
  const vertexList = [];
  for (let i = 0; i < instructionList.length; i++) {
    const instruction = instructionList[i];
    if (
      instruction.includes("Start at first point the then draw a line down")
    ) {
      const points = parseInt(instruction.split(" ")[10]);
      nextPoint.y += points;
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("directly")) {
      const pointsX = parseInt(instruction.split(" ")[4]);
      const directionX = instruction.split(" ")[5].trim();
      const pointsY = parseInt(instruction.split(" ")[7]);
      const directionY = instruction.split(" ")[8].trim();
      if (directionX === "right") {
        nextPoint.x += pointsX;
      } else if (directionX === "left") {
        nextPoint.x -= pointsX;
      } else {
        console.error("Invalid directionX: " + directionX);
      }
      if (directionY === "down") {
        nextPoint.y += pointsY;
      } else if (directionY === "up") {
        nextPoint.y -= pointsY;
      } else {
        console.error("Invalid directionY: " + directionY);
      }
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("down")) {
      const points = parseInt(instruction.split(" ")[1]);
      nextPoint.y += points;
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("right")) {
      const points = parseInt(instruction.split(" ")[1]);
      nextPoint.x += points;
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("left")) {
      const points = parseInt(instruction.split(" ")[1]);
      nextPoint.x -= points;
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("up")) {
      const points = parseInt(instruction.split(" ")[1]);
      nextPoint.y -= points;
      vertexList.push(
        `vertex(point.x + ${nextPoint.x}, point.y + ${nextPoint.y});`
      );
    } else if (instruction.includes("finish by going back to the beginning")) {
      // Do nothing
    } else {
      console.error(`Invalid instruction in ${functionName}: ${instruction}`);
    }
  }

  // Create new function
  const newFunction = new Function(
    "point",
    `beginShape();
    vertex(point.x, point.y); // start point
    ${vertexList.join("\n")}
    endShape(CLOSE); // back to the beginning`
  );

  // Add new function to shapeFunctions
  shapeFunctions[functionName] = newFunction;
}
