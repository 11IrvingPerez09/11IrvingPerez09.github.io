// 📌 Datos simulados de un historial clínico
const historialClinico = [
    { fecha: "2024-02-10", diagnostico: "Gripe común", tratamiento: "Paracetamol y reposo" },
    { fecha: "2024-01-25", diagnostico: "Alergia estacional", tratamiento: "Antihistamínicos" },
    { fecha: "2023-12-10", diagnostico: "Chequeo General", tratamiento: "Todo normal" }
];

// 📌 Lista de archivos subidos (se almacenarán en memoria)
let archivosSubidos = [];

// 📌 Función para mostrar el historial clínico
function mostrarHistorial() {
    let historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";  // Limpia el contenido antes de agregar nuevas capturas

    historialClinico.forEach((entry) => {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("history-entry");
        entryDiv.innerHTML = `<strong>Fecha:</strong> ${entry.fecha} <br> 
                              <strong>Diagnóstico:</strong> ${entry.diagnostico} <br> 
                              <strong>Tratamiento:</strong> ${entry.tratamiento}`;
        historyDiv.appendChild(entryDiv);
    });
}

// 📌 Función para subir archivos PDF
function subirArchivo() {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];

    if (!file) {
        alert("Por favor, selecciona un archivo PDF.");
        return;
    }

    if (file.type !== "application/pdf") {
        alert("Solo se permiten archivos PDF.");
        return;
    }

    // Crear un objeto URL para visualizar el archivo temporalmente
    let fileURL = URL.createObjectURL(file);
    archivosSubidos.push({ name: file.name, url: fileURL });

    // Actualizar la lista de archivos subidos
    actualizarListaArchivos();
    
    alert("Archivo subido correctamente: " + file.name);
}

// 📌 Función para actualizar la lista de archivos subidos
function actualizarListaArchivos() {
    let fileListDiv = document.getElementById("fileList");
    fileListDiv.innerHTML = ""; // Limpiar la lista antes de actualizar

    archivosSubidos.forEach((file, index) => {
        let fileDiv = document.createElement("div");
        fileDiv.classList.add("file-item");
        fileDiv.innerHTML = `
            <a href="${file.url}" target="_blank">${file.name}</a>
            <button onclick="eliminarArchivo(${index})">X</button>
        `;
        fileListDiv.appendChild(fileDiv);
    });
}

// 📌 Función para eliminar archivos subidos
function eliminarArchivo(index) {
    archivosSubidos.splice(index, 1);
    actualizarListaArchivos();
}

// 📌 Función para realizar una consulta
function realizarConsulta() {
    let consultaTexto = document.getElementById("consulta").value;
    if (consultaTexto.trim() === "") {
        alert("Por favor, ingresa una consulta.");
        return;
    }

    alert("Consulta enviada:\n" + consultaTexto);
    document.getElementById("consulta").value = ""; // Limpia el campo después de enviar
}

// 📌 Llamar a la función para mostrar historial al cargar la página
window.onload = mostrarHistorial;