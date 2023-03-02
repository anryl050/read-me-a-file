// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   license = license.replace(/\s/g, "")
//   if (!license) {
//     return "";
//   } else if (license === "None") {
//     return "";
//   } else {
//     return `![Badge](https://img.shields.io/badge/license-${license}-green?style=plastic&logo=appveyor)`;
//   }
// }

// function renderLicenseBadge(license) {
//   license = license.replace(/\s/g, "")
//   return !license ? ""
//     : license === "None" ? ""
//       : `![Badge](https://img.shields.io/badge/license-${license}-green?style=plastic&logo=appveyor)`;
// }

const renderLicenseBadge = (license) => {
  license = license.replace(/\s/g, "")
return !license ? ""
  : license === "None" ? ""
    : `![Badge](https://img.shields.io/badge/license-${license}-green?style=plastic&logo=appveyor)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//     return "";
//   } else if (license === "Apache 2.0") {
//     return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
//   } else if (license === "GNUPLv3") {
//     return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
//   } else if (license === "MIT") {
//     return `[${license}](https://choosealicense.com/licenses/mit/)`;
//   } else if (license === "Mozilla") {
//     return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`
//   } else if (license === "Other") {
//     return "Other";
//   } else {
//     return "No License";
//   }
// }


// function renderLicenseLink(license) {
//   return !license ? ""
//     : license === "Apache 2.0" ? `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
//       : license === "GNUPLv3" ? `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`
//         : license === "MIT" ? `[${license}](https://choosealicense.com/licenses/mit/)`
//           : license === "Mozilla" ? `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`
//             : license === "Other" ? "Other"
//               : "No License";
// }

const renderLicenseLink = (license) => {
  return !license ? ""
    : license === "Apache 2.0" ? `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
      : license === "GNUPLv3" ? `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`
        : license === "MIT" ? `[${license}](https://choosealicense.com/licenses/mit/)`
          : license === "Mozilla" ? `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`
            : license === "Other" ? "Other"
              : "No License";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     return `Licensed under the ${renderLicenseLink(license)} license.`
//   } else {
//     return ''
//   }
// }

// function renderLicenseSection(license) {
//   return license ? `Licensed under the ${renderLicenseLink(license)} license.`
//   : '';
// }

const renderLicenseSection = (license) => {
  return license ? `Licensed under the ${renderLicenseLink(license)} license.`
  : '';
}

// TODO: Create a function to generate markdown for README

const generateMarkdown = (answers) => {
  return `

# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Content
#### * [Project Desctiption](#description)
#### * [Video Flow Through Application](#video)
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
${answers.email}
${answers.github}

## Contribution
${answers.contribution}

## License
${renderLicenseSection(answers.license)}

## Video Exaplanation
${answers.video}

  `;
}

module.exports = generateMarkdown;