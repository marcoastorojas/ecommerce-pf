const express = require("express");

const app = express()
app.get("/",(req,res)=>{
    res.status(200).json({saludo:"saludos a todo el mundo"})
})


app.listen(3000,()=>{
    console.log("corriendo en el puerto 3000")
})