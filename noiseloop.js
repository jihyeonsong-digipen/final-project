// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class NoiseLoop {
  constructor(diameter, min, max) {
    this.d = diameter
    this.min = min
    this.max = max

    this.x = random(100)
    this.y = random(100)

    this.a = 0
  }

  get() {
    let xOff = map(cos(this.a), -1, 1, this.x, this.x + this.d)
    let yOff = map(sin(this.a), -1, 1, this.y, this.y + this.d)
    let r = noise(xOff, yOff)
    return map(r, 0, 1, this.min, this.max)
  }

  set(a) {
    this.a = a
  }

}