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


// Operadores y expresiones:


// a. Realiza una operación aritmética y muestra el resultado por consola.

const resta = 10-7;
console.log(`el resultado de esta resta es: ${resta}`);

// b. Combina dos cadenas de texto y muestra el resultado por consola.

const string_a= "Estas son"
const string_b= " dos cadenas juntas."

console.log(string_a+string_b)

// c. Compara dos valores y muestra el resultado por consola.

const num1= 8
const num2= 4

if (num1>num2){
    console.log(num1)
}
else{
    console.log(num2)
}


//   Variables y tipos de datos:
//   a) Crea una variable y asígnale un número. Luego, imprime por consola el doble de
//   ese número.

const a= 2
console.log(a*2)

// b) Crea una variable y asígnale una cadena de texto. Luego, imprime por consola la
// longitud de esa cadena

const string= "esta es una cadena"
console.log(string.length)

// c) Crea dos variables numéricas y realiza operaciones matemáticas básicas con
// ellas (suma, resta, multiplicación, división).

const num_1 = 10
const num_2 = 12
console.log(num_1-num_2)
console.log(num_1+num_2)
console.log(num_1*num_2)
console.log(num_1/num_2)


// ) Crea un bucle que imprima los números del 1 al 10
for (let valor = 0; valor < 11; valor++) {
    console.log(valor);
  }

//   a) Escribe una función que reciba un array de números y devuelva la suma de todos
//   ellos.

let total=0,numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++) total+=numeros[i];
console.log(total);

// b) Crea un array de nombres y recorre el array imprimiendo cada nombre en la
// consola.

let nombres= ["pedro", "paulo", "pepito"]
for( let i = 0 ; i < nombres.length ; i++){
    console.log(nombres[i])
};

// Objetos y métodos:
// a) Crea un objeto persona con propiedades como nombre, edad y profesión. Luego,
// accede a esas propiedades e imprímelas en la consola.

let persona= {
    nombre:"Pedro Juarez",
    edad: 20,
    profesion: "Kinesiologo",
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.profesion)

// b) Agrega un método al objeto persona que imprima un mensaje de saludo
// utilizando las propiedades del objeto.