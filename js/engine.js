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



function dot3d(l,x1,y1,z1,upordown){

  var newX, newY,newZ, x ,y,zfx1


  this.startX = x1
  this.startY = y1+(mouseY*-0.15)+400
  this.startZ = z1


  newX = l.x + this.startX
  newY = (l.z - this.startY)*upordown
  newZ = (l.y*-1) + this.startZ

  var zfx1 = cd/(newZ+cd)



  x =  mpx - (newX *zfx1)
  y =  mpy + (newY *zfx1)



  stroke(50)
  fill(200+newZ/10,200+newZ/100,100+newZ/100)
  // stroke(2+newZ/10,200+newZ/1000,100-newZ/100)
  // noFill()


  vertex(x,y)
  // ellipse(x,y,40*zfx1,40*zfx1)

  //
  // stroke(50)
  // fill(0)

  var textgrid = l.i.toString()
  // text(textgrid,x  ,y)
  order++

}
