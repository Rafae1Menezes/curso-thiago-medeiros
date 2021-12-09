const startApp = (contentMedia, contentPageVideo) => {
   const bgFull = document.createElement('div')
   bgFull.classList.add('bg-full')

   const btn = document.createElement('div')
   btn.classList.add('btn-fullscreen')
   btn.innerText = 'FULL'
   contentMedia.appendChild(btn)

   let isFullscreen = false

   btn.onclick = ( ) => {
      
      if(!isFullscreen){
         document.body.appendChild(bgFull)
         bgFull.appendChild(contentMedia)
         contentMedia.classList.add('full')
      }
      else{
         contentPageVideo.appendChild(contentMedia)
         bgFull.remove()
      }

      isFullscreen = !isFullscreen      
   }

   
}

const interval = setInterval(() => {
   const contentMedia = document.querySelector('.content-media')
   
   if (contentMedia) {
      const contentPageVideo = contentMedia.parentNode
      clearInterval(interval)
      startApp(contentMedia, contentPageVideo)
   }
}, 50)
