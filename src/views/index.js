const express = require('express')
var path = require('path')
const handlebars = require('express-handlebars')

const views = function(app, router, productosService) {

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
    })

    router.post('/productos', (req, res) => {
        const prod = req.body;
        productosService.save(prod);
        res.redirect('/');
    })
}

module.exports = views