
var rows = 15
var cols = 20
var w = 500
var speed = 20
var popCheck = 0
var order =0
var noiseSize=1000

var newLineY
var cw
var ch
var cd
var mpx
var mpy
var mpz
var startProjZ





function setup(){
  createCanvas(windowWidth, windowHeight);
  cw = width;
  ch = height;
  cd = 1000;
  mpx = cw/2
  mpy = ch/2
  mpz = cd/2
  startProjZ = 7000


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

  for (var j = 0; j<rows+1; j++){
    for (var i = 0; i<cols+1; i++){
      grid[i][j] = new Cell(i,j,0)
      grid[i][j].z = noise(i*random(),j*random())*noiseSize
    }
  }
  console.log(grid)
  // showTerrain(0, -250, 0)

}

function draw(){
  background(200)
  stroke(0,0,0)
  order = 0

  // line3d(line1)
  // line3d(line2)
  // line3d(line3)
  // line3d(line4)
  // line3d(line5)
  // line3d(line6)
  // line3d(line7)
  // line3d(line8)
  // line3d(line9)
  // line3d(line10)

  showTerrain(cols*-w/2, -500, startProjZ)
  moveObject()
  checkPops()
  // showArray()

}
