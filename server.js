//MIDDLEWARES
const { ok } = require('assert');
const cors = require("cors");
const express = require('express')
const bodyParser = require('body-parser');

const app= express();
app.use(cors());
app.use(bodyParser.json());
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hola Mundo")
});

app.get('/productos/',(req,res)=>{
    res.send("Consultando todos los productos")
});

app.get('/productos/:id',(req,res)=>{
    var idProducto=req.params.id
    console.log(idProducto);
    res.send({
        "status": "ok",
        "id": idProducto,
        "mensaje": `Consulta de producto : ${idProducto}`,
        "body":req.body
    })
});

app.post('/productos',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(port,()=>{
    console.log('Servidor escuchando por el puerto: ',port)
}).on('error',err=>{
    console.log('Error al iniciar el servidor: ',err)
});