import Product from "../models/Product"

export const createProduct = async (req, res) => {
   
    const { name, category, price, imgURL } = req.body

    const newProduct = new Product({ name, category, price, imgURL })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = (req, res) => {
    res.json('reading products')
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    
}