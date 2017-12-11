function shockCell(z){
  this.z = z
}

function keyPressed() {
  if (keyCode === 32) {

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
  if(shockWaveOn){
    starSpeed = 0.2;
    for (var i = 0; i<cols+1; i++){
      shockGrid[i].pop()
    }

    // console.log(spectrum)
    for (var j = 0; j<cols+1; j++){
        newShockGridLine[j] = new shockCell(spectrum[12]*3-290)
    }

    for (var i = 0; i<cols+1; i++){
      shockGrid[i].unshift(newShockGridLine[i])
    }
  }
  else{
    starSpeed = 0.01;
    for (var i = 0; i<cols+1; i++){
      shockGrid[i].pop()
    }

    // console.log(spectrum)
    for (var j = 0; j<cols+1; j++){
        newShockGridLine[j] = new shockCell(0)
    }

    for (var i = 0; i<cols+1; i++){
      shockGrid[i].unshift(newShockGridLine[i])
    }


  }

  // quakeVal=0
}

// val shockOn=0;
function shock(){
  // quakeVal=300;
}
