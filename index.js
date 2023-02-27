// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log('readme gen running?')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'Please add a Project Title:',
    },
    {
        type:'input',
        name:'description',
        message:'Please add a Project Desctiption:'
    },
    {
        type:'input',
        name:'installation',
        message:'Please add Installation Requirement, if applicable:'
    },
    {
        type:'input',
        name:'usage',
        message:'Please add a Usage Intructions, if applicable:'
    },
    {
        type:'input',
        name:'contribution',
        message:'Please add a Contibuters, if applicable:'
    },
    {
        type:'input',
        name:'email',
        message:'Email for Questions:'
    },
    {
        type:'input',
        name:'github',
        message:'GitHub for Questions:'
    },
    {
        type:'list',
        name:'licence',
        message:'License?',
        choices:['MIT', 'ISC','GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
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
    .then((answers)=>{
        console.log(answers)
        fs.writeFile('README.md', generateMarkdown(answers), err=>{
                    if(err){
                        console.log('Could not save the file')
                    } else{
                        console.log('Success; README file is aded to the project!')
                    }
             
            })
        })
    .catch((error)=> {
        console.log(error)
    })
}

// Function call to initialize app
init();
