function setup() {
  createCanvas(400, 400);


colorMode(HSB);
var h=16;
noStroke();
for (b= 20; b<390; b=b+20){ 
        for (a=20;a<390;a=a+20){
  fill(h,100,100);
 h=h+1;
 ellipseMode(CENTER);
ellipse(a,b,18,18);
}
}
}

