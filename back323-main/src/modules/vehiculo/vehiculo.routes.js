import { Router } from "express";

import * as vehiculoCtr from "./vehiculo.controller.js";

const router = Router();

router.get("/vehiculos", vehiculoCtr.obtenerVehiculo);
router.get("/vehiculos/:id", vehiculoCtr.obtenerVehiculoPorId);
router.post("/vehiculos", vehiculoCtr.crearVehiculo);
router.delete("/vehiculos/:id", vehiculoCtr.borrarVehiculo);
router.put("/vehiculos/:id", vehiculoCtr.actualizarVehiculo);

export default router;
