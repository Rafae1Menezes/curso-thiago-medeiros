import path from 'path'
import fs from 'fs'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbCOnnect'
import formidable from 'formidable-serverless'

const post = async (req, res) => {
   await dbConnect()

   const form = new formidable.IncomingForm({
      multiples: true,
      uploadDir: 'public/uploads',
      keepExtensions: true,
   })

   form.parse(req, async (error, fields, data) => {
      if(error){
         return res.status(500).json({ success: false })
      }

      const { files } = data

      const filesToRename = files instanceof Array
         ? files
         : [files]
      
         const filesToSave = []

      filesToRename.forEach(file => {
         const timestamp = Date.now()
         const random = Math.floor(Math.random() * 99999999) + 1
         const extension = path.extname(file.name)

         const filename = `${timestamp}_${random}${extension}`

         const oldpath = path.join(__dirname, `../../../../${file.path}`)
         const newpath = path.join(__dirname, `../../../../${form.uploadDir}/${filename}`)

         fs.rename(oldpath, newpath), (error) => {
            if(error){
               console.log(error)
               return res.status(500).json({ success: false })
            }
         }

         filesToSave.push({
            name: filename,
            path: newpath
         })
      })

      const {
         title,
         category,
         description,
         price,
         name,
         email,
         phone,
         userId,
         image,
      } = fields

      const products = new ProductsModel({
         title,
         category,
         description,
         price,
         user: {
            id: userId,
            name,
            email,
            phone,
            image,
         },         
         files: filesToSave,
      })

      
      const register = await products.save()

      if(register){
         return res.status(201).json({ success: true })
      } else {
         return res.status(500).json({ success: false })
      }

      res.status(200).json({ success: true })
   })

}

const remove = async (req, res) => {
   await dbConnect()
   const id = req.body.id
   const deleted = await ProductsModel.findOneAndDelete({ _id: id})

   if(deleted){
      return res.status(200).json({ success: true })
   }

   return res.status(500).json({ success: false })
}

export {
   post,
   remove,
}