import mongoose from "mongoose";
import Cliente from '../models/LAUP.clientes.models.js'
import { createToken } from "../services/token.js";

export const validarToken = async (req, res) => {
    try {
        // Simplemente como ejemplo, verifica las credenciales en la base de datos
        const client = await Cliente.findOne({ identificacion: req.body.identificacion});
    
        if (!user) {
          return res.status(401).json({ error: 'Identificacion inválida' });
        }
    
        // Crea un token JWT con la información del usuario
        const token = jwt.sign({ clientId: client._id, identificacion: client.identificacion },createToken());
    
        // Devuelve el token como respuesta
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    };
    