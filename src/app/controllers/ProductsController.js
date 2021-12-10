const Product = require('../models/Product')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class ProductsController {

    //[GET] /products
    index(rep, res, next) {

        Product.find({})
            .then(products => {
                res.render('products', {
                    products: multipleMongooseToObject(products)
                });
            })
            .catch(next)
    }

    //[GET] /products/:id
    getProductById(rep, res, next) {
        Product.findById(rep.params.id)
            .then(product => {
                res.render('productDetail', {
                    product: mongooseToObject(product)
                });
                console.log(product)
            })
            .catch(next)

    }

    //[GET] /products/search
    search(rep, res) {
        res.render('search');
    }

    //[GET] /products/:slug
    show(rep, res) {
        res.send('products DETAILS!!!')
    }
}

module.exports = new ProductsController;