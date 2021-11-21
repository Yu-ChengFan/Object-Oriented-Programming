const inquirier = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generateHTML');
const writeFile = require('./src/createPage');

const employeeList = [];

const noInfo = () =>{
    console.log('(No valid information was entered)')
};

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
        });
};



engineerPrompt = () => {
    return inquirier
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Engineer name.',
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
            name: 'id',
            message: 'Please enter Engineer id.',
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
            message: "Please enter Engineer's email address.",
            validate: function(input){
                if (!input){
                    noInfo()
                    return false
                }
                return true
            }
        },{
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's github username.",
            validate: function(input){
                if (!input){
                    noInfo()
                    return false
                }
                return true
            }
        },
    ])
    .then((answers)=>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeList.push(engineer)
        return addEmployee();
    });
};

internPrompt = () => {
    return inquirier
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Intern name.',
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
            name: 'id',
            message: 'Please enter Intern id.',
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
            message: "Please enter Intern's email address.",
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
            name: 'school',
            message: "Please enter Intern's school.",
            validate: function(input){
                if (!input){
                    noInfo()
                    return false
                }
                return true
            }
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeList.push(intern);
        return addEmployee();
    });
};


addEmployee = () => {
    return inquirier
        .prompt({
            type: 'list',
            name: 'choice',
            message: 'What kind of employee?',
            choices: ['Engineer', 'Intern', 'Finished']
        })
        .then((answer)=>{
            if (answer.choice === 'Engineer'){
                return engineerPrompt();
            }
            else if (answer.choice === 'Intern'){
                return internPrompt();
            } 
            else if (answer.choice === 'Finished'){
                return employeeList;
            }
        });
};

startPrompt()
.then(employees => {
    return generatePage(employees);
})
.then(pageContent => {
    writeFile(pageContent);
})