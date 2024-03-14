import { Router } from "express";
import { postAlquilerLAUP, putAlquilerLAUP } from "../controllers/LAUP.alquiler.controller.js";
import { alquilerValidate } from "../schemas/LAUP.alquiler.schema.js";
import { validarToken } from "../controllers/LAUP.auth.js";

const rutaAlquiler = Router()

rutaAlquiler.post('/registrar',validarToken, alquilerValidate, postAlquilerLAUP)
rutaAlquiler.put('/actualizar/:id',validarToken, alquilerValidate, putAlquilerLAUP)

export default rutaAlquiler