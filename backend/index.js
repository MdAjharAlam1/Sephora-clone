import {config} from 'dotenv'
config()
import express from 'express'
import connectDB from './cofig/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


import userRoutes from './routes/user.route.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'

app.use('/api/v1/users',userRoutes)
app.use('/api/v1/products',productRoutes)
app.use('/api/v1/cart',cartRoutes)


const PORT = process.env.PORT || 8080


connectDB().then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} `)
})

