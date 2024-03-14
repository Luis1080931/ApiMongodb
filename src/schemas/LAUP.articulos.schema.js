import { check } from "express-validator";

export const articlesValidate = [
    check("nombre", "El nombre es requerido y maximo 100 caracteres")
    .not().isEmpty().isLength({ max: 100 }),

    check("tipo")
    .not()
    .isEmpty()
    .custom((value) => {
        const tipo = ["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"]
        if(!tipo.includes(value)){
            throw new Error('Tipo incorrecto')  
        } 
        return true;
    }),

    check("estado")
    .not()
    .isEmpty()
    .custom((value) => {
        const estado = ["activo", "inactivo"]
        if(!estado.includes(value)){
            throw new Error('Estado incorrecto')
        }
    })
]