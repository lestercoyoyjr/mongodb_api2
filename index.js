const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
var app = require('./app');

const DB = process.env.MONGODB_URI;  
const port = process.env.PORT || 3999;

mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    app.listen(port,()=>{
      console.log("Successfully connected ");
    });
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });