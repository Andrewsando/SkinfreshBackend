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

// app.use(express.static('public'))
app.use(router(app))

// Sockets init
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!!');

    //on new-product emit products
    socket.on('new-product')
        io.sockets.emit('productos')
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
