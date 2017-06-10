function Cell(x,y,z){
  this.i = [x,y]
  // console.log()
  this.x = x * w
  this.y = y * w
  // this.x = (x*w)-(w*y)+(y*x*40)/**mpx/2*/
  // this.y = ((y*w)+(500))
  this.z = z+random(0,100);
}


function myline(h,x,y,z){
  this.h = h
  this.x = x
  this.y = y
  this.z = z
}


function myline3d(x1,y1,z1,x2,y2,z2){
  this.x1 = x1
  this.y1 = y1
  this.z1 = z1
  this.x2 = x2
  this.y2 = y2
  this.z2 = z2
}


myline.prototype.show = function(){
  stroke(0)
  noFill()
  rect(this.x, this.y, this.w, this.w)
  if(this.revealed){
    if(this.bee){
      ellipseMode(CORNER)
      fill(255,0,0)
      ellipse(this.x+this.w * 0.25, this.y+this.w * 0.25, this.w * 0.5,this.w * 0.5)
    }else if (this.beeCount===0) {
      fill(222)
      rect(this.x, this.y, this.w, this.w)

    }
    else{
      fill(222)
      rect(this.x, this.y, this.w, this.w)
      fill(0)
      text(this.beeCount, this.x+this.w*0.5-3, this.y+this.w*0.5+4)
    }
  }
}
