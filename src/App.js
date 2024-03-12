import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import rutaClient from './routes/LAUP.clientes.routes.js'
import rutaValidacion from './routes/LAUP.route.auth.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/clients', rutaClient)
app.use(rutaValidacion)

export default app