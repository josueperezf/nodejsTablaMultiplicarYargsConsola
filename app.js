
const {crearArchivo} = require('./helpers/multiplicar')
const {argv} = require('./config/yargs')


// TOMANDO DE CONSOLA VERSION 2
/*
console.log(process.argv);
console.log(argv);
console.log(argv.base);
*/
base    = argv.base;
listar  = argv.listar;
hasta   = argv.hasta;

console.clear();

crearArchivo(base, listar, hasta)
    .then((resp=>{
        console.log(`Archivo ${resp} creado`);
    }))
    .catch((e)=>console.log(e));

