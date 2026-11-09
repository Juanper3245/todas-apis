import { Router } from "express";

import * as productoCtr from "./producto.controller.js";

const router = Router();

router.get("/productos", productoCtr.obtenerProductos);
router.get("/productos/:id", productoCtr.obtenerProductoPorId);
router.post("/productos", productoCtr.crearProducto);
router.delete("/productos/:id", productoCtr.borrarProducto);
router.put("/productos/:id", productoCtr.actualizarProducto);

export default router;
