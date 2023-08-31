let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   port:        3306,
   user:        'root',
   password:    '',
   database:    'db_expressjs_simple_restapi'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

module.exports = connection; 