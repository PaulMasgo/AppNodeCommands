const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado o pendiente una tarea'
};

const estado = {
    demand: true,
    alias: 'e',
    type: 'boolean'
}

const argv = require('yargs')
    .command('Crear', 'Crea un nuevo elento por consola', { descripcion })
    .command('actualizar', 'actualiza el estado completo de la tarea', { descripcion, completado })
    .command('eliminar', 'elimina una tarea', { descripcion: descripcion })
    .command('listarEstado', 'Lista las tareas de un determinado estado', { estado })
    .help()
    .argv;

module.exports = {
    argv: argv
}