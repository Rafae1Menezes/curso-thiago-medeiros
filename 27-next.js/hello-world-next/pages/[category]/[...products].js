import { useRouter } from "next/router"

const Products = () => {
   const router = useRouter()

   console.log(router)

   return (
      <div>
         <h1>Categoia: {router.query.category}</h1>
         <h1>Produto: {router.query.products}</h1>
      </div>
   )
}

export default Products