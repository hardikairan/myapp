var createError = require('http-errors');
const MongoClient = require('mongodb').MongoClient
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// MongoClient.connect('mongodb+srv://hardik_tecdune:<Welcome@29>@cluster0.ofjlb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })

const db = require('./services/database');

// MongoClient.connect('mongodb+srv://hardik_tecdune:kMgJi630Z5LobClZ@cluster0.ofjlb.mongodb.net/myFirstDatabases', {
//   useUnifiedTopology: true
// }, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })

// module.exports = app;

// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })

// MongoClient.connect(/* ... */)
//   .then(client => {
//     // ...
//     const db = client.db('star-wars-quotes')
//     app.use(/* ... */)
//     app.get(/* ... */)
//     app.post(/* ... */)
//     app.listen(/* ... */)
//   })
//   .catch(console.error)
