import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '/lib/mongodb'

export default NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),

      CredentialsProvider({
         name: 'Credentials',
         async authorize(credentials) {
            const res = await axios.post(
               `${process.env.APP_URL}/api/auth/signin`,
               credentials
            )
            const user = res.data

            if (user) return user

            return null
         },
      }),
   ],

   callbacks: {
      async jwt( token ) {
         // Persist the OAuth access_token to the token right after signin

         if(token.user?._id) token.token._id = token.user._id
         if(token.token?.sub) token.token._id = token.token.sub
         

         return token.token
      },

      async session(session) {


         session.session.user._id = session.token._id
         return session.session
      },
   },

   adapter: MongoDBAdapter(clientPromise),

   session: { strategy: 'jwt' },

   jwt: { secret: process.env.JWT_TOKEN },

   pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/signin',
   },

   secret: process.env.SECRET,

   database: process.env.MONGODB_URI,
})
