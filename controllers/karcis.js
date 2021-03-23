const express=require("express");
const app = express();
const router = express.Router();

router.get('/karcis/', (req, res) => {
    res.render('kiosk')
});

module.exports=router; 