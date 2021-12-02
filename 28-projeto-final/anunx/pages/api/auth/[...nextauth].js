import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

export default NextAuth({
   providers: [

      
      Providers.Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
       }),


      Providers.Credentials({
         name: 'Credentials',
         async authorize(credentials) {
            try{
               const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials) 
               const user = res.data
               return user
            } catch {
               throw '/auth/signin?i=1'
            }
         },
      }),
      
   ],

   session: {
      jwt: true,
   },

   jwt: {
      secret: process.env.JWT_TOKEN
   },

   callbacks: {
      async jwt (token, user) {

         if(user){
            user.id && (token.uid = user.id)
            user._id && (token.uid = user._id)
         }

         return Promise.resolve(token)
      },

      async session(session, user) {
         session.userId = user.uid
         
         return session
      }
   },


   database: process.env.MONGODB_URI,
})