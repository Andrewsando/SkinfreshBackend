//establecemos la comunicación del lado del cliente
const socket = io.connect()

const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit', (e) => {
        const formData = new FormData(e.target);
        const message = Object.fromEntries(formData);
        message.fecha = new Date()

        socket.emit('new-message', message)
    })

function render(data) {
    const html = data.map(item => {
        return (`<div> <strong>${item.correo}</strong><em>${item.fecha}</em>: <em>${item.text}</em> </div>`)
    }).join(' ')

    document.getElementById('message').innerHTML = html
}

//Evento para enviar y recibir el mensaje
socket.on('message', data => (
    render(data)
))