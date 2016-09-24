function setup() {
  createCanvas(200, 200);
  background(0);

  var i =1;
  while (i < 40) {
          stroke(255)
   line(5,i*5,i*5,5);
   line(195,200-i*5,200-i*5,195);
   i = i + 1;
  } 
}
