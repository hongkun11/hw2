function setup() {
  createCanvas(200, 200);
  background(255);
}
var numberOfCircles = 0;
noLoop();
function draw(){
var a=random(255);
var e=random(255)
var f=random(255)
fill(a,e,f);
stroke(a,e,f);
var b=random(30)
var c=random(200)
var d=random(200)
ellipseMode(CENTER);
ellipse(c,d,b,b);
numberOfCircles = numberOfCircles + 1;
if (numberOfCircles > 200) {
        noLoop(a);
}
}
