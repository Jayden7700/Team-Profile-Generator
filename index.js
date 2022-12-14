const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const OUTPUT_DIR = path.resolve(_dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')
const generateTeam = require('./src/template.js')

teamArray = []

function runAPP() {

    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            message: 'What type of employee would you like to add to your team?',
            name: 'addEmployeePrompt',
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members.']
        }]).then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;

                default:
                    htmlBuilder();

            }

        })
    }

    function addManager() {
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });

    }
}
