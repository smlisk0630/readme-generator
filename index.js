const fs = require("fs");
const inquirer = require("inquirer");
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: ["HTML", "CSS", "Javascript"]
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: ["email", "phone", "telekinesis", "smoke"]
    },
]).then(response => {
    const content = `
# ${response.name}

## Languages
    
    `;
    // creates README file
    fs.writeFile("README.md", content, err => {
        if(err) console.log(err);
        else console.log("success!");
    });
});