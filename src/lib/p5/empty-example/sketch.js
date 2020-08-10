function setup() {
  createCanvas(640, 480);
}

function draw() {
  var colorCode = random(mouseX,mouseY);
  if (colorCode < 100) {
    colorCode = colorCode+100;
  }
  if (colorCode > 250) {
    colorCode = colorCode - 250;
  } else if( colorCode > 500){
    colorCode = colorCode - 500;
  }
  else if (colorCode > 750) {
    colorCode = colorCode - 750;
  }
  colorCode = Math.floor(colorCode);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  fill(colorCode);
  console.log(colorCode);
  ellipse(mouseX, mouseY, 80, 80);
}
