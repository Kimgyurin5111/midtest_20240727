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
  
    //9
  beginShape();
  fill(50);
  noStroke();
  vertex(676, 163);
  vertex(591, 209);
  vertex(582, 148);
  endShape(CLOSE);
}
