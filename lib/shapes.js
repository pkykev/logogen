//add classes for shapes from this folder REMEMBER TO EXPORT WITH MODULE.EXPORTS
class Shape {
  constructor(character, colorHex, shape, colorHexShape) {
    this.character = character
    this.colorHex = colorHex
    this.shape = shape
    this.colorHexShape = colorHexShape
  }
  //add a render function and call a getShape() to fill in the shape values... Who cares where the text ends up
  //this will significantly clean up the child classes and alow for easier testing
}
class Square extends Shape {
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="300" height="200" fill="${this.colorHexShape}" />

 <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.colorHex}">${this.character}</text>

</svg>`
  }
}
class Triangle extends Shape {
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <polygon points="205,50 250,210 160,210" fill="${this.colorHexShape}" />

 <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.colorHex}">${this.character}</text>

</svg>`
  }
}
class Circle extends Shape {
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <circle cx="100" cy="100" r="100" fill="${this.colorHexShape}" />

 <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.colorHex}">${this.character}</text>

</svg>`
  }
}

module.exports = {
  Square,
  Triangle,
  Circle,
}
