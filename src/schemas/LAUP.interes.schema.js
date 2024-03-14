import { check } from "express-validator";

export const interesValidate = [
    check("mes", "El mes es requerido y numerico")
    .not().isEmpty().isNumeric(),

    check("fecha", "La fecha es requerida y el formato año/mes/dia")
    .not().isEmpty(),

    check("valor", "El valor es requerido y maximo 50 caracteres")
    .not().isEmpty().isLength({ max: 50 }),

    check("alquiler", "El alquiler es requerido")
    .not().isEmpty(),

    check("estado")
    .not()
    .isEmpty()
    .custom((value) => {
        const estado = ["pagado", "no pagado"]
        if(!estado.includes(value)){
            throw new Error('Estado incorrecto')
        }
        return true;
    })
]