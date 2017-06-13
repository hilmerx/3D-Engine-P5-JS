function shockCell(z){
  this.z = z
}

function keyPressed() {
  if (keyCode === 32) {
    shock()
  }
}
function mouseClicked() {
  // if (keyCode === 32) {
    shock()
  // }
}

// var= 0

var newShockGridLine =[]
var quakeVal=0
function shockWave(){

    for (var i = 0; i<cols+1; i++){
      shockGrid[i].pop()
    }

    for (var j = 0; j<cols+1; j++){
        newShockGridLine[j] = new shockCell(quakeVal)
    }

    for (var i = 0; i<cols+1; i++){
      shockGrid[i].unshift(newShockGridLine[i])
  }
  quakeVal=0
}

// val shockOn=0;
function shock(){
  quakeVal=300;
}
