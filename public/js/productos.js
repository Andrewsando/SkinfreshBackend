(() => {
    const socket = io.connect()

    const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const producto = Object.fromEntries(formData);

        socket.emit('new-product', producto)
    })

    socket.on('producto', ({ producto, precio, imagen }) => {
        let table = document.getElementById("table")

        if (!table) {
            const jumbotron = document.getElementsByClassName("jumbotron").item(0)

            table = document.createElement("table")
            table.setAttribute("id", "table")
            table.setAttribute("class", "table table-dark")

            table.innerHTML = `<tr style="color:yellow;">
            <th>producto</th>
            <th>precio</th>
            <th>imagen</th>
        </tr>`
            jumbotron.removeChild(jumbotron.lastElementChild, table)
            jumbotron.appendChild(table)
        }

        const newProducto = document.createElement("tr").innerHTML = `<td>${producto}</td>
        <td>${precio}</td>
        <td><img src="${imagen}"></td>`
        table.innerHTML = table.innerHTML.concat(newProducto)
    })
})()