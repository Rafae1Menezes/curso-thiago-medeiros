const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP
// GET
// POST
// PUT
// DELETE


router.get('/products/:id?', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products', ProductController.put)
// router.delete('/products', ProductController.delete)


module.exports = router
