const express = require('express')
const app = express()
const PORT = 3001
const http = require('http')

const server = http.createServer(app)


app.get('/',(req,res)=>{
    res.send("Hello World")
})


server.listen(PORT , ()=>{
    console.log(`Server started and is  running on port ${PORT}`)
})