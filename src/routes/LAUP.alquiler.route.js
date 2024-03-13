import { Router } from "express";
import { postAlquilerLAUP, putAlquilerLAUP } from "../controllers/LAUP.alquiler.controller.js";

const rutaAlquiler = Router()

rutaAlquiler.post('/registrar', postAlquilerLAUP)
rutaAlquiler.put('/actualizar/:id', putAlquilerLAUP)

export default rutaAlquiler