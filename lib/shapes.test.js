const { Square, Triangle, Circle } = require(`./shapes.js`)
const tstColorHex = `blue`;
const tstColorHexShape = `blue`;
const tstChar = `TST`;



//suing function here to keep practice
describe(`Shape instatiate return string to render shape`, function () {
  it(`should return triangle with polygon coordinates`, function () {
    const tstShape = `triangle`;
    const shape = new Triangle(tstChar, tstColorHex, tstShape, tstColorHexShape)
    expect(shape.getShape()).toEqual(`<polygon points="100,50 10,210 200,210" fill="blue" />`)
  })
})
describe(`Shape instatiate return string to render shape`, () => {
  it(`should return strign with polygon coordinates`, () => {
    const tstShape = `circle`;
    const shape = new Circle(tstChar, tstColorHex, tstShape, tstColorHexShape)
    expect(shape.getShape()).toEqual(`<circle cx="100" cy="100" r="100" fill="blue" />`)
  })
})
describe(`Shape instatiate return string to render shape`, () => {
  it(`should return strign with polygon coordinates`, () => {
    const tstShape = `square`;
    const shape = new Square(tstChar, tstColorHex, tstShape, tstColorHexShape)
    expect(shape.getShape()).toEqual(`<rect width="300" height="300" fill="blue" />`)
  })
})

