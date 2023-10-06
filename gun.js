class Gun {
  
  dir = 1;
  moving = 0;

  constructor() {
    this.x = width / 2;
  }

  show() {
    fill("black");
    noStroke();
    rect(this.x, height - 20, 10, 50);
  }

  changeDir(dir) {
    this.dir = dir;
  }

  changeMoving(mov) {
    this.moving = mov;
  }

  move() {
    if (this.moving) {
      this.x += 2 * this.dir;
    }
  }

}
