// yargs es para poder leer comandos desde la linea de comando de node, ejemplo --base=11117
const argv = require('yargs')
                // base es porque para correr el proyecto puede escribir --base=11111 o -b=5555
                .option('base',{
                    alias:'b',
                    type:'number',
                    // default:2,
                    demandOption:true,
                    describe:'Sirve para saber que tabla de multiplicar debe hacer'
                })
                .option('listar',{
                    alias:'l',
                    type:'boolean',
                    default:false,
                    describe:'Sirve para listar por consola el resultado que se almacena en el archivo'
                })
                .option('hasta',{
                    alias:'h',
                    type:'number',
                    default:10,
                    describe:'Numero limite hasta donde llegara la tabla'
                })
                //check es para validar que lo que ingreso la persona por la consola se un valor correcto
                .check((argumentos, opciones)=>{
                    // validemos si es un numero
                    if(isNaN(argumentos.base)) {
                        throw 'La base debe ser un numero'
                    }
                    if(isNaN(argumentos.hasta)) {
                        throw 'Limite debe ser un numero'
                    }
                    return true;
                })
                .argv;

// en la siguiente linea se hace una desestructuracion de los parametros que introducen por consola
// process retorna un array que solo en la posicion 3 es lo que le esciben en la consola --base=2
// con la siguiente linea creo una variable llamada base, si no existe le asigno el valor base=2

/*
// TOMANDO DE CONSOLA VERSION 1
esta seccion es por quisieramos recibir manualmente los parametros por consola ejemplo node app.js --base=3
// process es como una variable global tipò windown y demas
const [,,base = 'base=2'] = process.argv;
const [,numero] = base.split('=');
*/
module.exports = {argv};