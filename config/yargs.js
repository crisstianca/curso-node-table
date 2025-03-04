const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option( 'h', {
        alias: 'hight',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero hasta cuando se va a multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b ) ){
            throw 'La base tiene que ser un Numero'
        }
        return true;
    })
    .argv

module.exports = argv;