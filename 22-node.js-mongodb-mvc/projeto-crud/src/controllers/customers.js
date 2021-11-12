const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index (req, res) {

    var { c } = req.query;
    let message = ""

    if(c==1) message = "Cadastro realizado com sucesso!"

    res.render('register', {
        title: defaultTitle,
        message
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save()

    res.redirect('/register?c=1')
}

async function list(req, res){
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de usuário',
        users
    })
}

async function formEdit (req, res) {
    const { e } = req.query;
    const { id } = req.query;
    let message = ''

    if(e==1) message = "Usuárop editado com sucesso!"


    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message
    })
    
}

async function edit (req, res) {
    const {
        name,
        age,
        email
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)  
    user.name = name
    user.age = age
    user.email = email

    user.save()
    
    res.redirect('/edit?e=1&id='+id)
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit   
}