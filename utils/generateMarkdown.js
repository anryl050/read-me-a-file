// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Table of Content
- [Project Desctiption](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [Contribution](#Contribution)
- [License](#License)
- [Contact](#Contact)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Contact
${answers.email}
${answers.github}

## License
${answers.license}
  `;
}

module.exports = generateMarkdown;
