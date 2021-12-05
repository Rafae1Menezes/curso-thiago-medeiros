import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
   name: String,
   path: String,
})

const schema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'o campo "título do anúncio" é obrigatório'],
      },
      price: {
         type: Number,
         required: [true, 'o campo "preço" é obrigatório'],
      },
      category: {
         type: String,
         required: [true, 'o campo "categoria" é obrigatório'],
      },
      description: {
         type: String,
         required: [true, 'o campo "descrição" é obrigatório'],
      },      
      files: {
         type: [filesSchema],
         default: undefined,
      },
      userId: {
         type: String,
         required: [true, 'o campo "descrição" é obrigatório'],
      },
   },
   { versionKey: false }
)

export default mongoose.models.products || mongoose.model('products', schema)
