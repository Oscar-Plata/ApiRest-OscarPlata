//ARCHIVO CONTROLADOR CON LAS FUNCIONES PARA MANEJAR PETICIONES A LA FUENTE DE DATOS DE PROPIEDADES s
const propiedades = require("../Modelos/propiedadesMD");

const obtenerTodas = async function (req,res){
    await res.json(propiedades.todos());
};

const obtenerPropiedad = async function(req,res){
    await res.json(propiedades.buscarPorID(req.params.id))
}

const agregarPropiedad = async function(req,res){
    const {id,clave, descripcion, foto,propietarios,arrendatario} = req.body;
    if (clave && descripcion && foto && propietarios && arrendatario) 
    {
        let nuevo = {clave: clave, descripcion: descripcion, foto: foto,propietarios: propietarios,arrendatario:arrendatario};
        console.log(nuevo)
        propiedades.agregar(nuevo)
        res.json(propiedades.datos);
    }
    else
    {
        return
    }
}

const actualizarPropiedad= async function(req,res){
    await res.json(propiedades.actualizar(req.params.id,req.body))
}

const borrarPropiedad=async function(req,res){
    await res.json(propiedades.borrar(req.params.id))
}

const arrendar=async function(req,res){
    await res.json(propiedades.agregarArrendatario(req.params.id,req.params.arrendatario))
}

const liberar=async function(req,res){
    await res.json(propiedades.liberarArendatario(req.params.id))
}

const obtenerArrendatario=async function(req,res){
    await res.json(propiedades.getArrendatario(req.params.id))
}

const obtetenerPropietarios=async function(req,res){
    await res.json(propiedades.getPropietarios(req.params.id))
}

module.exports={
    obtenerTodas,
    obtenerPropiedad,
    agregarPropiedad,
    actualizarPropiedad,
    borrarPropiedad,
    arrendar,
    liberar,
    obtenerArrendatario,
    obtetenerPropietarios
}