class Star {
        constructor() {
            this.x = random(-width*40, width*40)
            this.y = random(-height*64, -12000)
            this.z = random(100,20)
        }

        setXY(x, y, z){
            this.x = x;
            this.y = y;
            this.z = z;
        }
}
