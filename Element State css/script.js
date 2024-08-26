const imagen = document.getElementById('imagen');

imagen.addEventListener('mouseover', () => {
    imagen.src = "descarga2.png";
});

imagen.addEventListener('mouseout', () => {
    imagen.src = "descarga.png";
});


const elemento = document.getElementById('elemento');

elemento.addEventListener('focus', () => {
    elemento.style.border = "2px solid blue";
}
);

elemento.addEventListener('blur', () => {
    elemento.style.border = "2px solid grey";
}
);