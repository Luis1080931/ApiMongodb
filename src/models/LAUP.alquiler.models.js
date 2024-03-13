import mongoose from "mongoose";

const alquilerSchema = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    meses: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    intereses: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    articulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }
})

const Alquiler = mongoose.model('Alquiler', alquilerSchema)
export default Alquiler