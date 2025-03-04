
const fs = require('fs');
let colors = require('colors');
 

const crearArchivo = async( base = 5, listar=false, h = 10 ) => {
    let result, consola = ''
    

    try {
        for( let i = 1; i <= h; i++ ) {
            result += `${ base } x ${ i } = ${ base * i }\n`
            consola += `${ base } ${'x'.rainbow} ${ i } = ${ base * i }\n`
        }
    
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, result)

        if( listar ) {
            console.log( consola )
        }
    
        return `tabla-${ base }.txt`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo: crearArchivo
}