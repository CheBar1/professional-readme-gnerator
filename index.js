//Packages needed for this application:
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input:
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the relative path to the image to be used as the screenshot for your project",
    },
    { 
        type: "input",
        name: "link",
        message: "Provide the URL of your deployed application.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT","APACHE2.0", "Boost1.0", "MPL2.0", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here that are required to be installed.",
    },
    {
        type: "input",
        name: "features",
        message: "List features of project here.",
    },
    {
        type: "input",
        name: "usage",
        message: "What languages or technologies are associated with this project?",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "contributors",
        message: "List any contributors. (Use GitHub usermanes)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide test instructions if required.",
    },
];

//Function to write README file:
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

//Function call to initialize app
init();
