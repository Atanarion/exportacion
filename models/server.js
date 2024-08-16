const express = require('express')
require('dotenv').config()
const dbConnection = require('../database/config')
const {getProduct, postProduct, putProduct, deleteProduct} = require('../Controllers/productController')

class Server {
    constructor() {
        this.app = express() // is an atribute
        this.listen() //method listen()
        this.dbConnection() //method dbConnection
        this.pathproduct = '/api/product' //Ruta publica de la api
        this.route()

    }
    async dbConnection() {
        await dbConnection()
    }
   
    route(){
        this.app.use(express.json()) // Emplear json al req body
        this.app.get(this.pathproduct, getProduct) //Llama al controlador
        this.app.post(this.pathproduct, postProduct)
        this.app.put(this.pathproduct, putProduct)
        this.app.delete(this.pathproduct, deleteProduct)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`)
        })
    }
}

module.exports = Server //Exportar la clase server