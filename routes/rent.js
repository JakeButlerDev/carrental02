// Require express
const express = require('express')
// Use express module to utilize Router method
const router = express.Router()
// Require path, think this is necessary still but is it? Think current issue is because server isn't finding rent.html in correct path
const path = require('path')

router.get('', (req, res) => {    // get rent a vehicle page
    res.sendFile(path.join(__dirname, '/rent.html'))
})

// router.post('/', (req, res) => {

// })

// router.put('/', (req, res) => {

// })

// router.delete('/', (req, res) => {
    
// })

module.exports = router