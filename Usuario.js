class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(petName) {
    this.mascotas.push(petName);
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}
var usr = new Usuario("andres", "torres", [], []);
console.log(usr.getFullName());
usr.addBook("Harry Potter", "J.K Rowling");
console.log(usr.getBookNames());
usr.addMascota("Sophie");
console.log(usr);
