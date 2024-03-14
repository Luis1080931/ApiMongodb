import Clientes from "../models/LAUP.clientes.models.js";
import Alquiler from "../models/LAUP.alquiler.models.js";
import Interes from "../models/LAUP.interes.models.js";
import Article from "../models/LAUP.articulos.models.js";

export const interesePagados = async (req, res) => {
    try {
        const clients = Clientes.find().populate('nombres')
        const alquiler = Alquiler.find().populate('objectid')
        const interes = Interes.find().populate('mes', 'valor')
        const articles = Article.find().populate('nombre')

        const combinacion = [
            clients,
            alquiler,
            interes,
            articles
        ]

        if(combinacion){
            res.status(200).json(combinacion)
        }else{
            res.status(404).json({ Message: 'Not found' })
        }

        
    } catch (error) {
        res.status(500).json({ Message: 'Error del servidor' + error })
    }
    
}