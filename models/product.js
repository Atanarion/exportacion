const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    product: {
        type: String,
        unique: true,
        required: [true, 'The field plate is required'],
        Maxlength: [6, 'max 6 characters'],
        Minlength: [5, 'min 5 characters'],

    },
    price: {
        type: Number,
        required: [true, 'The color field is required'],
        Minlength: [3, 'min 3 characters'],
    },
    weight: {
        type: Number,
        required: [true, 'The model field is required'],

    },
})

module.exports = model('Product', ProductSchema, 'product') //product: Clase,Nombre Schema, product: nombre collection
