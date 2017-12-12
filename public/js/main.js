let rows = 23
let cols = 22
let w = 500
let speed = 5
let popCheck = 0
let noiseSize = 2000

let newLineY = 0 - w
let cw
let ch
let cd
let mpx
let mpy
let mpz
let startProjZ
let dim
let img

let loadedSound = false
let startPlayAtLoad = false
let shockWaveOn = false
let shockWavePos = 0

let stars = []
let star
let starSpeed = 0.01

let spectrum
let spectrumDefined


function setup(){
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);
    makeBgImage(180, 180, 180)

    cd = 1000
    mpx = width / 2
    mpy = height / 2
    mpz = cd / 2
    startProjZ = (rows - 1) * w
    dim = width / 2

    grid = new Make2DArray(cols,rows)
    shockGrid = new Make2DArray(cols,rows)

    for (let j = 0; j < rows + 1; j++){
        for (let i = 0; i < cols + 1; i++){
            shockGrid[i][j] = new shockCell(0)
        }
    }

    createStars()
    createTerrain()
    loadSoundTrack()
}

function draw(){
    background(99)
    image(img, -100, 0, img.width * width / 4, img.height)
    stroke(0, 0, 0)

    spectrum = fft.analyze().reverse()

    drawBg()
    drawAllStars()

    drawTerrain(cols * - w / 2, -500, startProjZ, 1)

    moveObject()
    checkPops()
    shockWave()
}



function drawBg(x, y) {
    noStroke()
    fill(79, 79, 79)
    rect(0, height / 3 * 2, width, height / 3)
}

function makeBgImage(r, g, b){
    img = createImage(width, height * 2);
    img.loadPixels();
    for(let x = 0; x < 5; x++) {
        for(let y = 0; y < img.height; y++) {
            let a = map(y, 0, img.height, 400, 0);
            img.set(x, y / 2, [r, g, b, a - 90]);
        }
    }

    img.updatePixels();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    mpx = width / 2
    mpy = height / 2

    if(!shockWaveOn){
        makeBgImage(225, 225, 225)
    } else {
        makeBgImage(140, 85, 85)
    }
}


function drawStar(star) {
        let newX = star.x / star.z
        let newY = star.y / star.z

        let starsize = (120/star.z)-1

        newX += width / 2
        newY += height / 1.6
        noStroke()
        fill(255)
        ellipse(newX, newY, starsize, starsize)
}

function drawAllStars() {
        for (let i = stars.length-1; i > 0; i--){
        const e = stars[i]
        drawStar(e)
        e.z -= starSpeed
        if (e.z < 0) {
            stars.splice(i, 1)
            stars.push(new Star())
            stars.sort((a, b) => {
                return a.z - b.z
            })
        }
    }
}


function drawTerrain(x, y, z, uod){

    for (var i = grid.length-2; i >= (grid.length - 2) / 2; i--){
        beginShape(TRIANGLE_STRIP);
        for (var j = 0; j < grid[i].length; j++){
            dot3d(grid[i][j], x, y, z, uod, i, j)
            dot3d(grid[i + 1][j], x, y , z, uod,(i + 1), j)
        }
        endShape()
    }
    for (var i = 0; i < (grid.length - 2) / 2; i++){
        beginShape(TRIANGLE_STRIP);
        for (var j = 0; j < grid[i].length; j++){
            dot3d(grid[i][j], x, y, z, uod, i, j)
            dot3d(grid[i + 1][j], x, y ,z, uod, (i + 1), j)
        }
        endShape()
    }
}


function createStars() {
    for (let i = 0; i < 1500; i++){
            stars.push(new Star())
    }

    stars.sort((a, b) => {
            return a.z - b.z;
    })

}

function createTerrain() {
    for (let j = 0; j < rows + 1; j++){
        for (let i = 0; i < cols + 1; i++){
            grid[i][j] = new Cell(i, j, 0)
            let updownup = (Math.abs(i - (cols / 2)) / 4 * -1)
            if (updownup === 0) {
                updownup =- 0.16
            }
            grid[i][j].z = noise(i * random(), j * random()) * noiseSize * updownup
        }
    }
}

function loadSoundTrack() {
    sound = loadSound(
        './mp3/soundtrack.mp3',
        function() {
            console.log("sound loaded")
            loadedSound=true
            $(".progress").hide() 
            $(".percent").hide()

            if(startPlayAtLoad){
                startPlay()
            }
        },
        function() {
        },
        function(e) {console.log(e)
            let loaded = e * 100
            $('.percent').width(loaded +  "%")
        }
    )

    fft = new p5.FFT(0.9, 32)
    sound.amp(0.1)
}

function shockCell(z){
    this.z = z
}
