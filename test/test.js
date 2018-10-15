"use strict";

const assert = require("assert");
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
        try {
            assert.strictEqual(results[0].name, "admin");
        }
        finally{
            moduleTest.close();
        }
    });
}, function(err){
    try {
        assert.strictEqual(err, null);
    }
    finally{
        moduleTest.close();
    }
})