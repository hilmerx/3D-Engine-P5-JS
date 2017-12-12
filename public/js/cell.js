function Cell(x,y,z){
    this.i = [x,y]
    this.x = x * w
    this.y = y * w
    this.z = z+random(0,200);
}


function  moveObject(){
    popCheck += speed
    startProjZ -= speed
}

function checkPops(){
    if(popCheck >= w){
        popLine()
        addLine()
        popCheck = 0
    }
}

function  popLine(){
        for (var i = 0; i<cols+1; i++){
            grid[i].pop()
        }
}

function addLine(){
    if(popCheck >= w){
        var newGridLine = []

        for (var j = 0; j < cols+1; j++){
            newGridLine[j] = new Cell(j, newLineY / w, 0)
            var updownup = Math.abs(j - (cols / 2)) / 4 * -1

            if(updownup === 0){
                updownup =- 0.16
            }

            newGridLine[j].z = noise(random(50)) * noiseSize * updownup
        }

        for (var i = 0; i < cols + 1; i++){
            grid[i].unshift(newGridLine[i])
        }
        console.log(grid);
    }

    newLineY -= w

}

function Make2DArray(cols, rows){
    var arr = new Array(cols + 1);
    for (var i = 0; i < arr.length; i++){
        arr[i] = new Array(rows + 1);
    }
    return arr;
}


