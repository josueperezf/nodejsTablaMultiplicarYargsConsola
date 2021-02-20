const fs = require('fs');
const colors = require('colors');
const crearArchivo=  async (numero, listar, hasta )=>{
    try {
        let salida = '';
        let consola = '';
        const nombreArchivo = `./salida/tabla-de-${numero}.txt`;
        for (let index = 1; index <= hasta; index++) {
            consola+= `${numero} ${'x'.green} ${index} ${'='.green} ${numero*(index)}\n`;
            salida+= `${numero} x ${index} = ${numero*(index)}\n`;
        }
        if(listar){
            console.log('=========================='.green);
            console.log('       TABLA DEL: '.green, colors.blue(numero));
            console.log('=========================='.green);
            console.log(consola);
        }
        fs.writeFileSync(nombreArchivo,salida);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {crearArchivo};