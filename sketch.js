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
  if(mouseIsPressed===true){
    console.log(mouseX,mouseY)
  }
  beginShape();
  vertex(571,345);
  vertex(616,334);
  vertex(568,316);
  endShape(CLOSE)
  
}