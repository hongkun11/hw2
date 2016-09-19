function setup() {
  createCanvas(200, 200);
  background(255);

  var i = 0;
  while (i < 17) {
    line(10+i*10, 10+i*10, 20+i*10, 10+i*10);
    i = i + 1;
  }    
}
