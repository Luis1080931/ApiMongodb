import { Router } from "express";
import { postUsuarioLAUP } from "../controllers/LAUP.usuarios.controller.js";

const rutaUser = Router()

rutaUser.post('/registrar', postUsuarioLAUP)

export default rutaUser