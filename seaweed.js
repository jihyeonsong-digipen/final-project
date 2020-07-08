// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class seaweed {

  constructor() {
    this.x1 = new NoiseLoop(1, 100, 120);
    this.x2 = new NoiseLoop(1, 330, 350);
    this.x3 = new NoiseLoop(1, 370, 390);
    this.x4 = new NoiseLoop(1, 520, 550);
    this.x5 = new NoiseLoop(1, 720, 750);
  }

  update(a) {
    this.x1.set(a);
    this.x2.set(a);
    this.x3.set(a);
    this.x4.set(a);
    this.x5.set(a);
  }

  draw() {

   
    noStroke();
    push();
    fill(0, 220, 0);
    ellipse(this.x1.get(), 520, 20, 30);
    ellipse(this.x1.get() - 5, 540, 20, 30);
    ellipse(this.x1.get(), 560, 20, 30);
    ellipse(this.x1.get() - 5, 580, 20, 40);
    ellipse(this.x3.get(), 520, 20, 30);
    ellipse(this.x3.get() - 5, 540, 20, 30);
    ellipse(this.x3.get(), 560, 20, 30);
    ellipse(this.x3.get() - 5, 580, 20, 40);
    pop();

    push();
    fill(30, 170, 0);
    ellipse(this.x2.get(), 520, 20, 30);
    ellipse(this.x2.get() - 5, 540, 20, 30);
    ellipse(this.x2.get(), 560, 20, 30);
    ellipse(this.x2.get() - 5, 580, 20, 40);
    ellipse(this.x4.get(), 520, 20, 30);
    ellipse(this.x4.get() - 5, 540, 20, 30);
    ellipse(this.x4.get(), 560, 20, 30);
    ellipse(this.x4.get() - 5, 580, 20, 40);
    ellipse(this.x5.get(), 520, 20, 30);
    ellipse(this.x5.get() - 5, 540, 20, 30);
    ellipse(this.x5.get(), 560, 20, 30);
    ellipse(this.x5.get() - 5, 580, 20, 40);
    pop();

  }

}