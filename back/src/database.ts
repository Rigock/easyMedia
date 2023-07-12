import mysql from 'promise-mysql';
import  keys from './keys';

const pool = mysql.createPool(keys.database);

pool.then( poolConnection => {
    poolConnection.release;
    console.log('DB is connected');
});

export default pool;