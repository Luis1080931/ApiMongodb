import { Router } from "express";
import { postArticleLAUP, getArticlesLAUP } from "../controllers/LAUP.article.controller.js";

const rutaArticle = Router()

rutaArticle.post('/registrar', postArticleLAUP)
rutaArticle.get('/listar', getArticlesLAUP)

export default rutaArticle