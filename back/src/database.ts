import mysql from 'promise-mysql';
import  keys from './keys';

// var mysql = require('mysql');

 const pool = mysql.createPool(keys.database);

// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//     });

pool.then( poolConnection => {
    poolConnection.release;
    console.log('DB is connected');
});


// pool.get<keyof mysql.Pool>((key: keyof mysql.Pool): poolConnection => {
//     poolConnection.release;
//     console.log('DB is connected 2');
// });

export default pool;