let img;
//미리 로딩 준비
function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, width, height);
  if (mouseIsPressed === true) {
    console.log(mouseX, mouseY);
  }
  //1
  // beginShape();
  // fill(0);
  // noStroke();
  // vertex(571,345);
  // vertex(616,335);
  // vertex(568,316);
  // endShape(CLOSE)

  //2
  // beginShape();
  // fill(20);
  // noStroke();
  // vertex(609, 275);
  // vertex(616, 335);
  // vertex(568, 316);
  // endShape(CLOSE);

  //3
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(609,275);
  // vertex(616,335);
  // vertex(673,309);
  // endShape(CLOSE)

  //4
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(609, 275);
  // vertex(653, 229);
  // vertex(673, 309);
  // endShape(CLOSE);

  //5
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(609, 275);
  // vertex(568, 316);
  // vertex(547, 255);
  // endShape(CLOSE);

  //6
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(609, 275);
  // vertex(591, 209);
  // vertex(547, 255);
  // endShape(CLOSE);

  //7
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(609, 275);
  // vertex(591, 209);
  // vertex(653, 229);
  // endShape(CLOSE);

  //8
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(676, 163);
  // vertex(591, 209);
  // vertex(653, 229);
  // endShape(CLOSE);

  // 9
  // beginShape();
  // fill(50);
  // noStroke();
  // vertex(676, 163);
  // vertex(591, 209);
  // vertex(582, 148);
  // endShape(CLOSE);

  // 10
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(676, 163);
  // vertex(671, 118);
  // vertex(582, 148);
  // endShape(CLOSE);

  //11
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(676, 163);
  // vertex(671, 118);
  // vertex(739, 126);
  // endShape(CLOSE);

  //12
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(676, 163);
  // vertex(758, 229);
  // vertex(739, 126);
  // endShape(CLOSE);

  //13
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(676, 163);
  // vertex(758, 229);
  // vertex(653, 229);
  // endShape(CLOSE);

  //14
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(653, 229);
  // vertex(758, 229);
  // vertex(755, 270);
  // endShape(CLOSE);

  //15
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(653, 229);
  // vertex(696, 271);
  // vertex(755, 270);
  // endShape(CLOSE);

  //16
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(653, 229);
  // vertex(696, 271);
  // vertex(707, 334);
  // vertex(674, 309);
  // endShape(CLOSE);

  //17
  // beginShape();
  // fill(100);
  // noStroke();
  // vertex(674, 309);
  // vertex(707, 334);
  // vertex(645, 359);
  // endShape(CLOSE);
}
