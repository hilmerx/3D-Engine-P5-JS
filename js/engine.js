function line3d(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
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

// console.log(x1,y1)
//   ellipse(x1,y1,20,20)
//   stroke(0,256,0)

  line(x1, y1, x2, y2)
  // line(x1, y1, x2, y2)

}

function dot3d(l,x1,y1,z1){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var newX, newY,newZ, x ,y,zfx1


  // this.startX = x1
  // this.startY = y1
  this.startX = (mouseX)-2350
  this.startY = (mouseY*-1)+500
  this.startZ = z1
  // console.log(l.x, l.y, l.z)

  newX = l.x + this.startX
  newY = l.z - this.startY
  newZ = (l.y - this.startZ)*-1
// newX = x1
// newY = y1
// newZ = z1


  // console.log(newX,newY,newZ)

  var zfx1 = cd/(newZ+cd)



  // console.log(newZ)
  x =  mpx + (newX *zfx1)
  y =  mpy + (newY *zfx1)

/*  var zfx1 = cd/(l.z+cd)
// -(w*m.y)+(m.y*m.x*40)
  x = mpx + this.startX*zfx1 +l.x*zfx1 -l.y*zfx1
  y = mpy + this.startY*zfx1 +l.z*zfx1 +l.y*zfx1
*/
// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)
  var textgridX = l.x.toString()
  var textgridY = l.y.toString()
  var textgrid = textgridX+", "+textgridY
  vertex(x,y)
  vertex(x-(100*zfx1),y)

  // var textZ = z.toString()

  // text(textgrid, x, y-10)
// console.log(this.startX, this.startY)
  // ellipse(x, y, 10*zfx1, 10*zfx1)
  // line(x1, y1, x2, y2)

//

}

function ellipse3d(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x = x
  var y = y
  var zfx = cd/(l.z+cd)
// console.log(zfx)
  x = (l.x*zfx)
  y = (l.y*zfx)

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  ellipse(x, y, 3, 3)
  // line(x1, y1, x2, y2)

//

}
function translate3d(l,x1,y1,z1,x2,y2,z2){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  this.x1 = x1
  this.y1 = y1
  this.z1 = z1
  this.x2 = x2
  this.y2 = y2
  this.z2 = z2
  var zfx

  // var x = l.x
  // var y = l.z-ch/2+250
  // var z = l.y

  zfx = cd/(l.y+cd)

// console.log(x,y,z)
  // console.log(l.z)
  x = (cw/2)+(this.x1)
  y = (ch/2)+(this.z1*zfx)
  // y = (l.y*zfx)

    // vertex(x,y)
  var textgrid = l.i.toString()
  text(textgrid, x, y)

    // ellipseMode(CENTER)
    ellipse(x, y, 10, 10)
    // ///*/*
    // var x = (m.x*w)-(w*m.y)+(m.y*m.x*40)
    // var y = ((m.y*w)+(500))
    //
    // zfx = cd/(m.z+cd)
    // x = ((x*zfx)+(zfx*250-cw/2)*-1)
    // y = ((y*zfx)+(zfx*250-ch/2)*-1)
    // vertex(x,y)

    // ellipse(x, y, 3, 3)




}
