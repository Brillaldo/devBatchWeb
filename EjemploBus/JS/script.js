// Gestion de Alumno 


class Grupo {
    constructor(nombre, alumnos) {
        this.nombre = nombre
        this.alumnos = alumnos
    }
}

class Alumno {
    constructor(nombre, apellido, edad, curso ,calificacion) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.curso = curso
        this.calificacion = calificacion
       
    }
}

let alumno1 = new Alumno("Brillaldo","Serra", 18, "POO" , 10)



var alumnos = [alumno1]
let grupo1 = new Grupo("Grupo 1", alumnos)


function agregarAlumno() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let curso = document.getElementById("curso").value
    let calificacion = document.getElementById("calificacion").value
    let nuevoAlumno = new Alumno(nombre,apellido, edad, curso, calificacion)
    alumnos.push(nuevoAlumno)
    mostrarAlumnos(alumnos)
}

function mostrarAlumnos(array) {
    limpiarTabla()
    array.forEach((item, indice) => {
        let tBody = document.getElementById("students")
         let elemento = `
         <tr>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.edad}</td>
            <td>${item.curso}</td>
            <td>${item.calificacion}</td>
            <td><button class="btn btn-danger" onclick="eliminarAlumno(${indice})">Elimnar</button></td>
        </tr>
         `;
    tBody.innerHTML += elemento
   } )
}

function limpiarTabla() {
    let tBody = document.getElementById("students")
    tBody.innerHTML = ""
}

function eliminarAlumno(indice) {
   alumnos.splice(indice, 1)
   document.getElementById("alertContainer").style.display = "block"
    mostrarAlumnos(alumnos)
}

function eliminarUltimoRegistro() {
    alumnos.pop()
    mostrarAlumnos(alumnos)
}

function ordernarAlfabeticamente() {
    let arrayOrdenado = alumnos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    mostrarAlumnos(arrayOrdenado)
}

function buscarAlumno() {
    let alumnoAbuscar = document.getElementById("serchStudent").value
    const nombreCapitalizado = alumnoAbuscar.charAt(0).toUpperCase() + alumnoAbuscar.slice(1)
    let arrayAlumnoFiltrado = alumnos.filter( alumno => alumno.nombre.includes(nombreCapitalizado))
    if (arrayAlumnoFiltrado.length == 0) {
        alert("No se encontro el alumno")
    } else {
        mostrarAlumnos(arrayAlumnoFiltrado)
    } 
    
}

// mostrarAlumnos
mostrarAlumnos(alumnos)


// leer datos del input con el evento input
 let searchInput = document.getElementById("serchStudent");
    searchInput.addEventListener("input", buscarAlumno)