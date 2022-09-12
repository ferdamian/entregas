let Mis_usuarios = [];

// OBJETO USUARIO
class Usuario {
    constructor(nombre,password){
        this.nombre = nombre;
        this.password = password;
}
}

//Registro usuario
let formularioRegistro  = document.getElementById("register");
let inputRegistroUser = document.getElementById("userRegister");
let inputRegistroPass = document.getElementById("passRegister");


formularioRegistro.addEventListener("submit",function(e){
    e.preventDefault();
    if(inputRegistroUser.value != "" && inputRegistroPass.value != ""){
        let nuevoUsuario = new Usuario(inputRegistroUser.value, inputRegistroPass.value);
        Mis_usuarios.push(nuevoUsuario);
        //GUARDADO DE JSON USUARIO
        let nuevoUsuario_Json = JSON.stringify(Mis_usuarios);
        localStorage.setItem("usuarios", nuevoUsuario_Json);
        console.log(nuevoUsuario_Json);
        alert("el usuario ha sido registrado correctamente");
    }
})

//Login usuario
let formularioIngreso = document.getElementById("login");
let inputLoginUser = document.getElementById("user");
let inputLoginPass = document.getElementById("pass");

formularioIngreso.addEventListener("submit",function(e){
    e.preventDefault();
    let us = inputLoginUser.value;
    let ps = inputLoginPass.value;
    // RECUPERANDO ARREGLO DE JSON
    let recuperar_Mis_usuarios_Json = localStorage.getItem("usuarios");
    recuperar_Mis_usuarios_Json = JSON.parse(recuperar_Mis_usuarios_Json);
    console.log(recuperar_Mis_usuarios_Json);
    // BUSCANDO COINCIDENCIA DE ARREGLO DE JSON 
    for(let user of recuperar_Mis_usuarios_Json){
        if( us == user.nombre &&  ps == user.password){
            alert("Ha ingresado correctamente");
            console.log("login");
            localStorage.setItem("usuario", user.nombre);
            window.location.href = "tienda.html";
        }
    }

})