import { check } from "express-validator";

export const clientsValidate = [
    check("identificacion", "La identificacion es requerida")
    .not().isEmpty().isNumeric(),

    check("nombres", "Nombres son requeridos y maximo 200 caracteres")
    .not().isEmpty().isLength({ max: 200 }),

    check("direccion", "La direccion es requerida y maximo 100 caracteres")
    .not().isEmpty().isLength({ max: 100 }),

    check("telefono", "El telefono es requerido y maximo 10 caracteres")
    .not().isEmpty().isLength({ max: 10 }),

    check("fecha_nac", "La fecha de nacimiento es requerida y debe ser formato año/mes/dia")
    .not().isEmpty()
]