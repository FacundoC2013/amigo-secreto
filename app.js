let nombresAmigos = [];
let numeroRandomSorteo;
let resultadoSorteado;
let listaResultado;
function agregarAmigos() {
    let nombre = document.getElementById("amigo").value;

    if (nombre.trim() === "") {
        alert("El campo está vacío");
        return;
    } else {
        nombresAmigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
        document.getElementById("resultado").innerHTML = "";
    }

}

function actualizarListaAmigos() {
    let listaDeAmigo = document.getElementById("listaAmigos");
    listaDeAmigo.innerHTML = "";

    let contador = 0;
    while (contador < nombresAmigos.length) {
        let item = document.createElement("li");
        item.textContent = nombresAmigos[contador];
        listaDeAmigo.appendChild(item);
        contador++;
    }
}
function sortearAmigo(){
    if(nombresAmigos.length === 0){
        alert("No hay amigos agregados para sortear");
    }else{
        numeroRandomSorteo = Math.floor(Math.random()*nombresAmigos.length);
        resultadoSorteado = nombresAmigos[numeroRandomSorteo];

        listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML ="";

        let elementoResultado = document.createElement("li");
        elementoResultado.textContent = `El amigo secreto es ${resultadoSorteado}`;
        listaResultado.appendChild(elementoResultado); 

        nombresAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    }

}