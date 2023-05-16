//ARCHIVO DE RUTAS PARA LAS PROPIEDADES
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/propiedadesCT");

router.get("/",controler.obtenerTodas);
router.get("/:id",controler.obtenerPropiedad);
router.post("/",controler.agregarPropiedad);
router.patch("/:id",controler.actualizarPropiedad);
router.delete("/:id",controler.borrarPropiedad);
router.put("/arrendar/:id/:arrendatario",controler.arrendar);
router.put("/liberar/:id",controler.liberar);
router.get("/:id/propietarios",controler.obtetenerPropietarios);
router.get("/:id/arrendatario",controler.obtenerArrendatario);
module.exports = router;