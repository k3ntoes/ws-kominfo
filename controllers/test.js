const express=require("express");
const app = express();
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Test Pages');
});

module.exports=router;