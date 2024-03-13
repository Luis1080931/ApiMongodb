import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import rutaClient from './routes/LAUP.clientes.routes.js'
import rutaValidacion from './routes/LAUP.route.auth.js'
import rutaArticle from './routes/LAUP.route.article.js'
import rutaAlquiler from './routes/LAUP.alquiler.route.js'
import rutaInteres from './routes/LAUP.interes.route.js'
import rutaUser from './routes/LAUP.user.route.js'
import { dbconnect } from './config.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/clients', rutaClient)
app.use('/articles', rutaArticle)
app.use('/alquiler', rutaAlquiler)
app.use('/interes', rutaInteres)
app.use('/usuarios', rutaUser)
app.use(rutaValidacion)

dbconnect();

export default app