const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Error al grabar');
        }
    })
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const getListado = () => {
    cargarDB();
    console.log('======= Tareas por hacer ======='.green);
    for (let item of listadoPorHacer) {
        console.log(`Tarea: ${item.descripcion} Estado: ${item.completado}`);
    }
    console.log('=================================='.green);
}

const update = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(item => {
        return item.descripcion === descripcion
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(item => {
        return item.descripcion === descripcion
    });
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return ('Tarea eliminada');
    } else {
        return ('Error aL eliminar')
    }
};

const ListarEstado = (completado) => {
    cargarDB();
    let NuevoListado = listadoPorHacer.filter(item => item.completado === completado);
    if (NuevoListado.length >= 0) {
        return (NuevoListado);
    } else {
        return ('No hay tareas');
    }
}

module.exports = {
    crear: crear,
    guardar: guardarDB,
    listar: getListado,
    actualizar: update,
    eliminar: eliminar,
    ListarEstado: ListarEstado
}