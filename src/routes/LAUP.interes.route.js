import { Router } from "express";
import { postInteresLAUP, deleteInteresLAUP } from "../controllers/LAUP.interes.controller.js";

const rutaInteres = Router()

rutaInteres.post('/registrar', postInteresLAUP)

export default rutaInteres
