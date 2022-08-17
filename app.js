const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.static("public"));
app.set('view engine' , 'ejs')
app.listen(3000, ()=>{
 console.log("Sunucu 3000 portunda çalıştırılıyor...");
})

app.get('/' , (req,res) =>{
    res.render('index')
})

app.use( ( req,res) =>{
    res.status(404).render('./404/404.ejs')
})
