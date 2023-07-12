import mysql from 'promise-mysql';
import  keys from './keys';

const pool = mysql.createPool(keys.database);

// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//     });

pool.then( poolConnection => {
    poolConnection.release;
    console.log('DB is connected');
})

export default pool;