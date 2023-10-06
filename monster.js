class Monster {
  isKilled = 0;
  // scoreDir = random() > 0.5 ? 1 : -1;
  // moveAngle = random(0, 2 * PI);
  // moveSpeed = random(5);
  // score = 0;

  constructor(level) {
    
    this.scoreDir = random() > (.05 * level) ? 1 : -1;
    this.moveAngle = random(0, 2 * PI);
    this.moveSpeed = random(level);
    this.score = 0;
    
    
    this.size = round(random(10, 50));
    this.score = this.size * this.scoreDir;

    this.x = random(0, width);
    this.y = random(0, 200);
    
    this.xSpeed = this.moveSpeed * cos(this.moveAngle);
    this.ySpeed = this.moveSpeed * sin(this.moveAngle);

  }

  show() {
    if (this.scoreDir > 0) {
      fill(0, 0, 255, 200);
    } else {
      fill(255, 0, 0, 200);
    }
    noStroke();
    circle(this.x, this.y, this.size);
    fill(255);
    textSize(10);
    text(this.score, this.x - 6, this.y + 4);
  }

  move() {
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // console.log(this.moveAngle , xp, yp);
  }

  edge() {
    if (this.x > width || this.x < 0) {
      this.xSpeed =  this.xSpeed * -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed = this.ySpeed * -1;
    }
  }

  shake(x) {
    this.x += round(random(2)) * (random() < 0.5 ? -1 : 1);
    this.y += round(random(2)) * (random() < 0.5 ? -1 : 1);
  }

  kill() {
    this.isKilled = 1;
  }
}
