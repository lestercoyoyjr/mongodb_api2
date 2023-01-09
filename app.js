'use strict'

//REQUIRES
const express = require("express");
var bodyParser = require('body-parser');

// EXPRESS USE
var app = express()

// ROUTES LOADING FILES

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

// REWRITE ROUTES
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Rquested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    req.header('Allow', 'GET,M POST, OPTIONS, PUT, DELETE');
});

// EXPORT MODULE
module.exports = app;