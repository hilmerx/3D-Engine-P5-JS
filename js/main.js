function Make2DArray(cols, rows){
  var arr = new Array(cols);
  for (var i=0; i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var cols = 20
var rows = 100
var cw = 1000;
var ch = 1000;
var cd = 1000;
var mpx = cw/2
var mpy = ch/2
var w = 100





function setup(){
  createCanvas(cw, ch);
  // line1 = new myline(100,20,20,0.5)
  line1 = new myline3d(250,250,-490,-250,250,-490)
  line2 = new myline3d(250,250,490,-250,250,490)
  line3 = new myline3d(-250,250,-490,-250,250,490)
  line4 = new myline3d(250,250,-490,250,250,490)
  line5 = new myline3d(250,-250,-490,-250,-250,-490)
  line6 = new myline3d(250,-250,490,-250,-250,490)
  line7 = new myline3d(-250,-250,-490,-250,-250,490)
  line8 = new myline3d(250,-250,-490,250,-250,490)

  grid = new Make2DArray(cols,rows);
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){
      grid[i][j] = new Cell(i,j)
    }
  }


}

function draw(){
  background(0)
  noFill()
  stroke(0,256,0)
  // translate(width/2,height/2);
  // translate(-w/2,-h/2);

  // line(fpx-(line1.h/2)*line1.z,fpy-(line1.h/2)*line1.z,fpx+(line1.h/2)*line1.z, fpy+(line1.h/2)*line1.z)

  stroke(0,256,0)

  line3d(line1)
  line3d(line2)
  line3d(line3)
  line3d(line4)
  line3d(line5)
  line3d(line6)
  line3d(line7)
  line3d(line8)
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){
      ellipse3d(grid[i][j])
    }
  }
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){
      ellipse3d2(grid[i][j])
    }
  }
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){
      ellipse3d3(grid[i][j])
    }
  }
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){
      ellipse3d4(grid[i][j])
    }
  }



/*
  for (var y = 0; y<cols; y++){
    beginShape(TRIANGLE_STRIP);

    for (var x = 0; x<rows; x++){
      vertex(x*scl,y*scl)
      vertex(x*scl,(y+1)*scl)

    }
    endShape()

  }*/

}
