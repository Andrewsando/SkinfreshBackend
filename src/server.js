const express = require('express');
const router = require('./routes');
const app = express();
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const { Server: IO } = require('socket.io')
const { Server: HttpServer } = require('http')
const httpServer = new HttpServer(app)
const io = new IO(httpServer)

app.use(express.static('public'))
// Sockets init
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!!');

    //on new-product emit products
    socket.on('new-product', (producto) =>
        io.sockets.emit('producto', producto))
        
        
    socket.emit('message', messages)
})

app.use(router(app))

httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})

const messages = [
    {correo: 'andres.torressandoval@hotmail.com', fecha: new Date(), text:'Hola, bienvenidos a mi proyecto'},
    {correo: 'angelilala@hotmail.com', fecha: new Date(), text:'Muchas gracias!!'},
    {correo: 'andres.torressandoval@hotmail.com', fecha: new Date(), text:'Con gusto'},
]


