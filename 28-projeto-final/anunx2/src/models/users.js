import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'o campo "nome" é obrigatório'],
   },
   city: {
      type: String,
      required: [true, 'o campo "cidade" é obrigatório'],
   },
   phone: {
      type: String,
      required: [true, 'o campo "telefone" é obrigatório'],
   },
   email: {
      type: String,
      required: [true, 'o campo "e-mail" é obrigatório'],
   },
   password: {
      type: String,
      required: [true, 'o campo "senha" é obrigatório'],
   },
},{ versionKey: false})

export default mongoose.models.users || mongoose.model('users', schema)