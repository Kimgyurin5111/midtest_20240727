let img;

function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, width, height);

  //1
  beginShape();
  fill(202, 174, 160);
  noStroke();
  vertex(571, 345);
  vertex(617, 335);
  vertex(568, 316);
  endShape(CLOSE);

  //2
  beginShape();
  fill(219, 193, 178);
  noStroke();
  vertex(609, 275);
  vertex(617, 335);
  vertex(568, 316);
  endShape(CLOSE);

  //3
  beginShape();
  fill(211, 183, 169);
  noStroke();
  vertex(608.7, 275);
  vertex(617.3, 335.5);
  vertex(673, 310);
  endShape(CLOSE);

  //4
  beginShape();
  fill(141, 157, 180);
  noStroke();
  vertex(609.5, 275.2);
  vertex(653, 229);
  vertex(672.8, 310);
  endShape(CLOSE);

  //5
  beginShape();
  fill(223, 196, 189);
  noStroke();
  vertex(609, 275);
  vertex(568, 316);
  vertex(547, 255);
  endShape(CLOSE);

  //6
  beginShape();
  fill(159, 167, 185);
  noStroke();
  vertex(609, 275);
  vertex(591, 209);
  vertex(546, 254.7);
  endShape(CLOSE);

  //7
  beginShape();
  fill(147, 160, 170);
  noStroke();
  vertex(609.2, 275.5);
  vertex(591, 209);
  vertex(653, 229);
  endShape(CLOSE);

  //8
  beginShape();
  fill(168, 178, 187);
  noStroke();
  vertex(676, 163);
  vertex(591, 209);
  vertex(653, 229);
  endShape(CLOSE);

  // 9
  beginShape();
  fill(165, 175, 195);
  noStroke();
  vertex(676, 163);
  vertex(591, 209);
  vertex(583, 148.5);
  endShape(CLOSE);

  // 10
  beginShape();
  fill(157, 162, 180);
  noStroke();
  vertex(676, 163);
  vertex(671, 118);
  vertex(583, 148.5);
  endShape(CLOSE);

  //11
  beginShape();
  fill(134, 143, 152);
  noStroke();
  vertex(676, 163);
  vertex(671, 118);
  vertex(739, 126);
  endShape(CLOSE);

  //12
  beginShape();
  fill(146, 166, 191);
  noStroke();
  vertex(676, 163);
  vertex(758, 229);
  vertex(739, 126);
  endShape(CLOSE);

  //13
  beginShape();
  fill(133, 153, 186);
  noStroke();
  vertex(676, 163);
  vertex(758, 229);
  vertex(653, 229);
  endShape(CLOSE);

  //14
  beginShape();
  fill(125, 146, 175);
  noStroke();
  vertex(653, 229);
  vertex(758, 229);
  vertex(755, 270);
  endShape(CLOSE);

  //15
  beginShape();
  fill(98, 131, 166);
  noStroke();
  vertex(653, 229);
  vertex(696, 271);
  vertex(755, 270);
  endShape(CLOSE);

  //16
  beginShape();
  fill(58, 83, 105);
  noStroke();
  vertex(653, 229);
  vertex(696.3, 271);
  vertex(707.3, 334.8);
  vertex(673, 310.3);
  endShape(CLOSE);

  //17
  beginShape();
  fill(200, 163, 140);
  noStroke();
  vertex(673, 310.3);
  vertex(707.3, 334.8);
  vertex(644.9, 360);
  endShape(CLOSE);

  //18
  beginShape();
  fill(47, 90, 127);
  noStroke();
  vertex(785.5, 327.3);
  vertex(696, 271);
  vertex(707.3, 334.8);
  endShape(CLOSE);

  //19
  beginShape();
  fill(10, 22, 34);
  noStroke();
  vertex(785.6, 327.3);
  vertex(752.7, 377.9);
  vertex(707, 334);
  endShape(CLOSE);

  //20
  beginShape();
  fill(57, 91, 137);
  noStroke();
  vertex(785.5, 327.3);
  vertex(695.8, 271);
  vertex(755, 270);
  endShape(CLOSE);

  //21
  beginShape();
  fill(35, 80, 119);
  noStroke();
  vertex(785.6, 327.3);
  vertex(818.3, 266);
  vertex(755.1, 270);
  endShape(CLOSE);

  //22
  beginShape();
  fill(19, 60, 80);
  noStroke();
  vertex(785.6, 327.3);
  vertex(818.5, 266);
  vertex(847, 319.5);
  endShape(CLOSE);

  //23
  beginShape();
  fill(106, 126, 150);
  noStroke();
  vertex(758, 229);
  vertex(818.3, 266);
  vertex(755, 270);
  endShape(CLOSE);

  //24
  beginShape();
  fill(117, 139, 163);
  noStroke();
  vertex(758, 229);
  vertex(818.3, 266);
  vertex(825, 214);
  endShape(CLOSE);

  //25
  beginShape();
  fill(128, 149, 176);
  noStroke();
  vertex(758, 229);
  vertex(739, 126);
  vertex(825, 214);
  endShape(CLOSE);
}
