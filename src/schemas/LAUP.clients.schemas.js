import { z } from "zod";

export const clientSchema = z.object({
    identificacion: z.number({
        required_error: 'La identificacion es requerida'
    }),
    nombres: z.string({
        required_error: 'Sus nombres son requeridos'
    }),
    direccion: z.string({
        required_error: 'La direccion es requerida'
    }),
    telefono: z.string({
        required_error: 'El telefono es requerido'
    }),
    fecha_nac: z.string({
        required_error: 'La fecha de nacimiento es requerida'
    })
})