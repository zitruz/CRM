'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./view");
app.use(express.static("public"));

app.use('/', index);


module.exports = app