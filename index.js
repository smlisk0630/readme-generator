const fs = require('fs');
const inquirer = require('inquirer');

const renderLicense = license => {
    // Generates badge for license
    switch (license) {
        case 'Apache License 2.0':
            return '![License: Apache License 2.0](https://img.shields.io/badge/license-Apache-brightgreen.svg)';
        case 'ISC License':
            return '![License: ISC License](https://img.shields.io/badge/License-ISC-blueviolet.svg)';
        case 'MIT License':
            return '![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)';
        case 'GNU GPLv3':
            return '![License: GNU GPLv3](https://img.shields.io/badge/License-GNU-ff69b4.svg)';
        default:
            console.log('No license found');
            return '';
    }
};

// Inputs for the command line
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'description'
        },
        {
            type: 'checkbox',
            message: 'What is included in your table of contents?',
            name: 'contents',
            choices: ['Installation', 'User Stories', 'Usage', 'Credits', 'Features', 'Contributing', 'Tests']
        },
        {
            type: 'input',
            message: 'How should your project be installed?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Insert user stories.',
            name: 'stories'
        },
        {
            type: 'input',
            message: 'How should your project be used?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What credits do you want to include?',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'What features do you want to include?',
            name: 'features'
        },
        {
            type: 'input',
            message: 'Who contributed to your project?',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'How can users test your project?',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Which type of license should your project have?',
            name: 'license',
            choices: ['Apache License 2.0', 'ISC License', 'MIT License', 'GNU GPLv3']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'contact'
        }
    ])
    .then(response => {
        const content = `
# ${response.Title}
${renderLicense(response.license)}
![Issues](https://img.shields.io/github/issues/smlisk0630/weather-dashboard)
![Forks](https://img.shields.io/github/forks/smlisk0630/weather-dashboard)
![JavaScript 47 Percent](https://img.shields.io/badge/javascript-100%25-yellow)
## Description
${response.description}
## Link to Deployed Application
This application can be found at https://smlisk0630.github.io/readme-generator/.
## Table of Contents
(#${response.contents[0]}\n
    ${response.contents[1]}
    )
## Installation
${response.install}
## User Stories
${response.stories}
## Usage
${response.usage}
## Credits
${response.credits}
## Features
${response.features}
## Contributors
${response.contributors}
## Testing
${response.tests}
## License
${response.license}
## Questions
GitHub Username: ${response.questions}\n
GitHub Profile: https://${response.questions}.github.io
\nTo get in touch, use this email address: ${response.contact}
`;

        // creates README file
        fs.writeFile('README.md', content, err => {
            if (err) console.log(err);
            else console.log('success!');
        });
    });