import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'
import UsersModel from '../models/users'

const get = async (req, res) => {
   await dbConnect()
   const users = await UsersModel.find()
   res.status(200).json(users)
}

const post = async (req, res) => {
   const { name, city, phone, email, password } = req.body

   await dbConnect()

   const passwordCrypto = await crypto(password)

   const user = new UsersModel({
      name,
      city,
      phone,
      email,
      password: passwordCrypto,
   })

   user.save()

   res.status(201).json({ success: true })
}

export {
   get,
   post,
}