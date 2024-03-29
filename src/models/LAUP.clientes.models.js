import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    identificacion: {
        type: Number,
        required: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true
    },
    fecha_nac: {
        type: String,
        required: true
    }
})

const Clientes=mongoose.model('Cliente', clientSchema)

export default Clientes