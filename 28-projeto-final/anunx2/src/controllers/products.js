import dbConnect from '../utils/dbConnect'
import ProductsModel from '../models/products'
import formidable from 'formidable-serverless'

const post = async (req, res) => {
   await dbConnect()

   const form = new formidable.IncomingForm({
      multiples: true,
      uploadDir: 'public/uploads',
      keepExtensions: true,
   })

   form.parse(req, async (error, fields, data) => {
      if (error) {
         return res.status(500).json({ success: false })
      }

      const { name, price, category, description, userId } = fields

      const files = data.files.map(file => ({
         name: file.name,
         path: file.path,
      }))

      const product = new ProductsModel({
         name,
         price,
         category,
         description,
         files,
         userId,
      })

      const register = await product.save()

      console.log(register)

      if (register) return res.status(201).json({ success: true })

      return res.status(500).json({ success: false })
   })
}

export { post }
