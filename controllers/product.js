'use strict'

var client = require("../database/db");
var db = client.db("testingbd");

// CONTROLLERS
var controller = {
    // LIST
    list: function(req,res){
        console.log("==============");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("productos").find().toArray(
            (error, dataProducts) => {
                if (error || !dataProducts){
                    return res.status(400).send({
                        message: "No se encontraron productos"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        message: dataProducts
                    });
                }
            }
        );
    }
    // SEARCH

    // SAVE

}

module.exports = controller;