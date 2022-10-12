let Mis_usuarios = [];
let ultimos_usuarios = [];

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
        ultimos_usuarios.push(inputRegistroUser.value);
        console.log(ultimos_usuarios);
        Mis_usuarios.push(nuevoUsuario);
       
        //GUARDADO DE JSON USUARIO
        let nuevoUsuario_Json = JSON.stringify(Mis_usuarios);
        mis_ultimos_usuarios(inputRegistroUser.value);//EMPAQUETADO DE USUARIO
        localStorage.setItem("usuarios", nuevoUsuario_Json);
        
        Swal.fire(
            'USUARIO',
            'creado correctamente',
            'success'
          )
    }else{
        Swal.fire(
            'ERROR',
            'al crear usuario',
            'error'
          )
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
    
    // BUSCANDO COINCIDENCIA DE ARREGLO DE JSON 
    for(let user of recuperar_Mis_usuarios_Json){
        if( us == user.nombre &&  ps == user.password){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Has iniciado sesion correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            localStorage.setItem("usuario", user.nombre);
            window.location.href = "tienda.html";
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'usuario o contraseña incorrecta',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

})
// FUNCION PARA EMPAQUETAR LOS NUEVOS USUARIOS Y MOSTRARLOS
function mis_ultimos_usuarios(...ultimos_usuarios){
    let ultimo_usuario = document.getElementById("ultimos_usuarios");
    let divUltimoUsuario = document.createElement("div");
    
    for(let i = 0; i < ultimos_usuarios.length; i++){
        divUltimoUsuario.innerHTML = `
        <p class= "usuarios color-usuarios">${ultimos_usuarios[i]}</p>
                                    `
        ultimo_usuario.append(divUltimoUsuario);
    }
}

