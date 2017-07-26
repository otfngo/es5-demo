class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return `${this.color} ${super.toString()}`;
  }
}

Object.getPrototypeOf(ColorPoint) === Point;//true

