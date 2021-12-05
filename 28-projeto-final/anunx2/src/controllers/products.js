import dbConnect from "../utils/dbConnect"
import ProductsModel from '../models/products'

const post = async (req, res) => {
   await dbConnect()

   const { 
      name,
      price,
      category,
      description,
      files,
      userId,} = req.body

    const products = new ProductsModel({
      name,
      price,
      category,
      description,
      files,
      userId,
   })

   const register = await products.save()

   if (register) 
      return res.status(201).json({ success: true })   
   
   return res.status(500).json({ success: false })    
}


export {post}