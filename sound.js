class Sound {
  s_miss = loadSound("sounds/error-89206.mp3");
  s_fire = loadSound("sounds/fire-88783.mp3");
  s_level = loadSound("sounds/level-win-6416.mp3");
  s_game = loadSound("sounds/game-bonus-144751.mp3");
  s_hit = loadSound("sounds/message-incoming-132126.mp3");

  fire() {
    this.s_fire.play();
  }

  miss() {
    this.s_miss.play();
  }
  level() {
    this.s_level.play();
  }
  game() {
    this.s_game.play();
  }
  hit() {
    this.s_hit.play();
  }
}
