document.addEventListener('DOMContentLoaded', function() {
    // Cambiar texto
    function cambiarTexto() {
        document.getElementById("texto").innerHTML = "Texto cambiado";
    }

    // Añadir elemento a la lista
    function aniadirElemento() {
        var elemento = document.getElementById("elemento");
        var lista = document.getElementById("lista");

        if (elemento.value.trim() !== "") {
            var li = document.createElement("li");
            li.innerHTML = elemento.value;
            lista.appendChild(li);
            elemento.value = "";
        }
    }

    // Eliminar último elemento de la lista
    function eliminarUltimo() {
        const lista = document.getElementById('lista');
        if (lista.children.length > 0) {
            lista.removeChild(lista.lastElementChild);
        }
    }

    // Mostrar/ocultar párrafo
    function toggleParrafo() {
        const parrafo = document.getElementById('parrafoToggle');
        parrafo.style.display = parrafo.style.display === 'none' ? 'block' : 'none';
    }

    // Incrementar contador
    let count = 0;
    function incrementarContador() {
        count++;
        document.getElementById('contador').textContent = count;
    }

    // Event listeners
    document.getElementById('btnCambiarTexto').addEventListener('click', cambiarTexto);
    document.getElementById('btnAniadirElemento').addEventListener('click', aniadirElemento);
    document.getElementById('btnEliminarUltimo').addEventListener('click', eliminarUltimo);
    document.getElementById('btnToggle').addEventListener('click', toggleParrafo);
    document.getElementById('btnIncrementar').addEventListener('click', incrementarContador);
});