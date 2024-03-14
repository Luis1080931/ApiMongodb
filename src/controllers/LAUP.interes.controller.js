import Interes from "../models/LAUP.interes.models.js";

export const postInteresLAUP = async (req, res) => {
    try {
        const interes = await Interes.create(req.body)

        if(interes){
            res.status(200).json({Message: 'Interes registrado'})
        }else{
            res.status(403).json({Message: 'Interes no fue registrado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor ' + error})
    }
}

export const deleteInteresLAUP = async (req, res) => {
    try {
        const interes = await Interes.findById(req.params.id);

        interes.estado = "pagado";
        await interes.save()

        if(interes){
            res.status(200).json({Message: 'Se pago el interes'})
        }else{
            res.status(404).json({Message: 'Interes no fue pagado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}