//ARCHIVO DE RUTAS PARA LOS ARRENDATARIOS
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/arrendatariosCT");

router.get("/",controler.obtenerTodos);
router.get("/:input",controler.obtenerArrendatario);
router.post("/",controler.agregarArrendatario);
router.patch("/:input",controler.actualizarArrendatario);
router.delete("/:input",controler.borrarArrendatario);
router.put("/add/:id/:propiedad",controler.agregarPropiedad)
router.put("/remove/:id/:propiedad",controler.quitarPropiedad)
router.get("/:id/propiedades",controler.obtenerPropiedades)

module.exports = router;