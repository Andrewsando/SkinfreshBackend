const Container =require("./Contenedor.js")
const productos = new Container('./productos.json')
const express = require('express')
const moment = require('moment')

const app = express();

const PORT = 8080

//Instanciamos la clase
const archivo = new Container('productos.json')

const visitas = {
    productos: 0,
    fecha_ingreso_productos: '',
    prod_random: 0,
    fecha_ingreso_productos_random: ''

}

app.get('/productos', async (req, res)=>{
    visitas.productos++
    visitas.fecha_ingreso_productos = moment().format('MMMM Do YYYY, h:mm:ss a');
    const prods = await archivo.getAll()
    res.send({productos: prods})
} )

app.get('/random', async (req, res)=>{
    visitas.prod_random++
    visitas.fecha_ingreso_productos_random = moment().format('MMMM Do YYYY, h:mm:ss a');
    const prods = await archivo.getAll()
    const random = parseInt(Math.random()*prods.length)
    res.send({Productos:prods[random]})
})

app.get('/visitas', (req, res)=>{
    res.send({ visitas })

})
async function ejecutar(){
    const objeto3 ={
        nombre : 'Aceite facial piel seca',
        precio: 200
    }
    const objeto2 ={
        nombre: 'Aceite facial piel grasa',
        precio: 300
    }
    const objeto1 ={
        nombre: 'Aceite facial piel mixta',
        precio:  400
    }

    await productos.deleteById(1)
}

const server = app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);

})
