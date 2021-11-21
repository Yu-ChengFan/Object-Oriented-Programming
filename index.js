const inquirier = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeList = [];

const noInfo = () =>{
    console.log('No information was entered')
}

startPrompt = () => {
    return inquirier
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the team manager's name.",
                validate: function(input) {
                    if (!input) {
                        noInfo()
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter ID number.',
                validate: function(input){
                    if (isNaN(parseInt(input))){
                        noInfo()
                        return false
                    }
                    return true
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter an Email address.',
                validate: function(input){
                    if (!input){
                        noInfo()
                        return false
                    }
                    return true
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter an office number.',
                validate: function(input){
                    if (!input){
                        noInfo()
                        return false
                    }
                    return true
                }
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employeeList.push(manager)
            return addEmployee();
        })
}


// addEmployee = () => {
//     return inquirier
//         .prompt([

//         ])
// }