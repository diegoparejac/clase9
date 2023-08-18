// Objetos en js
let persona = {
    nombre: 'Juan',
    apellido:'Perez',
    edad : 25,
    altura:1.70
}
//console.log(persona.nombre)

persona.edad = 30;
//console.log('Edad de la persona:', persona.edad);

persona.profesion = "Profesor";
//console.log(persona);

delete persona.profesion
// console.log(persona)

const propiedades = Object.keys(persona)
// devuelve las claves del objeto
// console.log("Propiedades:", propiedades )

const valores = Object.values(persona)
//devuelve los valores del objeto
// console.log ("Valores:", valores );

const otraPersona = {...persona} 
//crear un nuevo objeto con el mismo contenido que original
// console.log(otraPersona)

let {nombre, apellido, edad, altura} = persona
// console.log({nombre})

let jsonPersona = '{"nombre" : "Juan", "edad" : 25 }'
let persona1 = JSON.parse(jsonPersona)
// transformamos a objeto
// console.log (persona1)

let person = { nombre: 'Juan', edad: 25 }
let jsonPerson = JSON.stringify(person)
//transformamos al string
// console.log ('Json Person:', jsonPerson)

// --------------------------------------------
// Función constructora 


//funcion constructora
function Persona(nombre, apellido, edad, ciudad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad = ciudad
}

const persona2 = new Persona("Juan", "Perez", 30, "Buenos Aires")
const persona3 = new Persona("Jose", "Poli", 25, "Buenos Aires")

// console.log(persona2)
// console.log(persona3)

// ------------------------------------
// While
// let contador = 1;

// while (contador < 5 ){
//     console.log('Contador:'+ contador);
//     contador ++
// }

// ---------------------------------
// Callback
// function suma(num1, num2){
//     return num1 + num2
// }

function suma (num1, num2) {
    return num1 + num2
}

// console.log(suma(1, 2))

function operacion (num1, num2, callback){
    const resultado = callback(num1, num2 )
    return resultado
}

let resta = (num1, num2) => {
    return num1 - num2
}

// console.log(operacion(4, 2, suma))

let numeros = [2, 4, 6, 8]
let elDoble = numeros.map(function(num){
    return num * 2
})

// console.log(elDoble)
let elDoble1 = numeros.filter(function(num){
    return num > 4
})
// console.log(elDoble1)

let aumento = numeros.reduce(function(acum, num){
    return acum + num 
})
// console.log(aumento)

numeros.forEach(function(num){
    console.log(num)
})