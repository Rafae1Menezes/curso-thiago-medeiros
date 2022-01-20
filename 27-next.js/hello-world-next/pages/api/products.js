function teste(req, res) {
   if (req.method !== 'POST') res.status(404)


   res.send('poupe')
}

export default teste