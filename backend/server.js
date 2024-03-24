 const express = require('express');
 const mysql = require('mysql');
 const cors = require('cors');

 const app = express();
 app.use(express.json());
app.use(cors());


 const db = mysql.createConnection({
        host: "localhost",
        user:"root",
        password:"",
        database:"login",  
 });

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Login Failed");
        if(data.length > 0){
            res.json("Login Successful");
        }
        else{
            res.json("No user found");
        }
    });

       
});


 app.listen(3001, () => {
     console.log('Server is running on port 3001');
 });