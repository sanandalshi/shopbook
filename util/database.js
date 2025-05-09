// const mysql=require('mysql2');
// const pool=mysql.createPool({
// host:'localhost',
// user:'root',
// database:'node-complete',
// password:'Wj28@krhps'



// });
// module.exports=pool.promise();
require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST||'localhost',
  user: process.env.DB_USER||'user',
  database: process.env.DB_DATABASE||'node-complete',
  password: process.env.DB_PASSWORD||'Wj28@krhps'
});

module.exports = pool.promise();
