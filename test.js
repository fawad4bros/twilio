const express = require("express")
const app = express()
require('dotenv').config();
const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send("Hello Je I have Been Hit")
})
app.listen(PORT,()=>{
console.log(`The PORT: ${PORT} is open and listening for request`)
console.log(process.env.PORT)
})