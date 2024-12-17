var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var dotenv = require('dotenv')
const connectDB = require("./db");

var app = express();
app.use(cors({
    origin: '*', // Or specify exact origins like 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
connectDB();
app.use('/', indexRouter);

module.exports = app;
