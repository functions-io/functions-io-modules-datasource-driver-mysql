"use strict";

const mysql = require("mysql");

var cachePool = {};

module.exports.close = function(){
    var listKeys = Object.keys(cachePool);
    for (var i = 0; i < listKeys.length; i++){
        try {
            let key = listKeys[i];
            let pool = cachePool[key];
            if (pool){
                pool.end();
                pool = null;
                delete cachePool[key];
            }            
        }
        catch (errTry) {
            console.error(__filename, errTry);
        }
    }
};

module.exports.getDataSource = function(config){
    return new Promise(function (resolve, reject){
        try {
            let pool;
            let key = config.host + "/" + config.user + "/" + config.password + "/" + config.database;
            
            pool = cachePool[key];
            if (pool){
                resolve(pool);
            }
            else{
                pool = mysql.createPool(config);
                cachePool[key] = pool;
                resolve(pool);
            }
        }
        catch (errTry) {
            console.error(__filename, errTry);
            reject(errTry);
        }
    });
};