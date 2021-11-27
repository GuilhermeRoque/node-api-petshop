const express = require('express');
const router = express.Router();
const scheduleDAO = require("../models/scheduleDAO")
const moment = require("moment")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/',(req,res)=>{
    console.log(req.body)
    const date = moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
    console.log(date)
    const schedule = {...req.body,date}
    console.log(schedule)
    scheduleDAO.add(schedule)
    res.send(schedule)
})

module.exports = router;
