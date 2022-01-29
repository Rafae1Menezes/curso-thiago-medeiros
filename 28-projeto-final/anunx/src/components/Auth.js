import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Auth({ children }) {
   const { data: session, status } = useSession()
   const isUser = !!session?.user
   const route = useRouter()

   useEffect(() => {
      if (status === 'loading') return // Do nothing while loading
      if (!isUser) route.push('/auth/signin') // If not authenticated, force log in
   }, [isUser, status])

   if (isUser) {
      return children
   }

   // Session is being fetched, or no user.
   // If no user, useEffect() will redirect.
   return <div>Loading...</div>
}

export default Auth