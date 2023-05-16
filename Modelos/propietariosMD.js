//ARCHIVO QUE CONTIENE EL MODELO DE DATOS Y FUNCIONES DE MANEJO DE LOS PROPIETARIOS DE FORMA LOCAL
let datos = [
{
    id: 1,
    nombre: "Oscar Joel Lopez Plata",
    rfc: "OSCAR1234",
    foto: "oscar.png",
    propiedades: [1,3]
},
{
    id: 2,
    nombre: "Sara Abigail Lopez Plata",
    rfc: "SARA1234",
    foto: "sara.png",
    propiedades: [1,2]
},
{
    id: 3,
    nombre: "Alonso Josue Lopez Plata",
    rfc: "ALONSO1234",
    foto: "alonso.png",
    propiedades: [2]
}
]

const todos= function(){
    return datos
}
const buscarPorID= function(id){
    return datos.find(x=>x.id==id)
}

const agregar=function(p){
    datos.push({id: datos.length+1, nombre: p.nombre, rfc: p.rfc,foto: p.foto,propiedades: p.propiedades})
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
    datos.push(nuevo)
    return datos
}

const agregarPropiedad=function(id,propiedad){
    let p= buscarPorID(id)
    let propiedades=p.propiedades

    if(!propiedades.includes(propiedad)){
        console.log("No contiene propiedad "+ propiedad)
        propiedades.push(propiedad)
        borrar(id)
        let nuevo= {...p,propiedades:propiedades}
        datos.splice(id-1,0,nuevo)

        console.log("\nse agrega")
    }else{
        console.log("Si contiene propiedad "+ propiedad)
    }
    return p
}

const quitarPropiedad=function(id,propiedad){
    let p= buscarPorID(id)
    let propiedades=p.propiedades
    if(propiedades.includes(propiedad)){
        console.log("Si contiene propiedad "+ propiedad)
        let aux= propiedades.findIndex(x=> x=propiedad)
        propiedades.splice(aux,1)
        borrar(id)
        let nuevo= {...p,propiedades:propiedades}
        datos.splice(id-1,0,nuevo)
    }else{
        console.log("No contiene propiedad "+ propiedad)
    }
    return p
}

const obtenerPropiedades=function(id){
    return buscarPorID(id).propiedades
}

module.exports={
    todos,
    buscarPorID,
    agregar,
    borrar,
    actualizar,
    agregarPropiedad,
    quitarPropiedad,
    obtenerPropiedades,
    datos
}