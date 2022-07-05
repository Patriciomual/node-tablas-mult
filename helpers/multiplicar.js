const fs = require('fs');
const colors =  require('colors');

/* const crearArchivo = ( base ) => {

     return new Promise((resolve, reject) => {
        try {
            console.log('===================');
            console.log(`Tabla del: ${base}`);
            console.log('===================');
        
            let salida = '';
        
            for (let i = 1; i <= 10; i++){
                salida += `${base} x ${i} = ${base*i}\n`;
            }
        
            console.log(salida);

            fs.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        } catch (err) {
            reject(err);
        }
 
    }); 
} */

const crearArchivo = async( base, listar, hasta ) => {
    try {
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.yellow} ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log('==================='.rainbow);
            console.log(`Tabla del: ${base}`);
            console.log('==================='.rainbow);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = { crearArchivo };