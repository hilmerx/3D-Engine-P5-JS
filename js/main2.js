function Make2DArray(cols, rows){
  var arr = new Array(cols);
  for (var i=0; i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var cols,rows;
var scl = 40;
var w = 600;
var h = 600;

function setup(){
  createCanvas(600, 600);
  cols = w/ scl;
  rows = h / scl;
  // img = loadImage("./logo.jpg");

}

function draw(){
  background(123)
  noFill()
  stroke(123)
  // translate(width/2,height/2);
  // translate(-w/2,-h/2);

  fill(222)

  // rotateX(PI/3)
  // texture(img)
  //  stroke(255)



  for (var y = 0; y<cols; y++){
    beginShape(TRIANGLE_STRIP);

    for (var x = 0; x<rows; x++){
      vertex(x*scl,y*scl)
      vertex(x*scl,(y+1)*scl)

    }
    endShape()

  }

}
