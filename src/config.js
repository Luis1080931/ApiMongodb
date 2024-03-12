import mongoose from "mongoose"

export const dbconnect = async () => {
   
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LAUPPrenderia')
        console.log('Conexion exitosa')
    } catch (error) {
        console.log('Error de conexion' + error)
    }
}

export const SECRET_TOKEN = 'mitokensecreto'


