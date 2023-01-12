// REQUIRE
var MongoClient = require('mongodb').MongoClient;
// const {MongoCLient} = require("mongodb");
require("dotenv").config();

// VAR
const DB = process.env.MONGODB_URI;
// const client = new MongoCLient(DB);

// CONNECTION]
MongoClient.connect(DB, function(err, db) {
    if (err) {
        console.error(err);
    }
    var collection = db.collection('collectionName');
    collection.find().toArray(function(err, docs) {
        console.log(docs);
    });
});