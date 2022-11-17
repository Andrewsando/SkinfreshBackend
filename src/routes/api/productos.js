const ProductosService = require("../../services/ProductosService")

const productosRouter = function(router){

    const productosService = new ProductosService()

    router.get('/', (request, response ) =>{
        response.send(productosService.getAll())
    } )

    router.post('/', (request, response) => {
        const prod = request.body;
        console.log(prod)
        response.send(productosService.save(prod))
    })

    router.get('/:id', (request, response) => {
        const prod = productosService.getById(parseInt(request.params.id))
        response.status(prod?200:500).send(prod? prod : {error: "producto no encontrado"})
    })

    router.delete('/:id', (request, response) => {
        const result = productosService.deleteById(parseInt(request.params.id))
        response.status(result?200:500).send(result ? {mensaje: "producto encontrado"} : {error: "producto no encontrado"})
    })

    router.put('/:id', (request, response) => {
        const prod = request.body;
        const result = productosService.updateById(parseInt(request.params.id), prod)
        response.status(result?200:500).send(result ? result : {error: "producto no encontrado"} )
    })
    return router
}

module.exports = productosRouter