//ARCHIVO QUE CONTIENE EL MODELO DE DATOS Y FUNCIONES DE MANEJO DE LAS PROPIEDADES DE FORMA LOCAL
const arMD = require("../Modelos/arrendatariosMD");
const prMD = require("../Modelos/propietariosMD")

const datos = [
    { 
        id: 1,
        clave: "OD2667" ,
        descripcion: "Casa grandota",    
        foto: [] , 
        propietarios: [1,2],
        arrendatario: 1
    },
    { 
        id: 2,
        clave: "EN2187" ,
        descripcion: "Casa mediana", 
        foto: [] ,  
        propietarios: [3,2],
        arrendatario: 2
    },
    { 
        id: 3,
        clave: "PS2714" ,
        descripcion: "Casa chica",  
        foto: [] ,   
        propietarios: [1],
        arrendatario: 3
    }
]

const todos= function(){
    return datos
}

const buscarPorID= function(id){
    return datos.find(x=>x.id==id)
}

const agregar=function(p){
    datos.push({id: datos.length+1, clave: p.clave, descripcion: p.descripcion,foto: p.foto,propietarios: p.propietarios,arrendatario: p.arrendatario})
    return datos
}

const borrar=function(id){
    let index = datos.findIndex(x=> x.id==id)
    if(index>-1)
        datos.splice(index,1)
    return datos
}

const actualizar=function(id,cambios){
    let p= buscarPorID(id)
    let nuevo= {...p,...cambios}
    console.log(nuevo)
    borrar(id)
    datos.splice(id-1,0,nuevo)
    return datos
}

const agregarArrendatario=function(id,arrendatario){
    let p= buscarPorID(id)
    borrar(id)
    let nuevo= {...p,arrendatario:arrendatario}
    console.log(nuevo)
    datos.splice(id-1,0,nuevo)
    arMD.agregarPropiedad(arrendatario,id)
    return buscarPorID(id)
}

const liberarArendatario=function(id){
    let p=buscarPorID(id)
    let are=p.arrendatario
    if(are!=null||are!=" "){
        borrar(id)
        let nuevo= {...p,arrendatario:" "} 
        datos.splice(id-1,0,nuevo)
        arMD.quitarPropiedad(are,id)
    }
    return buscarPorID(id)
}

const getArrendatario=function(id){
    let p=buscarPorID(id).arrendatario
    return arMD.buscarPorID(p)
}

const getPropietarios=function(id){
    let lista=[]
    let p=buscarPorID(id).propietarios

    p.forEach(x => {
        lista.push(prMD.buscarPorID(x))
    });
    return lista
}

module.exports={
    todos,
    buscarPorID,
    agregar,
    borrar,
    actualizar,
    agregarArrendatario,
    liberarArendatario,
    getArrendatario,
    getPropietarios
}