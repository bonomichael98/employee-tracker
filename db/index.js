let connection = require("./connection.js");

class DB {
    static getDepts() {
        connection.query("SELECT * FROM dept", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static getRoles() {
        connection.query("SELECT * FROM role", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static getEmps() {
        connection.query("SELECT * FROM emp", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static addDept() {
        connection.query("SELECT * FROM dept", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static viewRoles() {
        connection.query("SELECT * FROM role", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static addRole() {
        connection.query("SELECT * FROM role", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static addEmp() {
        connection.query("SELECT * FROM role", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    // static updateEmpRole() {
    //     connection.query("SELECT * FROM role", (error, results) => {
    //         if (error) {
    //             console.error(error)
    //             return
    //         };
    //         console.log(results);
    //         console.table(results);
    //     })
    // }
}

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
if(choice === choices.UPDATE_EMP_ROLE){
    DB.updateEmpRole();

module.exports = DB;