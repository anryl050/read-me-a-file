// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please add a Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a Project Desctiption:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add Installation Requirements, if applicable:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add a Usage Intructions (including videos and images), if applicable:'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please add Features, if applicable:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add Testing scenarios for your application, if applicable:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email Email for user Questions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please add a link to your GitHub account:'
    },
     {
        type: 'input',
        name: 'contribution',
        message: 'Please add a Contibuters, if applicable:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please add License, if applicable:',
        choices: [
            'Apache 2.0',
            'GNUPLv3',
            'MIT',
            'Mozilla',
            'Other',
            'None'
        ],
    },
];

// TODO: Create a function to write README file
// function writeToFile(generateMarkdown, answers) {
//     const mark = generateMarkdown.answers
//     fs.writetoFile('README.md', mark, err=>{
//         if(err){
//             console.log('Could not save the file')
//         } else{
//             console.log('Success; README file is aded to the project!')
//         }

// })
// }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers)
            fs.writeFile('README.md', generateMarkdown(answers), err => {
                if (err) {
                    console.log('Could not save the file')
                } else {
                    console.log('Success; README file is aded to the project!')
                }

            })
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();
