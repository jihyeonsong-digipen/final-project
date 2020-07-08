// Jihyeon Song
// Final Project
// CS099
// Spring 2020

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  setAngle(angle_in_radians) {
    var length = this.getLength();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  getAngle() {
    return atan2(this.x, this.y);
  }

  setLength(length) {
    var angle_in_radians = this.getAngle();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  getLength() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  add(v2) {
    return new Vec2(this.x + v2.x, this.y + v2.y);
  }

  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }

  subtract(v2) {
    return new Vec2(this.x - v2.x, this.y - v2.y);
  }

  subtractFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }

  multiply(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  multiplyBy(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  divide(scalar) {
    return new Vec2(this.x / scalar, this.y / scalar);
  }

  divideBy(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  }

}