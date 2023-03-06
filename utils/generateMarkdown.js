// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// used arrow function to optimize the code 
const renderLicenseBadge = (license) => {
  // used replace string method to remove any extra space in the license name (help provided by the TA)
  license = license.replace(/\s/g, "")
  // used ternary operator to optimaze the code for the 'if else' loop
  return !license ? ""
    : license === "None" ? ""
      : `![Badge](https://img.shields.io/badge/license-${license}-green?style=plastic&logo=appveyor)`;
}

// Created a function that returns the license link
// If there is no license, return an empty string

// used arrow function to optimize the code 
const renderLicenseLink = (license) => {
  return !license ? ""
    // used ternary operator to optimaze the code for the 'if else' loop
    : license === "Apache 2.0" ? `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
      : license === "GNUPLv3" ? `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`
        : license === "MIT" ? `[${license}](https://choosealicense.com/licenses/mit/)`
          : license === "Mozilla" ? `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`
            : license === "Other" ? "Other"
              : "No License";
}

// Created a function that returns the license section of README
// If there is no license, return an empty string

// used arrow function to optimize the code 
const renderLicenseSection = (license) => {
  // used ternary operator to optimaze the code for the 'if else' loop
  return license ? `Licensed under the ${renderLicenseLink(license)} license.`
    : '';
}

//Created a function to generate markdown for README

// used arrow function to optimize the code 
const generateMarkdown = (answers) => {
  return `

# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Content
#### * [Project Desctiption](#description)
#### * [Installation](#installation)
#### * [Usage](#usage)
#### * [Features](#features)
#### * [Tests](#tests)
#### * [Questions](#questions)
#### * [Contribution](#contribution)
#### * [License](#license)

## Project Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Features
${answers.features}

## Tests
${answers.tests}

## Questions
- ${answers.email}
- ${answers.github}

## Contribution
${answers.contribution}

## License
${renderLicenseSection(answers.license)}

  `;
}

module.exports = generateMarkdown;