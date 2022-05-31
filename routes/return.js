// Require express
const express = require('express')
// Use express module to utilize Router
const router = express.Router()
// Once again, still needed? Think current issue is because server isn't finding return.html in correct path
const path = require('path')

router.get('', (req, res) => {    // get return vehicle page
    res.sendFile(path.join(__dirname, '/return.html'))
})

// router.post('/', (req, res) => {

// })

// router.put('/', (req, res) => {

// })

// router.delete('/', (req, res) => {

// })

module.exports = router