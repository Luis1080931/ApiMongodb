import Cliente from '../models/LAUP.clientes.models.js'

export const getClientsLAUP = async (req, res) => {
    try {
        const client = Cliente.find({
            cliente: req.params.id
        }).populate('cliente')
        
        if(client.length>0){
            res.status(200).json(client)
        }else{
            res.status(404).json({Message: 'No hay clientes registrados'})
        }
    } catch (error) {
        
    }
}

export const postClientLAUP = async (req, res) => {
    try {
        const { identificacion, nombres, direccion, telefono, fecha_nac } = req.boby

        const newClient = new Cliente({
            identificacion, 
            nombres,
            direccion,
            telefono,
            fecha_nac
        })

        const saveClient = await newClient.save()
        
        if(!saveClient){
            res.status(403).json({Status: 403, Message: 'No se registro el usuario'})
        }else{
            res.status(200).json({Status: 200, Message: 'Cliente registrado con exito'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}

export const putClientLAUP = async (req, res) => {
    try {
        const client = await Cliente.findByIdAndUpdate(req.params.id, req.boby, {
            new: true
        })

        if(!client){
            res.status(404).json({Status: 404, Message: 'Cliente no encontrado'})
        }else{
            res.status(200).json({Message: 'Actualizado con exito'})
        }
    } catch (error) {
        res.status(500).json({Messsage: 'Error del servidor'+ error})
    }
}

export const deleteClientLAUP = async (req, res) => {
    try {
        const client = Cliente.findByIdAndDelete(req.params.id)

        if(!client){
            res.status(404).json({Message: 'Cliente no encontrado'})
        }else{
            res.status(200).json({Message: 'Cliente eliminado con exito'})
        }
    } catch (error) {
        
    }
}