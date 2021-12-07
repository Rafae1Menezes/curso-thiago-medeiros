import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
   providers: [
      CredentialsProvider({
         name: 'Credentials',
         async authorize(credentials) {
            const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`,credentials)
            const user = res.data
            
            if(user) return user

            return null
         },
      }),
   ],

   session: {
      jwt: true,
   },

   jwt: {
      secret: process.env.JWT_TOKEN,
   },

   pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/signin', // Error code passed in query string as ?error=
   },

   

   secret: 'teste',

   database: process.env.MONGODB_URI,

   debug: false,
})
