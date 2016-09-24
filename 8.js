function setup() {
  createCanvas(200, 200);
  background(255);
}
function mouseMoved() {
  ellipse(mouseX, mouseY, 50, 50);
   ellipse(mouseX-10, mouseY-10, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);   
 arc(mouseX, mouseY+15, 15, 10, 0,PI);
   return false;
}
