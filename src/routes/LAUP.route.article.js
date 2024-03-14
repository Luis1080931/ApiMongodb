import { Router } from "express";
import { postArticleLAUP, putArticlesLAUP } from "../controllers/LAUP.article.controller.js";
import { validarToken } from "../controllers/LAUP.auth.js";
import { articlesValidate } from "../schemas/LAUP.articulos.schema.js";

const rutaArticle = Router()

rutaArticle.post('/registrar',validarToken, articlesValidate, postArticleLAUP)
rutaArticle.put('/desactivar/:id',validarToken, putArticlesLAUP)

export default rutaArticle      