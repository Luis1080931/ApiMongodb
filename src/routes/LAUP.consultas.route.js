import { Router } from "express";
import { interesePagadosLAUP, interesesPendientesLAUP, interesesRecaudadosLAUP } from "../controllers/LAUP.consultas.controller.js";

const rutaConsultas = Router()

rutaConsultas.get('/interesPagos', interesePagadosLAUP)
rutaConsultas.get('/interesPendientes/:id', interesesPendientesLAUP)
rutaConsultas.get('/interesRecaudados', interesesRecaudadosLAUP)

export default rutaConsultas