const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'Crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        return;

    case 'Listar':
        porHacer.listar();
        return;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar);
        return;

    case 'eliminar':
        let eliminar = porHacer.eliminar(argv.descripcion);
        console.log(eliminar);
        return;

    case 'listarEstado':
        let listaEstado = porHacer.ListarEstado(argv.estado);
        for (const item of listaEstado) {
            console.log(item.descripcion);
        };
        return;

    default:
        console.log('Comando no reconocido');

}