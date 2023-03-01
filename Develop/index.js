// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Lets write a description of your project: What was your motivation? Why did you build this project? What does this solve? What did you learn?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the steps required to use your project? Include screenshots here.',
    },
    {
        type: 'input',
        name: 'Features',
        message: 'What are the features of your project? List them here.',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Who collaborated with this project? Links to Github profiles here.',
    },
    {
        type: 'input',
        name: 'License',
        message: 'What license did you use to develop your project?',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Include badges here. Checkout the badges on badmath and shields.io.',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Examples of how to test your project? Include screenshots here.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(fileName, data);
    });
}


// Function call to initialize app
init();
