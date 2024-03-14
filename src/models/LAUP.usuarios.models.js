import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    identificacion: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario