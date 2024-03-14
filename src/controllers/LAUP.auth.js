import  jwt from "jsonwebtoken"
import Usuario from "../models/LAUP.usuarios.models.js";
import { SECRET_TOKEN } from "../config.js";


export const validarCliente = async (req, res) => {
    try {
        const { identificacion, password } = req.body;
        const usuario = await Usuario.findOne({ identificacion, password });

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (password !== usuario.password) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        if( identificacion == usuario.identificacion && password == usuario.password ){
            const token = jwt.sign({ id: usuario._id }, SECRET_TOKEN);

            return res.status(200).json({ identificacion: usuario.identificacion, token, message: 'Token generado con éxito' });
        }else{
            res.status(404).json({ Message: 'Not found' })
        }
        

        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error del servidor"+ error });
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