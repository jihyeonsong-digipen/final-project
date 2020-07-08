// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class particle {
  constructor(x, y, speed, direction) {
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
    return this;
  }

  update() {
    this.position.addTo(this.velocity);
  }

  draw() {

    noStroke();
    push();
    fill(random(100, 250), random(100, 250), random(100, 250));
    circle(this.position.x, this.position.y, 10);
    pop();  
  }
}