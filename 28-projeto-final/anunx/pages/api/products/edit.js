import { put } from '../../../src/controllers/products'
import nextConnect from 'next-connect'

const route = nextConnect()

route.put(put)

export default route

export const config = {
   api: {
      bodyParser: false
   }
}