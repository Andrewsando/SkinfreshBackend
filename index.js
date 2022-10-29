const Container =require("./Contenedor.js")
const productos = new Container('./productos.json')

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
ejecutar()