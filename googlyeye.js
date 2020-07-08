// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class pupil {
  construtor() {
    this.pos = new Vec2(0, 0);
    this.eyePos = new Vec2();
    this.pupilPos = new Vec2();
  }
  update() {
    let direction = createVector(this.pos.x - mouseX, this.pos.y - mouseY).mult(0.05);
    this.eyePos.set(this.pos.x, this.pos.y - 3);
    this.pupilPos.set(this.eyesPos.x - direction.x, this.eyesPos.y - direction.y);
  }

  draw() {
    fill(0);
    ellipse(this.pupilPos, this.pupilPos, 3);
  }

}