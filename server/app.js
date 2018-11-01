const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes')

app.set(path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

module.exports = app;