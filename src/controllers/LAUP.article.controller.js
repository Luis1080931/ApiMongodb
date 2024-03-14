import Article from "../models/LAUP.articulos.models.js";

export const postArticleLAUP = async (req, res) => {
    try {
        const article = Article.create(req.body)

        if(article){
            res.status(200).json({Message: 'Articulo creado'})
            console.log(article)
        }else{
            res.status(403).json({Message: 'Error al crear el articulo'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}

export const getArticlesLAUP = async (req, res) => {
    try {
        const article = Article.findByIdAndUpdate(req.params.id, estado="inactivo")

        if(article){
            res.status(200).json({ Message: 'Articulo desactivado' })
        }else{
            res.status(404).json({Message: 'Not found'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}