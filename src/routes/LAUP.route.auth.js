import { Router } from "express";
import { validarCliente} from "../controllers/LAUP.auth.js";

const rutaValidacion = Router()

rutaValidacion.post('/validacion', validarCliente)

export default rutaValidacion