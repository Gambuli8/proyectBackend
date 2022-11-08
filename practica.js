
const peliculas = () => ({peli1:'cars', peli2:'toy story'})

//console.log(peliculas());

function personas(nombresPersonas, cb) {
    //console.log(`las personas son ${nombresPersonas} `);
    //cb(apellido);
} 

function apellido(name){
    //console.log(`los apellidos son ${name} `);
}

//personas('pedro, juan, lucas', apellido('gonzales, martinez') );


const resta = (a,b) => a - b;
const suma = (a,b) => a + b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;

function operacion (a,b, op){
    return op(a,b)
    //return cb(null, {a,b}) este es con callback
}

//console.log(operacion(10,2,multiplicacion));



function mostrarLetras (palabra, timer){
    let fun1 = setInterval(letras, timer);
    let counter = 0;
    function letras(){
        if(counter != palabra.length){
            //console.log(palabra.slice(counter, counter + 1));
            counter++;
        }else{
            fin();
            clearInterval(fun1);
        }
    }
}

let fin = () => console.log('finaliza la ejecucion!.');

//mostrarLetras('Geronimo', 1000);



for (let i = 0; index < 10000; i++) {
    let num_random = Math.round((Math.random() * (20 - 1)));
    response[num_random] = response[num_random] ? response[num_random] + 1 : 1;
}
//console.log(reponse);


const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]


