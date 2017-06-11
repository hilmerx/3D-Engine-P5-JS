function Cell(x,y,z){
  this.i = [x,y]
  this.x = x * w
  this.y = y * w
  this.z = z+random(0,100);

  this.newLine = function(){
  }


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

    for (var i = 0; i<grid.length; i++){
      for (var j = 0; j<grid[i].length; j++){
        grid[i][j].y+=speed
      }
    }

}
function  popLine(){
  if(popCheck>=w){
    for (var i = 0; i<grid.length; i++){
      grid[i].x()
    }
    popCheck=0
  }
}

function checkPops(){
  if(popCheck>=w){
  popLine()
  addLine()
  popCheck=0

  }

}

  function  popLine(){
      for (var i = 0; i<grid.length; i++){
        grid[i].pop()

    }

  }

  function addLine(){
    if(popCheck>=w){
      var newGridLine =[]

      for (var i = 0; i<2; i++){
        for (var j = 0; j<rows; j++){
            newGridLine[j] = new Cell(i,j,0)
        }
      }

        for (var i = 0; i<grid.length; i++){
          console.log(newGridLine[i])
          // grid[i].unshift(newGridLine[i])
          // grid[i][0].z-=200

      }
    }
  }
