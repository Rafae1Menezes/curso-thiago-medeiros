const puppeteer = require('puppeteer')

async function init(){
   const browser = await puppeteer.launch({headless: true})
   const page = await browser.newPage()

   await page.goto('https://mg.olx.com.br/eletronicos-e-celulares')
   //await page.screenshot({ path: 'images/print-da-olx.png' })


   const data = await page.evaluate(()=>{
      const products = []

       document.querySelectorAll('.fnmrjs-1').forEach(item =>{

         const title = item.querySelector('h2').innerText
         const price = item.querySelector('p').innerText
         const image = item.querySelector('img')?.dataset.src
         
         products.push({title, price, image})

      }) 
      return {products}
     
})

   console.log(data.products)

   await browser.close();
}

init()