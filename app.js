// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

//Funcion para agregar amigo
function agregarAmigo() {
    
    let input = document.querySelector("#amigo");
    let nombre = input.value.trim();

    //Validar que el campo no este vacio
    if (nombre === "") {
        alert("No se ingreso nada, Ingresa nombre por favor");
        return;
    }

    // Agregar el nombre al array
 amigos.push(nombre);

 // Limpiar el campo de texto
 input.value = "";

 // Mostrar la lista actualizada
 mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
 let listaAmigos = document.getElementById("listaAmigos");

 // Limpiar la lista antes de mostrar los nuevos amigos
 listaAmigos.innerHTML = "";

 // Recorrer el array y crear un elemento de lista <li> para cada amigo
 amigos.forEach(function(amigo) {
     let li = document.createElement("li");
     li.textContent = amigo;
     listaAmigos.appendChild(li);
 });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
 if (amigos.length === 0) {
     alert("No hay amigos en la lista para sortear.");
     return;
 }

 // Seleccionar un amigo aleatorio
 let indiceAleatorio = Math.floor(Math.random() * amigos.length);
 let amigoSorteado = amigos[indiceAleatorio];

 // Mostrar el resultado del sorteo
 mostrarResultadoSorteo(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultadoSorteo(amigo) {
 let resultado = document.getElementById("resultado");
 
 // Limpiar el resultado anterior
 resultado.innerHTML = "";

 // Crear un nuevo elemento de lista con el amigo sorteado
 let li = document.createElement("li");
 li.textContent = "El amigo secreto sorteado es: " + amigo;
 resultado.appendChild(li);
}
