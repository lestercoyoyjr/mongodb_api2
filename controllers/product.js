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
    },

    // FIND
    find:function(req,res){
        console.log("==============");
        console.log("ENTRANDO A LA FUNCION FIND");
        db.collection("productos").find({productID: parseInt(req.params.id)}).toArray(
            (error, dataProducts) => {
                if (error || !dataProducts){
                    return res.status(400).send({
                        message: "No se encontro el producto"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        product: dataProducts[0]
                    });
                }
            }
        )
    },

    // SAVE
    save: function(req,res){
        console.log("==============");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if(req.body.productID == "0"){
            // ES NUEVO
            db.collection("products").count().then(
                countProducts => {
                    var product = {}
                    product.productID = countProducts +1;
                    product.description = req.body.description; 
                    product.price = req.body.price; 
                    db.collection("products").insertOne(product, 
                      (error, result) => {
                        if (error){
                            return res.status(404).send({
                                message: "No se pudo registrar el producto"
                            });
                        } else {
                            return res.status(200).send({
                                status: "success",
                                product: result
                            });
                        }
                      }  
                    );
                }
            )
        } else {
            console.log('ENTRANDO A EDITAR');
            var product = {}
            product.productID = parseInt(req.body.productID);
            product.description = parseInt(req.body.description);
            product.price = parseInt(req.body.price);
            console.log(product);
            db.collection("products").updateOne({productID: {$eq:parseInt(req.body.productID)}},
                                                {$set: product},
                                                (error, result) => {
                                                    if (error){
                                                        return res.status(404).send({
                                                            message: "No se pudo editar el producto"
                                                        });
                                                    } else {
                                                        return res.status(200).send({
                                                            status: "success",
                                                            product: result
                                                        });
                                                    }
                                                  }           
            ); 
        }
    }

}

module.exports = controller;