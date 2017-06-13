console.log("-----------------")
console.log("-    HILME3D    -")
console.log("-----------------")
console.log("3D FOR YOU AND ME")
console.log("-----------------")

var rows = 23
var cols = 22
var w = 500
var speed = 5
var popCheck = 0
var order =0
var noiseSize=2000

var newLineY
var cw
var ch
var cd
var mpx
var mpy
var mpz
var startProjZ
var dim
var img


var shockWaveOn = false
var shockWavePos = 0





function setup(){
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  makeBgImage()

  cd = 1000;
  mpx = width/2
  mpy = height/2
  mpz = cd/2
  startProjZ = (rows-1)*w
  dim = width/2;


  grid = new Make2DArray(cols,rows);
  shockGrid = new Make2DArray(cols,rows);

  for (var j = 0; j<rows+1; j++){
    for (var i = 0; i<cols+1; i++){
      grid[i][j] = new Cell(i,j,0)
      var updownup = (Math.abs(i-(cols/2))/4*-1)
      if(updownup===0){updownup=-0.16}
        grid[i][j].z = noise(i*random(),j*random())*noiseSize*updownup
    }
  }
  for (var j = 0; j<rows+1; j++){
    for (var i = 0; i<cols+1; i++){
      shockGrid[i][j] = new shockCell(0)
    }
  }

}

function draw(){
  background(0)
  // background(153,204,255)

  image(img, 0, 0);

  stroke(0,0,0)
  order = 0

  makeBg()
  showTerrain(cols*-w/2, -500, startProjZ,1)


  moveObject()
  checkPops()
  // showArray()
  shockWave()
}



function makeBg(x, y) {
    noStroke()
    fill(79,79,79)
    rect(0,height/3*2,width,height/3)

}

function makeBgImage(){

  img = createImage(windowWidth, windowHeight*2);
  img.loadPixels();
  for(var x = 0; x < img.width; x++) {
    for(var y = 0; y < img.height; y++) {
      var a = map(y, 0, img.height, 400, 0);
      // img.set(x, y/2, [153,204,255, a+20]);
      img.set(x, y/2, [225,225,225, a-90]);

      // img.set(x, y/2, [45,45,122, a]);

    }
  }
  img.updatePixels();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mpx = width/2
  mpy = height/2
  makeBgImage()

}
