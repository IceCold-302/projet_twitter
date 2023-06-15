const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const routing = require('./routes');
require('../projet_twitter/database')
const port = process.env.PORT || 3000;

// views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// built-in Mids

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API mids

app.use(routing);

// port

app.listen(port);