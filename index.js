let inquirer = require("inquirer");
const DB = require("./db");

const choices = {
    VIEW_DEPTS: 'View all departments.',
    VIEW_ROLES: 'View all roles.',
    VIEW_EMPS: 'View all employees.',
    ADD_DEPT: 'Add a department.',
    ADD_ROLE: 'Add a role.',
    ADD_EMP: 'Add an employee.',
    // UPDATE_EMP_ROLE: 'Update an employee role.',
    EXIT: 'Exit.'
}

const promptChoices = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: Object.values(choices)
        }
    ]).then(({choice}) => choice)
};

const promptLoop = () => {
    return promptChoices().then((choice) => {
        if(choice === choices.EXIT) {
            return
        } 
        if(choice === choices.VIEW_DEPTS){
            DB.getDepts();
        }
        if(choice === choices.VIEW_ROLES){
            DB.getRoles();
        }
        if(choice === choices.VIEW_EMPS){
            DB.getEmps();
        }
        if(choice === choices.ADD_DEPT){
            DB.addDept();
        }
        if(choice === choices.VIEW_ROLES){
            DB.viewRoles();
        }
        if(choice === choices.ADD_ROLE){
            DB.addRole();
        }
        if(choice === choices.ADD_EMP){
            DB.addEmp();
        }
        // if(choice === choices.UPDATE_EMP_ROLE){
        //     DB.updateEmpRole();
        // }
        return promptLoop();
    })
}

let startApp = () => {
    promptLoop().catch(console.error);
};

startApp();