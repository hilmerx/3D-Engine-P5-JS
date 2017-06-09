function line3d(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x1 = x1
  var y1 = y1
  var x2 = x2
  var y2 = y2
  var zfx1 = cd/(l.z1+cd)
  var zfx2 = cd/(l.z2+cd)
  if(l.z1!==l.z2){

  }



  x1 = mpx + l.x1*zfx1
  y1 = mpy + l.y1*zfx1
  x2 = mpx + l.x2*zfx2
  y2 = mpy + l.y2*zfx2

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  line(x1, y1, x2, y2)
  // line(x1, y1, x2, y2)

//

}

function ellipse3d(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x = x
  var y = y
  var zfx = cd/(l.z+1000+cd)

  x = mpx + (l.x-cd-1050)*zfx*-1
  y = mpy + ((l.y)*zfx)

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  ellipse(x, y, 3, 3)
  // line(x1, y1, x2, y2)

//

}
function ellipse3d2(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x = x
  var y = y
  var zfx = cd/(l.z+1000+cd)

  x = mpx + (l.x-cd-1050)*zfx
  y = mpy + ((l.y)*zfx)

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  ellipse(x, y, 3, 3)
  // line(x1, y1, x2, y2)

//

}
function ellipse3d3(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x = x
  var y = y
  var zfx = cd/(l.z+1000+cd)

  x = mpx + (l.x-cd-1050)*zfx
  y = mpy + ((l.y)*zfx)*-1

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  ellipse(x, y, 3, 3)
  // line(x1, y1, x2, y2)

//

}
function ellipse3d4(l){
  // line2 = new myline3d(x1 = 0, y1 = 250, z1 = -500,
                      //  x2 = 0, y2 = -250, z2 = -500)
  var x = x
  var y = y
  var zfx = cd/(l.z+1000+cd)

  x = mpx + (l.x-cd-1050)*zfx*-1
  y = mpy + ((l.y)*zfx)*-1

// console.log(x1,y1)
  // ellipse(x1,y1,20,20)
  // stroke(0,256,0)

  ellipse(x, y, 3, 3)
  // line(x1, y1, x2, y2)

//

}
