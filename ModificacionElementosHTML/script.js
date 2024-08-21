function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Texto cambiado";
}

function aniadirElemento() {
    var elemento = document.getElementById("elemento");
    var lista = document.getElementById("lista");

    var li = document.createElement("li");
    li.innerHTML = elemento.value;
    lista.appendChild(li);

    elemento.value = "";
}