const express = require("express");
const router = express.Router();
let my_sql = require('../models/db-config')

router.get('/', (req, res) => {
    const antrian = [{
        tgl: '2021-03-15',
        urut: 1,
        jenis: 'UMUM',
        panggil: 0,
        lewati: 0,
        selesai: 0
    }];
    // res.send('Jajal;')
    res.render('kiosk')
});

router.get('/data', (req, res) => {
    my_sql.query()
    res.send('OK')
})

module.exports = router;