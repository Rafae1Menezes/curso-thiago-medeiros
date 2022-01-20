import Link from 'next/link'

const Index = () => {
   return (
      <div>
         <h1>Hello World</h1>
         <Link href="/about" >
             <a>Página Sobre</a>
         </Link>
         <br />
         <Link href="/category/products" >
             <a>Página de produtos</a>
         </Link>
      </div>
   )
}

export default Index