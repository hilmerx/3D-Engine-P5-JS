function Make2DArray(cols, rows){
  var arr = new Array(cols);
  for (var i=0; i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var cols = 40
var rows = 40
var cw = 1800;
var ch = 1100;
var cd = 1000;
var mpx = cw/2
var mpy = ch/2
var mpz = cd/2
var w = 100






function setup(){
  createCanvas(windowWidth, windowHeight);
  // line1 = new myline(100,20,20,0.5)
  line1 = new myline3d(250,250,-490,-250,250,-490)
  line2 = new myline3d(250,250,500,-250,250,500)
  line3 = new myline3d(-250,250,-490,-250,250,500)
  line4 = new myline3d(250,250,-490,250,250,500)
  line5 = new myline3d(250,-250,-490,-250,-250,-490)
  line6 = new myline3d(250,-250,500,-250,-250,500)
  line7 = new myline3d(-250,-250,-490,-250,-250,500)
  line8 = new myline3d(250,-250,-490,250,-250,500)
  line9 = new myline3d(250,250,0,-250,250,0)
  line10 = new myline3d(250,-250,0,-250,-250,0)


  grid = new Make2DArray(cols,rows);
  for (var i = 0; i<grid.length; i++){
    for (var j = 0; j<grid[i].length; j++){

      // grid[i][j] = new Cell(i,j,500)
      grid[i][j] = new Cell(i,j,0)

    }
  }
console.log("grid",grid[0][0])

console.log("line",line6)

}

function draw(){
  background(0)
  noFill()
  stroke(0,256,0)
  // translate(width/2,height/2);
  // translate(-w/2,-h/2);

  // line(fpx-(line1.h/2)*line1.z,fpy-(line1.h/2)*line1.z,fpx+(line1.h/2)*line1.z, fpy+(line1.h/2)*line1.z)

  stroke(0,256,0)

/*  line3d(line1)
  line3d(line2)
  line3d(line3)
  line3d(line4)
  line3d(line5)
  line3d(line6)
  line3d(line7)
  line3d(line8)
  line3d(line9)
  line3d(line10)
*/
  for (var i = 0; i<grid.length; i++){
    beginShape(TRIANGLE_STRIP);

    for (var j = 0; j<grid[i].length; j++){
        // dot3d(grid[i][j], -250,-250, 500)
        dot3d(grid[i][j], -1800,-500,3000)

    }
    endShape()
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
  var arr = new Array(cols);

  for(var i = 0; i<grid.length; i++){
    arr[i] = new Cell(0,j,0)



  }

  for (var i = 0; i<grid.length; i++){
    grid[i].push(arr)
    grid[i].pop()
    // beginShape(TRIANGLE_STRIP);
    //
    // for (var j = 0; j<grid[i].length; j++){
    //     // dot3d(grid[i][j], -250,-250, 500)
    //     dot3d(grid[i][j], -1800,-500,3000)
    //
    // }
    // endShape()
  }

}
