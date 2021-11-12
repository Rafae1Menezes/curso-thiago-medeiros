const ProductsModel = require('../models/products')

async function get(req, res){
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    console.log(req.body)

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()
    res.send({
        message: "success"
    })
}

async function put(req, res){
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new:true})



    // const product = await ProductsModel.findById(id)
    // await product.updateOne(req.body)

    res.send({
        message: "success",
        product
    })
}

async function del(req, res){
    const { id } = req.params

    const product = await ProductsModel.findOneAndDelete({ _id: id})

    const message = product ? "sucesse" : "error"

    res.send({
        message
    })
}

module.exports = {
    get,
    post,
    put,
    del
}