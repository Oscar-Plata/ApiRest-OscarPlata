//ARCHIVO DE RUTAS PARA LOS PROPIETARIOS
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/propietariosCT");

router.get("/",controler.obtenerTodos);
router.get("/:input",controler.obtenerPropietario);
router.post("/",controler.agregarPropietario);
router.patch("/:input",controler.actualizarPropietario);
router.delete("/:input",controler.borrarPropietario);
router.put("/add/:id/:propiedad",controler.agregarPropiedad)
router.put("/remove/:id/:propiedad",controler.quitarPropiedad)
router.get("/:id/propiedades",controler.obtenerPropiedades)

module.exports = router;