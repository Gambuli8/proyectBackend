
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
            console.log(palabra.slice(counter, counter + 1));
            counter++;
        }else{
            fin();
            clearInterval(fun1);
        }
    }
}

let fin = () => console.log('finaliza la ejecucion!.');

mostrarLetras('Geronimo', 1000);