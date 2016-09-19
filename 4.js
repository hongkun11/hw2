function setup() {
  createCanvas(200, 200);
  background(255);

  var i = 0;
  while (i < 85) {
    line(5+i*3, 10, 5+i*3, height-10);
    i = i + 1;
  }    
}
