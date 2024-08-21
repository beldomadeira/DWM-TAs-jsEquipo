const nombre = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");
const correo = document.getElementById("correo");
const caja = document.querySelector(".caja_formulario");


// function validarNombre(){
//     if(nombre.value.length() ===0 || contraseña.value.length() ===0 || correo.value.length() ===0 ){
//         const p=document.createElement("p");
//         p.innerHTML="    ";
//         caja.appendChild(p);
//     }else if(contraseña.value.length()<8){
//         const p=document.createElement("p");
//         p.innerHTML="El largo de la contraseña debe ser minimo de 8 caracteres.";
//         caja.appendChild(p);
//     }
// }
function validarContraseña() {
    const password = contraseña.value;
    let error = document.getElementById("error-contraseña");
    if (!error) {
        error = document.createElement("p");
        error.id = "error-contraseña";
        caja.appendChild(error);
    }
    if (password.length === 0 || password.length < 8) {
        error.innerHTML = "Contraseña inválida. Mínimo ocho caracteres.";
    } else {
        if (error) {
            caja.removeChild(error);
        }
    }
}

function validarNombre() {
    const name = nombre.value;
    let error_nom = document.getElementById("error-nombre");
    if (!error_nom) {
        error_nom = document.createElement("p");
        error_nom.id = "error-nombre";
        caja.appendChild(error_nom);
    }
    if (name.length === 0) {
        error_nom.innerHTML = "Nombre invalido.";
    } else {
        if (error_nom) {
            caja.removeChild(error_nom);
        }
    }
}

function validarCorreo() {
    const email = correo.value;
    let error_correo = document.getElementById("error-correo");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!error_correo) {
        error_correo = document.createElement("p");
        error_correo.id = "error-correo";
        caja.appendChild(error_correo);
    }
    if (!emailRegex.test(email)) {
        error_correo.innerHTML = "Correo electrónico inválido.";
    } else {
        if (error_correo) {
            caja.removeChild(error_correo);
        }
    }
}


nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
contraseña.addEventListener("input", validarContraseña);