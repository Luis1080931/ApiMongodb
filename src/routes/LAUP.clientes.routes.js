import { Router } from "express";
import { postClientLAUP, getClientsLAUP, putClientLAUP, deleteClientLAUP } from "../controllers/LAUP.clientes.controller.js";
import { validarToken } from "../controllers/LAUP.auth.js";
import { clientsValidate } from "../schemas/LAUP.clients.schemas.js";

const rutaClient = Router()

rutaClient.post('/registrar', clientsValidate, postClientLAUP)
rutaClient.get('/listar',validarToken, getClientsLAUP)
rutaClient.put('/actualizar/:id',validarToken, clientsValidate, putClientLAUP)
rutaClient.post('/eliminar/:id',validarToken, deleteClientLAUP)

export default rutaClient