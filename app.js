var express = require('express');
var logger = require('morgan');
var schedulesRouter = require('./schedules/scheduleController');
var usersRouter = require("./users/usersController");
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// next() follows the top down sequence of this file
app.use((req, res, next) => {
  console.log("Previous validation")
  next()
});


app.use('/schedules', schedulesRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  console.log("After validation")
  next()
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("Default middleware called!")
    err = {
        status:404,
        message:"Not Found"
    }
    next(err)
});

// error handler
app.use(function(err, req, res, next) {
  console.log("ERROR middleware called!!")
  res.status(err.status || 500);
  res.send({
    message: err.message
  })
});

module.exports = app;
