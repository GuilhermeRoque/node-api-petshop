const express = require('express');
const router = express.Router();
const schedule = require("../models/scheduleDAO")
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/',(req,res)=>{
    console.log(req.body)
    schedule.add(req.body)
    res.send("OK")
})

module.exports = router;
