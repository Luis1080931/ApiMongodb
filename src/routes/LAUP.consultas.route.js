import { Router } from "express";
import { interesesPagadosLAUP, interesesPendientesLAUP, interesesRecaudadosLAUP } from "../controllers/LAUP.consultas.controller.js";

const rutaConsultas = Router()

rutaConsultas.get('/interesPagos/:id', interesesPagadosLAUP)
rutaConsultas.get('/interesPendientes/:id', interesesPendientesLAUP)
rutaConsultas.get('/interesRecaudados', interesesRecaudadosLAUP)

export default rutaConsultas