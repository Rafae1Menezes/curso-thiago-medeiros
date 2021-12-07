import nextConnect from 'next-connect'
import { post, get } from '../../../src/controllers/signin'

const route = nextConnect()

route.post(post)
route.get(get)

export default route
