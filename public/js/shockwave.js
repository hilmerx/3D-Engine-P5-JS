function shockCell(z){
    this.z = z
}

var newShockGridLine =[]

function shockWave(){
    if(shockWaveOn){
        starSpeed = 0.2;
        for (var i = 0; i<cols+1; i++){
            shockGrid[i].pop()
        }
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

        for (var j = 0; j<cols+1; j++){
                newShockGridLine[j] = new shockCell(0)
        }

        for (var i = 0; i<cols+1; i++){
            shockGrid[i].unshift(newShockGridLine[i])
        }
    }
}

