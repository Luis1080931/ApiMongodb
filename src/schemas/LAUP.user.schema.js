import { check } from "express-validator";

export const userValidate = [
    check("identificacion", "La identificacion es requerida y datos numerico")
    .not().isEmpty().isNumeric(),

    check("password", "La contraseña es requerida y maximo 20 caracteres")
    .not().isEmpty().isLength({ max: 20 })
]