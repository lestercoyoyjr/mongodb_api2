// REQUIRE
const {MongoCLient} = require("mongodb");
require("dotenv").config();

// VAR
const DB = process.env.MONGODB_URI;
const client = new MongoCLient(DB);

// CONNECTION]
client.connect().then{
    (response) => {
        console.log('Connection to BD is successful - url:' + response.url);
    },
    (error) => {
        console.log('error:' + error);
    }
}