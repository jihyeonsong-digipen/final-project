// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class fish {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.fishSize = 1;

    this.pos = new Vec2(0, 0);
    this.eyePos = new Vec2(0, 0);
    this.pupilPos = new Vec2(0, 0);
  }

  eyeMove() {
    let direction = new Vec2(this.pos.x - mouseX, this.pos.y - mouseY);
    this.eyePos = new Vec2(this.pos.x, this.pos.y - 3);
    this.pupilPos = new Vec2(this.eyesPos - direction, this.eyesPos - direction);

    ellipse(this.pupilPos, 0, 3);
  }

  enemyMove() {
    this.x += random(1, 5);
    this.y += random(-1, 1);

    if (this.x > width) {
      this.x = 0;
      this.y = random(0, height);
    }
  }

  draw() {
    push()
    translate(this.x, this.y)
    noStroke();

    switch (this.fishSize) {
      case 1:
        fill(250, 0, 0);
        scale(1);
        break;
      case 2:
        fill(200, 0, 250);
        scale(2);
        break;
      case 3:
        fill(240, 200, 200);
        scale(3);
        break;
      case 4:
        fill(0, 200, 200);
        scale(4);
        break;
      case 5:
        fill(250, 200, 0);
        scale(5);
        break;
      case 6:
        fill(0, 100, 100);
        scale(6);
        break;
      case 7:
        fill(200, 250, 150);
        scale(7);
        break;
      case 8:
        fill(100, 100, 200);
        scale(8);
        break;
      case 9:
        fill(100, 200, 100);
        scale(9);
        break;
      case 10:
        fill(200, 100, 100);
        scale(10);
        break;
    }
    triangle(0, 0, -20, 5, -20, -5);
    ellipse(0, 0, 30, 20);
    fill(255);
    ellipse(7, 0, 6);
    fill(0);
    ellipse(8, 0, 3);
    pop();
  }
}