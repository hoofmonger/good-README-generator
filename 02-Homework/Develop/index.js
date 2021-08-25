// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
{message:"What is the name of this Project?",
type: 'input',
name: 'projectName'},
{message:"What is the intended purpose of this Project?",
type: 'input',
name: 'projectPurpose'},
{message:"What languages were used to write this Project?",
type: 'checkbox',
choices: ["HTML", "CSS", "JavaScript", "C#", "C++", "Java", "Python", "MySQL", "MongoDB", "Rust"],
name: 'usedLanguages'},
{message:"What libraries/frameworks/technologies were used to build this Project?",
type: 'checkbox',
choices: ["bootstrap", "inquirer", "React.js", "express.js", "jQuery", "TailWinds"],
name: 'usedLibraries'},
{message:"List the Authors, using commas to denote different people",
type: 'input',
name: 'authors'},
{message:"Describe the Installation.",
type: 'input',
name: 'installationDescription'},
{message: "Describe the Functionality.",
type: 'input',
name: 'functionDescription'},
{message: "Describe how a user test the Project.",
type: 'input',
name: 'testDescription'},
{message: "Select a License",
type: 'list',
choices: ["MIT", 
"Apache License 2.0", 
"GNU General Public License 3.0",
"BSD 2-Clause Simplified License",
"BSD 3-Clause New or Revised License",
"Boost Software License 1.0",
"Creative Commons Zero v1.0 Universal",
"Eclipse Public License 2.0",
"GNU Affero General Public License",
"GNU Lesser General Public License v2.1",
"Mozilla Public License 2.0",
"The Unilicense"],
name: 'licenseTitle'},
{message: "What do you want to call this README?",
type: 'input',
name: 'filename'}
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    .then((data) => {fs.appendFile(filename.data)
        
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      })};
 


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => generateMarkdown(data))
    .then((data) => writeToFile("README.md", data))
}

// Function call to initialize app
init();
