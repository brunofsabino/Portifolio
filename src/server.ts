import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import router from './routes/index'
import routerApi from './routes/api'

dotenv.config()
const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'))

app.use(router)
app.use('/api', routerApi)

app.listen(process.env.PORT, () =>{
    console.log("RODANDO SERVIDOR NA PORTA: " + process.env.PORT)
})