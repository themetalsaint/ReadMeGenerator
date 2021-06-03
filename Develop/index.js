// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// const util = require('util');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please type in your Github username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'ReadMeGenerator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please include a valid Github repo name.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please include the title of your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please describe your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please describe the steps required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please provide instructions and examples of your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for the application and provide the command to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT','Apache 2.0', 'None' ],
        name: 'license'
    }
];



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// Main function
function init() {
    inquirer.prompt(questions).then(userResponses => {
        writeToFile("README.md", generateMarkdown({...userResponses}));
        console.log("Success!")
    });
};

init();