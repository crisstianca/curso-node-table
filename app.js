const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
let colors = require('colors');
 


console.clear();


console.log( argv )



// const [, , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// // const base = 3;



crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow))
