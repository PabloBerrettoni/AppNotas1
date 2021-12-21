let tareas = require('./funcionesDeTareas');
let process = require('process');
let comando = process.argv[2];

switch(comando) {
    case 'listar': 
        console.log(tareas.leerJSON());
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo que quieres hacer.')
}