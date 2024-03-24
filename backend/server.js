 const express = require('express');
 const mysql = require('mysql');
 const cors = require('cors');

 const app = express();

 app.use(cors());

 const db = mysql.createConnection({
        host: "localhost",
        user:"root",
        password:"",
        database:"login",  
 });

 app.listen(3001, () => {
     console.log('Server is running on port 3001');
 });