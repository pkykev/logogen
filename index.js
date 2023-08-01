//this will run the call the questions for the svg gen using the imports from lib folder
const fs = require(`fs`)
const inquirer = require("inquirer")
const { Square, Triangle, Circle } = require(`./lib/shapes.js`)

const questions = [{
  type: `input`,
  message: `Input up to 3 characters in your logo (max 3)`,
  name: `character`,
  //enter if statement to deny more than 3 characters
},
{
  type: `input`,
  message: `Please enter a hexadecimal color for the logo (example for white: #FFFFFF)`,
  name: `colorHex`,
  default: `#FFFFFF`
},
{
  type: `list`,
  message: `Chose a shape for the logo backdrop`,
  name: `shape`,
  choices: [`triangle`, `circle`, `square`]
},
{
  type: `input`,
  message: `Please enter a hexadecimal color for the backround (example for black: #000000)`,
  name: `colorHexShape`,
  default: `#000000`
}
]

inquirer.prompt(questions)
  //Need to add functions for each userchoice from the shapes availeable
  .then(function (data) {
    if (data.shape === `circle`) {
      const userInput = new Circle(data.character, data.colorHex, data.shape, data.colorHexShape)
      writeIt(userInput)
    } else if (data.shape === `triangle`) {
      const userInput = new Triangle(data.character, data.colorHex, data.shape, data.colorHexShape)
      writeIt(userInput)
    } else if (data.shape === `square`) {
      const userInput = new Square(data.character,data.colorHex,data.shape,data.colorHexShape)
      writeIt(userInput)
    }
    // console.log(userInput.render())
  })

function writeIt(userInput) {
  fs.writeFile(`logo.svg`, userInput.render(), (err) => {
    console.log(err)
  })
}




