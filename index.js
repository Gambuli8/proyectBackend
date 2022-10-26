
const Mascotas = ['perro', 'gato'];

class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    fullName(){
        return `el nombre completo es ${this.nombre, this.apellido} `  
    }

    Mascota(){
        return ``
    }

}

console.log('el nombre completo es ', Usuario.nombre, Usuario.apellido);