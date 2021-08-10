import express from 'express'
import morgan from 'morgan'

import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('hello world')
})

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

export default app;