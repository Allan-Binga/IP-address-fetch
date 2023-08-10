const express = require('express')
const requestIp = require('request-ip')
const app = express()
const port = 3300

app.get('/', (req, res) =>{
    var clientIp = requestIp.getClientIp(req)
    res.send(`Your IP address is ${clientIp}`)
})    

app.listen(port, () =>{
    console.log(`Server ruunning on port ${port}`)
})