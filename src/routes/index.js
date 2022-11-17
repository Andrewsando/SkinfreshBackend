const Container = require("../../Contenedor.js")
const moment = require('moment');
const productos = require("./api/productos.js");
const { Router } = require("express");
var path = require('path');

const router = function() {
    
    const router = Router();

    //Instanciamos la clase
    const archivo = new Container('productos.json')
    
    const visitas = {
        productos: 0,
        fecha_ingreso_productos: '',
        prod_random: 0,
        fecha_ingreso_productos_random: ''
    }
    
    router.get('/productos', async (req, res) => {
        visitas.productos++
        visitas.fecha_ingreso_productos = moment().format('MMMM Do YYYY, h:mm:ss a');
        const prods = await archivo.getAll()
        res.send({ productos: prods })
    })
    
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
    
    // router.get('/', (request, response) => {
    //     response.sendFile(path.resolve(__dirname + "../../../public/form.html"))
    // })

    router.use('/api/productos', productos(router))

    return router
}

module.exports = router