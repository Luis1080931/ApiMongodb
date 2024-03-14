import mongoose from "mongoose";

const interesSchema = mongoose.Schema({
    mes: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date, 
        required: true
    },
    valor: {
        type: Number,
        min: 0,
        max: 10000,
        required: true
    },
    alquiler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alquiler'
    },
    estado: {
        type: String,
        enum: ["pagado", "no Pagado"],
        required: true
    }
})

const Interes = mongoose.model('Interes', interesSchema)
export default Interes