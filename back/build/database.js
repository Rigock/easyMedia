"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var keys_1 = __importDefault(require("./keys"));
// var mysql = require('mysql');
var pool = promise_mysql_1.default.createPool(keys_1.default.database);
// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//     });
pool.then(function (poolConnection) {
    poolConnection.release;
    console.log('DB is connected');
});
// pool.get<keyof mysql.Pool>((key: keyof mysql.Pool): poolConnection => {
//     poolConnection.release;
//     console.log('DB is connected 2');
// });
exports.default = pool;
