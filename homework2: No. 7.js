function setup() {
  createCanvas(200, 200);
  background(0);

  var i =1;
  while (i < 52) {
          stroke(255)
   line(i*5,5,i*5,195);
   line(5,i*5,195,i*5);
    i = i + 1;
  } 
}
   
