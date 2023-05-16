//ARCHIVO CONTROLADOR CON LAS FUNCIONES PARA MANEJAR PETICIONES A LA FUENTE DE DATOS DE PROPIETARIOS
const propietarios = require("../Modelos/propietariosMD");
const propiedadesMD = require("../Modelos/propiedadesMD");


const obtenerTodos = async function (req,res){
    await res.json(propietarios.todos());
};

const obtenerPropietario= async function(req,res){
    await res.json(propietarios.buscarPorID(req.params.input))
};

const agregarPropietario = async function(req,res){
    const {id,nombre, rfc, foto,propiedades} = req.body;
    if (nombre && rfc && foto && propiedades) 
    {
        let nuevo = {nombre: nombre , rfc: rfc, foto: foto,propiedades: propiedades};
        console.log(nuevo)
        propietarios.agregar(nuevo)
        res.json(propietarios.datos);
    }
    else
    {
        return
    }
}

const borrarPropietario =async function(req,res){
    await res.json(propietarios.borrar(req.params.input))
}

const actualizarPropietario= async function(req,res){
    await res.json(propietarios.actualizar(req.params.input,req.body))
}

const agregarPropiedad= async function(req,res){
    await res.json(propietarios.agregarPropiedad(req.params.id,req.params.propiedad))
}

const quitarPropiedad= async function(req,res){
    await res.json(propietarios.quitarPropiedad(req.params.id,req.params.propiedad))
}

const obtenerPropiedades= async function(req,res){
    let ps=propietarios.obtenerPropiedades(req.params.id)
    let lista=[]
    ps.forEach(x => {
        lista.push(propiedadesMD.buscarPorID(x))
    });
    await res.json(lista)
}


module.exports={
    obtenerTodos,
    obtenerPropietario,
    agregarPropietario,
    borrarPropietario,
    actualizarPropietario,
    agregarPropiedad,
    quitarPropiedad,
    obtenerPropiedades
}