import { Router } from "express";
import { postInteresLAUP, deleteInteresLAUP } from "../controllers/LAUP.interes.controller.js";
import { validarToken } from "../controllers/LAUP.auth.js";
import { interesValidate } from "../schemas/LAUP.interes.schema.js";

const rutaInteres = Router()

rutaInteres.post('/registrar',validarToken, interesValidate, postInteresLAUP)
rutaInteres.put('/actualizar/:id', deleteInteresLAUP)

export default rutaInteres
