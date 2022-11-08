const HTTP = require("http");
let moment = requiere("moment");
const PORT = 3001;
const SERVER = HTTP.createServer((request, response) => {
    let hora = moment().add(15, 'h').hour();
    let mensaje = "";
    if(hora >= 6 && hora <= 12) mensaje = "Buenos Dias!";
    if(hora >= 13 && hora <= 19) mensaje = "Buenas Tardes!";
    if(hora >= 20 && hora <= 5) mensaje = "Buenas Noches!";
    response.end(`son las ${hora}`);
});

let connectedServer = SERVER.listen(PORT, () => {console.log(`server on http://localhost:${PORT}`);});

connectedServer.on("error", error => console.log(error));

class Usuario {
    constructor (nombre, apellido, libros=[] , mascotas=[] ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    fullName(){
        console.log(`el nombre completo es ${this.nombre} ${this.apellido} `)  
    }

    Mascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
        console.log(`${this.nombre} tiene de mascota un ${this.mascotas} `);
    }

    contadorMascotas(){
        this.contador++;
        console.log(`el Usuario ${this.nombre} tiene ${this.contador} mascotas`);
    }

    addBook(nombrelibro, nombreautor){
        this.libros.push({libro: nombrelibro, autor: nombreautor})
        console.log(`${this.libros}`);
    }

    getBookName(){
        for(let value of this.libros){
            console.log(value);
        }
    }
}
    let lucas = new Usuario('lucas', 'martinez', [], []);
    let maximo = new Usuario('maximo', 'gonzales', [], []);

    console.log(maximo.fullName());
    console.log(maximo.Mascota('perro, gato'));
    console.log(maximo.contadorMascotas());
    console.log(maximo.addBook('el tiempo de las moscas', 'claudia piñeiro'));
    console.log(maximo.getBookName());
    console.log(lucas.fullName());
    console.log(lucas.Mascota('perro, gato, pinguino'));
    console.log(lucas.contadorMascotas());
    console.log(maximo.addBook('el tiempo de las moscas', 'claudia piñeiro'));
    console.log(maximo.getBookName());
