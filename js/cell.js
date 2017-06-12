function Cell(x,y,z){
  this.i = [x,y]
  this.x = x * w
  this.y = y * w
  this.z = z+random(0,200);
  // this.z = z;
}



function myline3d(x1,y1,z1,x2,y2,z2){
  this.x1 = x1
  this.y1 = y1
  this.z1 = z1
  this.x2 = x2
  this.y2 = y2
  this.z2 = z2
}

function  moveObject(){

  popCheck+=speed
  startProjZ-=speed

}

function checkPops(){
  if(popCheck>=w){
    // console.log("pop")
  popLine()
  addLine()
  popCheck=0

  }

}

  function  popLine(){
      for (var i = 0; i<cols+1; i++){
        grid[i].pop()
        // grid.pop()
      }
        // console.log(grid[i])

    // }

  }

  newLineY=0-w
  console.log(newLineY)
  function addLine(){
    if(popCheck>=w){
      var newGridLine =[]

      // for (var i = 0; i<rows+1; i++){
        for (var j = 0; j<cols+1; j++){
            newGridLine[j] = new Cell(j,newLineY/w,0)
            newGridLine[j].z = noise(random(50))*noiseSize

        }
      // }
      console.log(newGridLine)

        for (var i = 0; i<cols+1; i++){
          // console.log(newGridLine)
          grid[i].unshift(newGridLine[i])
          // grid[i][0].z-=200
      }
    }

    newLineY-=w

  }

function showTerrain(x,y,z,uod){

  for (var i = grid.length-2; i>=(grid.length-2)/2; i--){
    beginShape(TRIANGLE_STRIP);
    for (var j = 0; j<grid[i].length; j++){
      dot3d(grid[i][j], x, y, z,uod)
      dot3d(grid[i+1][j], x, y ,z,uod)
      // console.log(j, i)
    }
    endShape()
  }
  for (var i = 0; i<(grid.length-2)/2; i++){
    beginShape(TRIANGLE_STRIP);
    for (var j = 0; j<grid[i].length; j++){
      dot3d(grid[i][j], x, y, z,uod)
      dot3d(grid[i+1][j], x, y ,z,uod)
      // console.log(j, i)
    }
    endShape()
  }


}

function Make2DArray(cols, rows){
  var arr = new Array(cols+1);
  for (var i=0; i<arr.length;i++){
    arr[i] = new Array(rows+1);
  }
  return arr;
}


function showArray(){
  // text("hej", 100, 100)
  // fill(200,200,0)
  fill(0,0,255)

  stroke(0,0,255)
  for (var j = 0; j<rows+1; j++){
    for (var i = 0; i<cols+1; i++){
      text(grid[i][j].x, j*50+10, i*50+10)
      text(grid[i][j].y, j*50+50, i*50+10)
      // text(grid[i][j].z, grid[i][j].x/5+90, grid[i][j].y/5+10)

    }
  }
}
