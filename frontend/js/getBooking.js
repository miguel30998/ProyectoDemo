function obtenerDatos() {
    return [
        { nombre: "Juan", apellido: "Pérez", edad: 30 },
        { nombre: "Ana", apellido: "García", edad: 25 },
        { nombre: "Carlos", apellido: "Hernández", edad: 40 },
        { nombre: "María", apellido: "Martínez", edad: 35 },
    ];
}

function crearTabla(datos) {
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let encabezados = Object.keys(datos[0]);

    let filaEncabezados = document.createElement("tr");
    encabezados.forEach(encabezado => {
        let th = document.createElement("th");
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    thead.appendChild(filaEncabezados);

    datos.forEach(dato => {
        let fila = document.createElement("tr");
        encabezados.forEach(encabezado => {
            let td = document.createElement("td");
            td.textContent = dato[encabezado];
            fila.appendChild(td);
        });
        tbody.appendChild(fila);
    });

    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    return tabla;
}

let datos = obtenerDatos();
let tabla = crearTabla(datos);

document.getElementById("tabla-container").appendChild(tabla);