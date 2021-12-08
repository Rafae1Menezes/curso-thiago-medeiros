import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"
import axios from 'axios'


export default NextAuth({
   providers: [

      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
       }),

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

   

   pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/signin',
   },

   callbacks: {

      async jwt(token) { 
         
         if(token.user) token.token._id = token.user._id         
         return token.token
       },


      async session(session) {

         session.session.user._id = session.token._id
         return session.session
      }
   },

   secret: process.env.SECRET,

   database: process.env.MONGODB_URI,
})
