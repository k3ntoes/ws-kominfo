const express = require("express");
const ejs = require("ejs");
const router = express.Router()

router.get('/', (req, res) => {
    res.render('main')
})

router.get('/ListPasien', (req, res) => {
    let x = ejs.render('listPasien')
    
    res.render(x)
})

module.exports = router;