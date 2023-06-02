// a. Crea una variable numérica y muestra su valor por consola.


const variable= 8;
console.log(`la variable es: ${variable}`);

// b. Crea una variable de texto y muestra su longitud por consola

const ejercicio_b= "Este es el ejercicio b";
console.log(ejercicio_b);


// c. Crea una variable booleana y muestra su valor por consola.

const ejercicio_c= false;
console.log(ejercicio_c);

// d. Crea una variable array y muestra su contenido por consola.

const ejercicio_d= [1,2,3,4, true];
console.log(ejercicio_d);

// e. Crea una variable objeto y muestra una de sus propiedades por consola.

let info_personal= {
    nombre: "santiago carranza",
    edad: 20,
    dni : 44653511,
    telefono: 35132584,
};

console.log(info_personal.dni)

// Funciones:
// a. Crea una función que tome un número como parámetro y devuelva su cuadrado.

const cuadrado= (a) =>{
    return a**2
};
function cuadrado_2(a) {
    return a**2
  };
console.log(cuadrado(2));
console.log(cuadrado_2(4));

// b. Crea una función que tome un array como parámetro y devuelva el número de
// elementos que contiene.

const lista= (b) => {
    return b.length;
};

console.log(lista([1,2,4,8,7]))


// c. Crea una función que tome un objeto como parámetro y devuelva la cantidad de
// propiedades que tiene.

function objeto (info_personal){
    return Object.keys(info_personal).length;

};

console.log(objeto(info_personal));

// d. Crea una función que tome dos números como parámetros y devuelva el mayor de
// ellos

let mayor= (a,b)=>{
    if (a>b){
        return a
    }
    else {
        return b
    }
};

console.log(mayor(4,8))


// Estructuras de control:
// a. Crea una función que reciba dos números como parámetros y devuelva el
// resultado de su suma.

let suma = (x,y)=>{
    return x+y;
};

console.log(`la suma de estos dos numeros es : ${suma(4, 6)}`);


