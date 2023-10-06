let monsters = [];
let monsterCount = 5;
let gun;
let score;
let bullets = [];
let sound;
let level;

function setup() {
  createCanvas(400, 400);

  gun = new Gun();
  sound = new Sound();
  level = new Level(1);

  restart();
}

function draw() {
  background(220);

  gun.show();
  gun.move();

  for (i = 0; i < monsters.length; i++) {
    monsters[i].move(level.current);
    monsters[i].show();
    monsters[i].edge();
  }

  for (i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    if (bullets[i].markForDelete) {
      bullets.splice(i, 1);
      continue;
    }

    // kill monsters
    for (j = 0; j < monsters.length; j++) {
      if (bullets[i].hits(monsters[j])) {
        if (monsters[j].score > 0) {
          sound.hit();
        } else {
          sound.miss();
        }

        score.increase(monsters[j].score);
        monsters.splice(j, 1);

        break;
      }
    }
  }

  score.show();
  level.show();

  if (score.isWin()) {
    sound.level();
    level.levelUp();
    restart();
  }
}

function restart() {
  score = new Score(100);

  for (i = 0; i < level.current + monsterCount; i++) {
    monsters[i] = new Monster(level.current);
  }
}

function keyReleased() {
  if (keyCode !== 32) {
    gun.changeMoving(0);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    gun.changeDir(-1);
    gun.changeMoving(1);
  }

  if (keyCode === RIGHT_ARROW) {
    gun.changeDir(1);
    gun.changeMoving(1);
  }

  if (keyCode === 32) {
    sound.fire();
    bullets.push(new Bullet(gun.x));
  }
}
