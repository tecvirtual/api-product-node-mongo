import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/products.routes'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('hello world')
})

app.use(productRoutes)

export default app;