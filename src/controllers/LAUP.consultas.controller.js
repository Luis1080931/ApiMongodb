import Clientes from "../models/LAUP.clientes.models.js";
import Alquiler from "../models/LAUP.alquiler.models.js";
import Interes from "../models/LAUP.interes.models.js";
import Article from "../models/LAUP.articulos.models.js";

/* export const interesePagadosLAUP = async (req, res) => {
    try {
        const clients = await Clientes.find().populate('nombres').lean()
        const alquiler = await Alquiler.find().populate('valor').lean()
        const interes = await Interes.find({ estado: {$eq: "pagado"} }).populate('mes', 'valor').lean()
        const articles = await Article.find().populate('nombre').lean()

        const combinacion = {
            clients,
            alquiler,
            interes,
            articles
        }

        if(combinacion){
            res.status(200).json(combinacion)
        }else{
            res.status(404).json({ Message: 'Not found' })
        }

        
    } catch (error) {
        res.status(500).json({ Message: 'Error del servidor' + error })
    }
    
} */

export const interesesPagadosLAUP = async (req, res) => {
    try {

        const { id } = req.params;

        const cliente = await Clientes.findById(id, 'nombres');

        if (!cliente) {
            res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        const alquileres = await Alquiler.find({ cliente: id }, 'valor meses articulo');

        let interesesPagados = [];

        for (const alquiler of alquileres) {
            const intereses = await Interes.find({ alquiler: alquiler._id, estado: 'pagado' }, 'mes valor');

            interesesPagados = interesesPagados.concat(intereses);
        }

        if (interesesPagados.length === 0) {
            res.json({ mensaje: 'Este cliente no ha pagado intereses' });
        }

        res.json({ cliente: cliente.nombres, alquiler: alquileres, intereses: interesesPagados });
    } catch (error) {

        res.status(500).json({ mensaje: 'Error del servidor' + error });
    }
};

export const interesesPendientesLAUP = async (req, res) => {
    try {
        const { id } = req.params;

        const interesesPendientes = await Interes.find({
            alquiler: id,
            estado: "no Pagado"
        });

        if (interesesPendientes.length > 0) {
            const totalesPorMes = {};

            interesesPendientes.forEach(interes => {
                const { mes, valor } = interes;
                if (!totalesPorMes[mes]) {
                    totalesPorMes[mes] = valor;
                } else {
                    totalesPorMes[mes] += valor;
                }
            });

            return res.json( {Message: totalesPorMes});
        } else {
            return res.json({ mensaje: 'No hay intereses pendientes para este alquiler' });
        }
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error del servidor' + error });
    }
}

export const interesesRecaudadosLAUP = async (req, res) => {
    try {
      const { mes } = req.body;
  
      const interes = await Interes.find({
        fecha: mes,
        estado: "pagado"
      });
  
      if (interes.length === 0) {
        res.json({ mensaje: 'No hay intereses pagados para este mes ' });
      } else {
  
        let recaudado = 0;
        interes.forEach(interes => {
          recaudado += interes.valor;
        });
  
        res.json({ mensaje: `Total ${mes}: ` + recaudado });
      }
    } catch (error) {
      return res.status(500).json({ mensaje: 'Error en el sistema' });
    }
  };