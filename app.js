var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedulesRouter = require('./schedules/scheduleController');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/schedules', schedulesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("Default middleware called!")
    err = {
        status:404,
        message:"Not Found"
    }
    next(err)
  // res.status(404).send()
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log("ERROR middleware called!!")
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message
  })
  // res.render('error');
});

module.exports = app;
