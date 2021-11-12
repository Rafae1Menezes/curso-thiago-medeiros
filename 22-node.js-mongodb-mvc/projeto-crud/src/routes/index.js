const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//index
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index )
router.post('/register/add', CustomersController.add ) // ele envia para a função add o req e o res

//lister
router.get('/list', CustomersController.list)

//editar
router.get('/edit',  CustomersController.formEdit )
router.post('/edit/:id',  CustomersController.edit )

module.exports = router
