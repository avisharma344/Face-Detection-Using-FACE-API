const path=require('path')
const express = require('express')

const app=express()
const port =process.env.PORT || 3000

const basePath = path.join(__dirname,'../')

app.use(express.static(basePath))
app.listen(port,()=>{
    console.log('Started Server '+port)
})