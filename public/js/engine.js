function dot3d(l, x1, y1, z1, upordown, i, j){

    let newX, newY,newZ, x ,y, zfx1
    let sgz  = shockGrid[i][j].z

    this.startY = y1 + (mouseY - mpy) * 0.25 - 200
    this.startX = x1
    this.startZ = z1

    newX = l.x + this.startX
    newY = (l.z - this.startY) * upordown - sgz
    newZ = (l.y * -1) + this.startZ

    zfx1 = cd / (newZ + cd)

    x =  mpx - (newX * zfx1)
    y =  mpy + (newY * zfx1)

    stroke(160 - newZ / 100, 160 - newZ / 100, 160 - (newZ / 100) + sgz)
    fill(100 + newZ / 50 + sgz, 100 + newZ / 50, 100 + newZ / 50)
    vertex(x, y)
    let textgrid = l.i.toString()

}

