const fs = require("fs");
const inquirer = require("inquirer");
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a description of your project?",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What is included in your table of contents?",
        name: "contents",
        choices: ["Installation", "User Stories", "Usage", "Credits", "Features", "Contributing", "Tests"]
    },
    {
        type: "input",
        message: "How should your project be installed?",
        name: "install"
    },
    {
        type: "input",
        message: "Insert user stories.",
        name: "stories"
    },
    {
        type: "input",
        message: "How should your project be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What credits do you want to include?",
        name: "credits",
        choices: []
    },
    {
        type: "list",
        message: "What features do you want to include?",
        name: "features",
        choices: []
    },
    {
        type: "list",
        message: "Who contributed to your project?",
        name: "contributors",
        choices: []
    },
    {
        type: "input",
        message: "How can users test your project?",
        name: "tests",
    },

]).then(response => {
    const content = `
# ${response.title}

## ${response.description}

## ${response.contents}

## ${response.install}

## ${response.stories}

## ${response.usage}

## ${response.credits}

## ${response.features}

## ${response.contributors}

## ${response.tests}
    
    `;
    // creates README file
    fs.writeFile("README.md", content, err => {
        if(err) console.log(err);
        else console.log("success!");
    });
});