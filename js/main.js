console.log("-----------------")
console.log("-    HILME3D    -")
console.log("-----------------")
console.log("3D FOR YOU AND ME")
console.log("-----------------")

var rows = 18
var cols = 20
var w = 500
var speed = 10
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
var dim
var img





function setup(){
  createCanvas(windowWidth, windowHeight);
  cw = width;
  ch = height;
  cd = 1000;
  mpx = cw/2
  mpy = ch/2
  mpz = cd/2
  startProjZ = (rows-1)*w
  dim = width/2;
  ellipseMode(RADIUS);
  makeBg();
  makeBgImage()
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
      var updownup = Math.abs(i-(cols/2))/4*-1
      // console.log(i, updownup)
      grid[i][j].z = noise(i*random(),j*random())*noiseSize*updownup
    }
  }

}

function draw(){
  background(0)
  // background(153,204,255)
  // background(0)

  image(img, 0, 0);

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
  // makeBg()
  showTerrain(cols*-w/2, -400, startProjZ,1)


  moveObject()
  checkPops()
  // showArray()

}



function makeBg(x, y) {
    noStroke()
    fill(153,204,255)
    rect(0,0,width,height/3*2)
    fill(114,191,91)
    rect(0,height/3*2,width,height/3)

}

function makeBgImage(){

  img = createImage(windowWidth, windowHeight*2);
  img.loadPixels();
// console.log(img.width,img.height)
  for(var x = 0; x < img.width; x++) {
    for(var y = 0; y < img.height; y++) {
      var a = map(y, 0, img.height, 400, 0);
      img.set(x, y/2, [153,204,255, a+20]);
      img.set(x, y/2, [225,225,225, a+10]);

      // img.set(x, y/2, [45,45,122, a]);

    }
  }
  img.updatePixels();

}
