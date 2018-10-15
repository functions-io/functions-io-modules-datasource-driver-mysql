"use strict";

const moduleTest = require("../lib");

let config = {
    connectionLimit:1,
    host:"localhost",
    user:"root",
    password:"root",
    database:"security"
}

moduleTest.getDataSource(config).then(function(pool){
    pool.query("SELECT * from user", function (error, results, fields) {
        console.log(error, results);
        console.log(JSON.stringify(results));
        moduleTest.close();
    });
}, function(err){
    console.log("err! ", err);
})