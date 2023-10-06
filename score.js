class Score {
  s = 0;
  winScore = 300;

  constructor(win){
    this.winScore = win;
  }

  show() {
    fill(0);
    textSize(50);
    text(this.s, width - 100, height - 10);
  }

  reset() {
    this.s = 0;
  }

  isWin() {
    if (this.s >= this.winScore) {
      return true;
    } else {
      return false;
    }
  }

  increase(by) {
    this.s += by;
  }

}
