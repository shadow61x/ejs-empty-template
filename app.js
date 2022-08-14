const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express()

app.set('view engine' , 'ejs');
app.use(express.static("public"));

app.listen(3000, ()=>{
 console.log("SUNUCU 3000 PORTUNDA ÇALIŞTIRILIYOR")
)}

app.get('/' , (req,res) =>{
    res.render('index');
})



app.use( ( req,res) =>{
    res.status(404).render('./404/404.ejs');
})
