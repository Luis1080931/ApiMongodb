import { Router } from "express";
import { interesePagados } from "../controllers/LAUP.consultas.controller.js";

const rutaConsultas = Router()

rutaConsultas.get('/interesPagos', interesePagados)

export default rutaConsultas