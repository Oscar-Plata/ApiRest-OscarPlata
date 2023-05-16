//CODIGO APLICACION PRINCIPAL BASE
const puerto = 4000;
const cors = require("cors");
const express = require('express')
const bodyParser = require('body-parser');
const RTPropiedades= require("./Rutas/propiedadesRT");
const RTPropietarios= require("./Rutas/propietariosRT");
const RTArrendatarios= require("./Rutas/arrendatariosRT");
const app= express();
app.use(cors());
app.use(bodyParser.json());
app.use('/propiedades',RTPropiedades);
app.use('/propietarios',RTPropietarios);
app.use('/arrendatarios',RTArrendatarios);

app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>META 2.2 Oscar Plata</title>
            <style> 
                body{
                    background-color:rgb(51,51,51);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
    
    
                footer{
                    padding: 10px;
                    background-color: rgb(27,135,152);
                    margin-top: auto;
                }
    
                h1{
                    color: rgb(251,255,227);
                    text-align: center;
                }
    
                .headerDiv{
                    padding: 10px;
                    background-color:rgb(158,12,57);
                }
    
                * {
                    margin: 0;
                    padding: 0;
                    font-family:'Courier New', Courier, monospace;
                    font-weight: bold;
                }
    
                a{
                    margin: 20px;
                    background-color: rgb(131,163,0);
                    color: rgb(251,255,227);
                    padding: 10px;
                    text-align: center;
                    border-radius: 10px;
                    height: 12vh;
                    width: 15vw;
                    font-size: 2.5vw;
                }
                a:hover{
                    padding: 8px;
                    font-size: 4vw;
                    width: 20vw;
                }
    
                .inputDiv{
                    border-radius: 10px;
                    background-color: rgba(251,255,227,0.8);
                    margin-top: 10px;
                    margin-left: 5px;
                    margin-right: 5px;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            <div class="headerDiv">
                <h1>Servicio web rest</h1>
            </div>
                <div class="inputDiv">
                    <center>
                    <label for="datos1">Selecciona una ruta: </label><br>
                    <br><a href="./propietarios">/PROPIETARIOS</a>
                    <br><br><a href="./propiedades">/PROPIEDADES</a>
                    <br><br><a href="./arrendatarios">/ARRENDATARIOS</a><br><br>
                    </center>
                </div>
            <footer><center>Meta 2.2 ~ Oscar Joel Lopez Plata ~ Desarrollo de Aplicaciones Web</center> </footer>
        </body>
    </html>
    `)
});


app.listen(puerto,()=>{
    console.log('Servidor escuchando por el puerto: ',puerto)
}).on('error',error=>{
    console.log('Error al iniciar el servidor: ',error)
});