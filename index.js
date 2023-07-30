//this will run the call the questions for the svg gen using the imports from lib folder
const fs = require(`fs`)
const inquirer = require("inquirer")

const questions = [{
  type: `input`,
  message: `Input up to 3 characters in your logo (max 3)`,
  name: `character`,
  //enter if statement to deny more than 3 characters
},
{
  type: `input`,
  message: `Please enter a hexadecimal color (example for white: #FFFFFF)`,
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
  message: `Please enter a hexadecimal color (example for white: #FFFFFF)`,
  name: `colorHexShape`,
  default: `#000000`
}
]

inquirer.prompt(questions)
  .then(response, function () {
    fs.writeFile(`logo.svg`, reposnse, (err), function () {
      console.log(err)
    })
  })