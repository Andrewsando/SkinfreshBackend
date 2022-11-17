class ProductosService {
    productos = []
    constructor() {
    }

    save(objeto) {
        let id;
        this.productos.length === 0
            ? (id = 1)
            : (id = this.productos[this.productos.length - 1].id + 1);
        const newProduct = { ...objeto, id };
        this.productos.push(newProduct);
        return newProduct;
    }

    getById(id) {
        const obj = this.productos.find(obj => obj.id === id)
        if (!obj) {
            return null
        }
        return obj

    }

    getAll() {
        return this.productos
    }

    deleteById(id) {
        const index = this.productos.findIndex(x => x.id === id)
        if (index >= 0) {
            this.productos.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    updateById(id, product) {
        const index = this.productos.findIndex(x => x.id === id)
        if (index >= 0) {
            this.productos.splice(index, 1, { ...product, id })
            return this.productos[index]
        } else {
            return null
        }
    }

}

module.exports = ProductosService

