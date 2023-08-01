//add classes for shapes from this folder REMEMBER TO EXPORT WITH MODULE.EXPORTS
class Shape {
  constructor(character, colorHex, shape, colorHexShape) {
    this.character = character
    this.colorHex = colorHex
    this.shape = shape
    this.colorHexShape = colorHexShape
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${this.getShape()}

 <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.colorHex}">${this.character}</text>

</svg>`
  }
}
class Square extends Shape {
  getShape() {
    return `<rect width="300" height="300" fill="${this.colorHexShape}" />`
  }
}
class Triangle extends Shape {
  getShape() {
    return `<polygon points="100,50 10,210 200,210" fill="${this.colorHexShape}" />`
  }
}
class Circle extends Shape {
  getShape() {
    return `<circle cx="100" cy="100" r="100" fill="${this.colorHexShape}" />`
  }
}

module.exports = {
  Square,
  Triangle,
  Circle,
}
