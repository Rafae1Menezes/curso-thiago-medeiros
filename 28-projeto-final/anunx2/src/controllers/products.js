import dbConnect from '../utils/dbConnect'
import ProductsModel from '../models/products'
import formidable from 'formidable-serverless'
import path from 'path'
import fs from 'fs'

const renameFiles = (files, form) => {
   const filesRenamed = []

   files.forEach(file => {
      const timestamp = Date.now()
      const random = Math.floor(Math.random() * 99999999) + 1
      const extension = path.extname(file.name)

      const filename = `${timestamp}_${random}${extension}`

      const oldpath = path.join(__dirname, `../../../../../${file.path}`)
      const newpath = path.join(__dirname, `../../../../../${form.uploadDir}/${filename}`)

      fs.rename(oldpath, newpath),
         error => {
            if (error) {
               return res.status(500).json({ success: false })
            }
         }

         filesRenamed.push({
         name: filename,
         path: newpath,
      })
   })

   return filesRenamed
}

const updateFiles = async(idProduct, files, form) => {
   const product = await ProductsModel.findById(idProduct)

   const filesToDelete = product.files.filter((fileBd)=>{
      let deletar = true
      files.map((file)=>{
         if(file.name === fileBd.name) deletar = false
      })
      return deletar
   })

   const names = []

   filesToDelete.forEach((file)=>{
      const loc = path.join(__dirname, `../../../../../${form.uploadDir}/${file.name}`)
      fs.unlink(loc,(error)=> error && console.log(error)) 
      names.push(file.name)
   })

   await ProductsModel.updateOne(
      { _id: idProduct},
      { $pull: { 'files': { 'name': names } } }
    )

}

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

      const { files } = data
      const filesToRename = files instanceof Array ? files : [files]
      const filesReady = renameFiles(filesToRename, form)


      const { name, price, category, description, userId } = fields      

      const product = new ProductsModel({
         name,
         price,
         category,
         description,
         files: filesReady,
         userId,
      })

      const register = await product.save()

      if (register) return res.status(201).json({ success: true })

      return res.status(500).json({ success: false })
   })
}

const put = async (req, res) => {
   await dbConnect()

   const form = new formidable.IncomingForm({
      multiples: true,
      uploadDir: 'public/uploads',
      keepExtensions: true,
   })

   form.parse(req, async (error, fields, data) => {
      if (error) return res.status(500).json({ success: false })

      const { _id, name, price, category, description, filesOld, userId } = fields

      if (filesOld) await updateFiles(_id, JSON.parse(filesOld), form)

      
      const { filesNew } = data  
      if(filesNew ){    
         const filesToRename = filesNew instanceof Array ? filesNew : [filesNew]
         const filesReady = renameFiles(filesToRename, form)
         await ProductsModel.updateOne({ _id: _id}, { $push: { 'files': filesReady } }) 
      }
      
      await ProductsModel.updateOne(
         { _id: _id},
         { $set: { 
            name,
            price,
            category,
            description,
            } }
       )

   })

   res.status(201).json({ success: true })
}

const remove = async (req, res) => {
   await dbConnect()
   const id = req.body.id
   const deleted = await ProductsModel.findOneAndDelete({ _id: id })

   deleted.files.forEach(file=>{
      const arquivo = path.join(__dirname, `../../../../../public/uploads/${file.name}`)   
      fs.unlinkSync(arquivo)    
   }) 

   if (deleted) {
      return res.status(200).json({ success: true })
   }

   return res.status(500).json({ success: false })
}

export { post, put, remove }
