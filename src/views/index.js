const express = require('express')
var path = require('path')
const handlebars = require('express-handlebars')
const io = require('socket.io-client')

const views = function(app, router, productosService) {
    let socket;
    // app.set('view engine', 'ejs');
    // app.set('views', path.join(__dirname, 'ejs'));

    // app.set('view engine', 'pug');
    // app.set('views', path.join(__dirname, 'pug'));

    const hbs = require('express-handlebars').create({
        layoutsDir: path.join(__dirname, "hbs"),
        partialsDir: path.join(__dirname, "hbs"),
        defaultLayout: 'inicio',
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine)
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'hbs'))

    router.get('/', (req, res) => {
        res.render('inicio', { productos: productosService.getAll() });
        if(!socket) socket = io.connect();
    })

    router.post('/productos', (req, res) => {
        const prod = req.body;
        productosService.save(prod);
        res.redirect('/');

        //emit new-producto
        socket && socket.emit('new-product')
    })

    // On products
    socket && socket.on('productos', () => {
        res.redirect('/');
    })
}

module.exports = views