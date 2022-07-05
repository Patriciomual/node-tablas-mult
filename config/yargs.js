const { describe } = require('yargs');

const argv = require('yargs')
    .option({
        'b': 
        {
            alias: 'base',
            type: 'number',
            describe: 'Base de la tabla de mult'
        },
        'l': 
        {
            alias: 'listar',
            type: 'boolean',
            describe: 'Lista tabla en consola',
            default: false
        },
        'h': 
        {
            alias: 'hasta',
            type: 'number',
            describe: 'número máximo de multiplicador',
            default: 10
        }
    })
    .check( (argv, options) => {
        if( isNaN(argv.base)){
            throw 'tiene que ser número';
        }
        return true;
    } )
    .argv;

module.exports = argv;