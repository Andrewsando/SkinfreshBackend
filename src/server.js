const express = require('express');
const router = require('./routes');

const app = express();
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(router())

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
