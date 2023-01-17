// REQUIRE
var client = require('mongodb').MongoClient;
// const {MongoCLient} = require("mongodb");
require("dotenv").config();

// VAR
const DB = process.env.MONGODB_URI;
// const client = new MongoCLient(DB);

// CONNECTION
client.connect(DB, function(err, db) {
    if (err) {
        console.error(err);
    }
    var collection = db.collection('testingbd');
    collection.find().toArray(function(err, docs) {
        console.log(docs);
    });
});

module.exports = client;

//////////////////////////////////////////////////////////////////////

/* // const {MongoCLient} = require("mongodb");
// const client = new MongoCLient(process.env.MONGODB_URI);

// client.connect().then(
//     (response) => {
//         console.log('La conexion a la bd es correcta - url:' + response.url);
//     },
//     (error) => {
//         console.log('error:' + error)
//     }
// )

//  */