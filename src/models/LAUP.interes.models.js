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
    }
})

const Interes = mongoose.model('Interes', interesSchema)
export default Interes