import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            enum: ["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"],
            required: true
        },
        estado: {
            type: String,
            enum: ["activo", "inactivo"],
            required: true
        }
    }
)

const Article = mongoose.model('Article', articulosSchema)
export default Article