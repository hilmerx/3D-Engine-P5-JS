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

var loadedSound = false;
var startPlayAtLoad = false;
var shockWaveOn = false
var shockWavePos = 0


var spectrum
var spectrumDefined

function preload(){
}


function setup(){
  sound = loadSound('./mp3/soundtrack.mp3', function() {console.log("sound loaded")
  loadedSound=true
  $(".progress").hide();
  $(".percent").hide();

  if(startPlayAtLoad){startPlay()}
},function() {
},function(e) {console.log(e)
  var loaded = e*100
  $('.percent').width(loaded +  "%");

});

  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  makeBgImage(180,180,180)

  cd = 1000;
  mpx = width/2
  mpy = height/2
  mpz = cd/2
  startProjZ = (rows-1)*w
  dim = width/2;

  // mic = new p5.AudioIn();
  // mic.start();
  fft = new p5.FFT(0.9,32);
  // fft.setInput(mic);
  sound.amp(0.1);
  // sound.loop();
noTint()



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
  background(99)
  // background(153,204,255)
  // if(!shockWaveOn){
    image(img, -100, 0, img.width*width/4, img.height);
  // }

  stroke(0,0,0)
  order = 0


  spectrum = fft.analyze().reverse() ;
  // spectrumDefined = fft.getEnergy("lowMid")
  // console.log('  VAR SPECTRUM = FFT.ANALYZE()',    spectrum = fft.analyze())

  showBg()



  showTerrain(cols*-w/2, -500, startProjZ,1)


  moveObject()
  checkPops()
  // showArray()
  shockWave()

}



function showBg(x, y) {

    noStroke()
    fill(79,79,79)
    rect(0,height/3*2,width,height/3)

}

function makeBgImage(r,g,b){

  img = createImage(width, height*2);
  img.loadPixels();
  for(var x = 0; x < 5; x++) {
    for(var y = 0; y < img.height; y++) {
      var a = map(y, 0, img.height, 400, 0);
      // img.set(x, y/2, [153,204,255, a+20]);
      img.set(x,y/2, [r,g,b, a-90]);

      // img.set(x, y/2, [45,45,122, a]);

    }
  }
  img.updatePixels();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mpx = width/2
  mpy = height/2
  if(!shockWaveOn){
    makeBgImage(225,225,225)
  }else{
    makeBgImage(140,85,85)
  }
}
