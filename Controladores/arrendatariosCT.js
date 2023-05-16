//ARCHIVO CONTROLADOR CON LAS FUNCIONES PARA MANEJAR PETICIONES A LA FUENTE DE DATOS DE ARRENDATARIOS
const arrendatarios = require("../Modelos/arrendatariosMD");
const propiedadesMD = require("../Modelos/propiedadesMD");

const obtenerTodos = async function (req,res){
    await res.json(arrendatarios.todos());
};

const obtenerArrendatario= async function(req,res){
    await res.json(arrendatarios.buscarPorID(req.params.input))
};

const agregarArrendatario = async function(req,res){
    const {id,nombre, rfc, foto,propiedades} = req.body;
    if (nombre && rfc && foto && propiedades) 
    {
        let nuevo = {nombre: nombre , rfc: rfc, foto: foto,propiedades: propiedades};
        console.log(nuevo)
        arrendatarios.agregar(nuevo)
        res.json(arrendatarios.datos);
    }
    else
    {
        return
    }
}

const borrarArrendatario =async function(req,res){
    await res.json(arrendatarios.borrar(req.params.input))
}

const actualizarArrendatario= async function(req,res){
    await res.json(arrendatarios.actualizar(req.params.input,req.body))
}

const agregarPropiedad= async function(req,res){
    await res.json(arrendatarios.agregarPropiedad(req.params.id,req.params.propiedad))
}

const quitarPropiedad= async function(req,res){
    await res.json(arrendatarios.quitarPropiedad(req.params.id,req.params.propiedad))
}

const obtenerPropiedades= async function(req,res){
    let ps=arrendatarios.obtenerPropiedades(req.params.id)
    let lista=[]
    ps.forEach(x => {
        lista.push(propiedadesMD.buscarPorID(x))
    });
    await res.json(lista)
}

module.exports={
    obtenerTodos,
    obtenerArrendatario,
    agregarArrendatario,
    borrarArrendatario,
    actualizarArrendatario,
    agregarPropiedad,
    quitarPropiedad,
    obtenerPropiedades

}