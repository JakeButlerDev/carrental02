// Require express and start up package
const express = require('express')
// Define app and set to use express module
const app = express()
// Set up path to require module
const path = require('path')

// Get main page of website at localhost:4040
// Output index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// app.post('/', (req, res) => {

// })

// app.put('/', (req, res) => {

// })

// app.delete('/', (req, res) => {

// })

// Use routers to point towards our /rent and /return paths
// router is exported from module.exports in each js file
const rentRoute = require('./routes/rent')
const returnRoute = require('./routes/return')
app.use('/rent', rentRoute)
app.use('/return', returnRoute)

const port = 4040   // Like the 4040 club, y'know?

app.listen(port, () => {    // Server listening...
    console.log(`Server is listening on port ${port}...`)
})