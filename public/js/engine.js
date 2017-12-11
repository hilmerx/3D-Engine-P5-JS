function line3d(l){
  var x1 = x1
  var y1 = y1
  var x2 = x2
  var y2 = y2
  var zfx1 = cd/(l.z1+cd)
  var zfx2 = cd/(l.z2+cd)




  x1 = mpx + l.x1*zfx1
  y1 = mpy + l.y1*zfx1
  x2 = mpx + l.x2*zfx2
  y2 = mpy + l.y2*zfx2


  line(x1, y1, x2, y2)

}



function dot3d(l,x1,y1,z1,upordown,i,j){

  var newX, newY,newZ, x ,y,zfx1
  var sgz  = shockGrid[i][j].z

  // this.startX = x1-(mouseX-mpx)*0.05
  this.startY = y1+(mouseY-mpy)*0.25-200
  this.startX = x1
  // this.startY = y1
  this.startZ = z1


  newX = l.x + this.startX
  newY = (l.z - this.startY) * upordown - sgz
  newZ = (l.y*-1) + this.startZ

  var zfx1 = cd/(newZ+cd)



  x =  mpx - (newX *zfx1)
  y =  mpy + (newY *zfx1)



  // stroke(50)
  // console.log(newZ/100)
  stroke(160-newZ/100,160-newZ/100,160-(newZ/100)+sgz)

  // if(shockWaveOn){
  //   stroke(160-newZ/100,160-newZ/100,160-(newZ*5))
  // }
  // fill(200+newZ/100+100,200+newZ/100,100+newZ/100)
  fill(100+newZ/50+sgz,100+newZ/50,100+newZ/50)

  // stroke(2+newZ/10,200+newZ/1000,100-newZ/100)
  // noFill()


  vertex(x,y)
  // curveVertex(x,y)
  // ellipse(x,y,40*zfx1,40*zfx1)


  // stroke(50)
  // fill(0)

  var textgrid = l.i.toString()
  // text(textgrid,x  ,y)
  // order++

}

function projectile(){

  var newX, newY,newZ, x ,y,zfx1


  this.startX = 0
  this.startY = -500
  this.startZ = -500




  newX = l.x + this.startX
  newY = (l.z - this.startY)
  newZ = (l.y*-1) + this.startZ

  var zfx1 = cd/(newZ+cd)



  x =  mpx - (newX *zfx1)
  y =  mpy + (newY *zfx1)




}
