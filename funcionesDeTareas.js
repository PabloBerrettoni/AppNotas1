let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => { // esta funcion lee el archivo tareas.json y lo pasa a un objeto literal
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8') // fs.readFileSync asignamos la direccion del archivo JSON y el tipo de archivo
        return JSON.parse(listaDeTareas) // pasamos la variable que leyo el archivo JSON a objeto literal
    }
}