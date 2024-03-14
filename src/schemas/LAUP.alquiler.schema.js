import { check } from "express-validator";

export const alquilerValidate = [
    check("valor", "El valor es requerido")
    .not().isEmpty().isFloat(),

    check("fecha", "La fecha es requerida y debe ser formato año-mes-dia")
    .not().isEmpty(),

    check("meses", "Los meses son requeridos y dato numerico")
    .not().isEmpty().isNumeric(),

    check("descripcion", "La descripcion es obligatoria y maximo 200 caracteres")
    .not().isEmpty().isLength({ max: 200 }),

    check("intereses", "El interes es obligatorio y numerico")
    .not().isEmpty().isNumeric(),

    check("cliente", "El cliente es requerido")
    .not().isEmpty(),

    check("articulo", "El articulo  es requerido")
    .not().isEmpty()
]