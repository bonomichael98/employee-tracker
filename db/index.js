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
        connection.query("INSERT INTO dept", (error, results) => {
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
        connection.query("INSERT INTO role", (error, results) => {
            if (error) {
                console.error(error)
                return
            };
            console.log(results);
            console.table(results);
        })
    }
    static addEmp() {
        connection.query("INSERT INTO emp", (error, results) => {
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

module.exports = DB;