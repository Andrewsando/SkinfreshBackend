const Container = require("../../Contenedor.js")
const moment = require('moment');
const productos = require("./api/productos.js");
const ProductosService = require("../services/ProductosService")
const { Router } = require("express");
var path = require('path');
const views = require("../views/index.js");

const router = function(app) {
    
    const router = Router();

    const productosService = new ProductosService()

    //Instanciamos la clase
    const archivo = new Container('productos.json')
    
    const visitas = {
        productos: 0,
        fecha_ingreso_productos: '',
        prod_random: 0,
        fecha_ingreso_productos_random: ''
    }
    
    router.get('/random', async (req, res) => {
        visitas.prod_random++
        visitas.fecha_ingreso_productos_random = moment().format('MMMM Do YYYY, h:mm:ss a');
        const prods = await archivo.getAll()
        const random = parseInt(Math.random() * prods.length)
        res.send({ Productos: prods[random] })
    })
    
    router.get('/visitas', (req, res) => {
        res.send({ visitas })
    })

    //views
    views(app, router, productosService)

    router.use('/api/productos', productos(router, productosService))

    return router
}

module.exports = router