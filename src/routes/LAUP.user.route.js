import { Router } from "express";
import { postUsuarioLAUP } from "../controllers/LAUP.usuarios.controller.js";
import { userValidate } from "../schemas/LAUP.user.schema.js";


const rutaUser = Router()

rutaUser.post('/registrar',userValidate, postUsuarioLAUP)

export default rutaUser