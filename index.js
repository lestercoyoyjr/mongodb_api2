'use strict'

// REQUIRES
var mongoose = require('mongoose');

// PUERTO SERVIDOR
var port = process.env.port || 3999;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.xalt6v5.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true})
.then(
    ()=>{
        console.log('La conexion a la bd es correcta')
        // CREAR EL SERVIDOR
        app.listen(port,()=>{
            console.log('El servidor http://localhost:3999 esta funcionando.')
        });
    }
)
.catch(error => console.log(error));