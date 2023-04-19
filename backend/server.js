const express = require('express');
const app = express();
const cors=require("cors");
const PORT=3001;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const fs=require('fs')
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'test', 
  database: 'final_project'
});

connection.connect((err)=>{
    if(!err){
        console.log("Succes")
    }else{
        console.log("errr: ",err)
    }
})

app.get("/categories",(req,res)=>{
    connection.query(
        "SELECT * FROM categories",(err,data)=>{
            res.json(data)
        }
    )
})

app.listen(PORT,()=>{
    console.log("listenoing to PORT:",PORT)
})