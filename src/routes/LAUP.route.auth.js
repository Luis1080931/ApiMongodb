import { Router } from "express";
import { validarToken } from "../controllers/LAUP.auth.js";

const rutaValidacion = Router()

rutaValidacion.post('/validacion', validarToken)

export default rutaValidacion