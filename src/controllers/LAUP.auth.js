/* import mongoose from "mongoose";
import Usuario from "../models/LAUP.usuarios.models.js";
import { createToken } from "../services/token.js";

export const validarToken = async (req, res) => {
    try {
        // Simplemente como ejemplo, verifica las credenciales en la base de datos
        const client = await Usuario.findOne({ identificacion: req.body.identificacion});
    
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
     */

import  jwt from "jsonwebtoken"
import Usuario from "../models/LAUP.usuarios.models.js";
import { SECRET_TOKEN } from "../config.js";


export const validarCliente = async (req, res) => {
    try {
        const { identificacion, contraseña } = req.body;
        const cliente = await Usuario.findOne({ identificacion, contraseña });

        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        if (contraseña !== cliente.contraseña) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: cliente._id }, SECRET_TOKEN);

        return res.status(200).json({ identificacion: cliente.identificacion, token, message: 'Token generado con éxito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ocurrió un error al procesar la solicitud" });
    }
};
export const validarToken = (req, res, next) => {
    const token = req.headers['token'];

    if (!token) {
        return res.status(404).send({ message: "token es requerido" });
    } else {
        jwt.verify(token, SECRET_TOKEN, (error, decoded) => {
            if (error) {
                return res.status(404).json({ 'message': 'token incorrecto' });
            } else {
                next();
            }
        });
    }
}