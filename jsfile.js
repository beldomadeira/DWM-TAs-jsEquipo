const listaPersonas = document.getElementById("listaPersonas");
const input = document.getElementById("input");
const arrayGente = ["Tadeo Rodríguez","Rodrigo Doldán","María Belén De Oliveira","Micaela Crocco", "Thiago Rodríguez", "Maria Irene Gómez", "Rodrigo Bueno", "Micaela Tinelli" ];

function reenderizarLista(personas){
    listaPersonas.innerHTML = "";
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        const li = document.createElement("li");
        li.textContent = persona;
        listaPersonas.appendChild(li);
    }
}

function filtrarPersonas(){
    const texto = input.value.toLowerCase();
    const personasFiltradas = arrayGente.filter(function(persona){
        return persona.toLowerCase().includes(texto);
    });
    reenderizarLista(personasFiltradas);
}

input.addEventListener("input", filtrarPersonas);
