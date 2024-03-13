import { Router } from "express";
import { postClientLAUP, getClientsLAUP, putClientLAUP, deleteClientLAUP } from "../controllers/LAUP.clientes.controller.js";
import { clientSchema } from "../schemas/LAUP.clients.schemas.js";
import { validateSchema } from "../middlewares/validation.middleware.js";
import { validarToken } from "../controllers/LAUP.auth.js";

const rutaClient = Router()

rutaClient.post('/registrar', validarToken,validateSchema(clientSchema), postClientLAUP)
rutaClient.get('/listar', getClientsLAUP)
rutaClient.put('/actualizar/:id', putClientLAUP)
rutaClient.post('/eliminar/:id', deleteClientLAUP)

export default rutaClient