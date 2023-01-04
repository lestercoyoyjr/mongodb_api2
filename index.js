const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();

const DB = process.env.MONGODB_URI;  
const Port = process.env.PORT || 3999;

mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });