const Product = require('../models/Product')

//Get all documents from Product
const getProduct = async(req, res) => {
    const Products = await Product.find()
    res.json(Products)
}

//Post Create a document in the collection Product
const postProduct = async(req, res) => {
    const body = req.body //get the body send from postman or a form
    let msg = 'Product inserted succesful'
    try {
        const Product = new Product(body)//Create the object Product in RAM
        await Product.save()//Insert object at the collection
         
    } catch (error) {
       msg = error
    }
    res.json({msg:msg})
}


const putProduct = async(req, res) => {
    const {id} = req.params
    const body = req.body
    let msg = 'Product updated succesful'
    try {
        const Product = await Product.findByIdAndUpdate(id, body)
        await Product.save()
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const deleteProduct = async(req, res) => {
    const {id} = req.params
    let msg = 'Product deleted succesful'
    try {
        const Product = await Product.findByIdAndDelete(id)
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}



module.exports = { //Exporta la funcion
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}