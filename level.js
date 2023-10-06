class Level {
  current = 5;
  lastLevel = 10;

  constructor(c){
    this.current = c;
  }

  show() {
    fill(0);
    textSize(50);
    text("L " + this.current, 10, height - 10);
  }

  reset() {
    this.current = 0;
  }

  isWin() {
    if (this.current > this.lastLevel) {
      return true;
    } else {
      return false;
    }
  }

  levelUp() {
    this.current ++;
  }

}
