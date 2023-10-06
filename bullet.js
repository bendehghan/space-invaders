class Bullet {
  
  markForDelete = 0;

  constructor(a) {
    this.size = 10;
    this.x = a;
    this.y = height;
  }

  show() {
    fill("red");
    noStroke();
    circle(this.x, this.y, this.size);
  }

  hits(monster) {
    let d = dist(this.x, this.y, monster.x, monster.y);
    if (d < this.size /2 + monster.size /2) {
      this.markForDelete = 1;
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.y -= 10;
    if(this.y < 0){
      this.markForDelete = 1;
    }
  }
}
