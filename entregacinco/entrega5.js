




let salir;
let Mis_juegos =[];
console.log(Mis_juegos);    

//OBJETO BOARDGAME Y FUNCIONES
class Boardgame {
    constructor(nombre,cant_jugadores,editorial,precio,stock){
        this.nombre = nombre;
        this.cant_jugadores = cant_jugadores;
        this.editorial = editorial;
        this.precio = precio;
        this.stock = stock;
    }
    get_datos(){
        console.log (" <--- Juego de Mesa ", this.nombre, " --->");
        console.log ("cantidad de jugadores: ",this.cant_jugadores);
        console.log ("editorial: ", this.editorial);
        console.log ("el precio es de: ", this.precio);
        console.log ("Hay en stock: ", this.stock);
    }
    agregar_stock (){
        let agregando_stock = parseInt(prompt("Cuantos juegos agregas al stock ?"))
        this.stock = this.stock + agregando_stock;
    }

}
// AGREGO ESTOS 3 ELEMENTOS EN LA LISTA PARA CORREGIR Y PROBAR SI TODO FUNCIONA SIN TENER QUE AGREGAR EN CADA MOMENTO MANUALMENTE UN NUEVO OBJETO "BOARDGAME".
let Takenoko = new Boardgame("takenoko",4,"Devir",15000,4);
let Carcassone = new Boardgame("carcassone",4,"Devir",12000,7);
let Uno = new Boardgame("uno",8,"Toptoys",2000,10);
Mis_juegos.push(Takenoko);
Mis_juegos.push(Carcassone);
Mis_juegos.push(Uno);

//boton para agregar un juego a la lista de juegos
let form_Agregar_Juego = document.getElementById("formAgregarJuego");
let bontonactualizar = document.getElementById("actualizar");



form_Agregar_Juego.addEventListener("submit",function(e){
    //1) DATOS DEL JUEGO 
    // se toma los datos de los campos para crear el nuevo objeto Boardgame
    e.preventDefault();
    let nombre = document.getElementById("nombreJuego");
    let editorial = document.getElementById("editorialJuego");
    let stock = document.getElementById("stockJuego");
    let precio = document.getElementById("precioJuego");
    let cant_jugadores = document.getElementById("cantidadJugadores");
    // 2) AGREGAR JUEGO
    // se crea y agrega el objeto al array de juegos
    let nuevo_juego= new Boardgame(nombre.value,cant_jugadores.value,editorial.value,precio.value,stock.value)
    Mis_juegos.push(nuevo_juego);
    console.log(Mis_juegos);// poder ver con consola que se agrega el nuevo juego
    // 3) MOSTRAR LISTA
    // se muestra en pantalla todos los juegos del array Mis_Juegos.
    for(let i = 0; i < Mis_juegos.length; i ++){
        let mis_productos = document.getElementById("Productos");
        let div = document.createElement("div");
        bontonactualizar.addEventListener("click",function(){ 
        div.innerHTML = "";// actualizar y dejar en blanco el html para no duplicar el array
})
        //TEMPLATE
        div.innerHTML = `<div class="lista bordeTemporal2">
                                    <div class="centrarImagen uno ">
                                    <img class="productSize" src="./img/caja.png" alt="takenoko">
                                    </div>
                                    <div class="dos centrarTexto"> ${Mis_juegos[i].nombre} </div>
                                    <div class="tres centrarTexto"> ${Mis_juegos[i].precio}</div>
                                    <div class="cuatro centrarTexto">${Mis_juegos[i].stock}</div>
                                    <div class="cinco centrarTexto"> ${Mis_juegos[i].editorial}</div>
                                    <div class="seis centrarTexto"> ${Mis_juegos[i].cant_jugadores}</div>
                                    <button type="button" class="btn btn-primary">modificar</button>
                                    </div>
                                    `
        mis_productos.append(div);
    }
    
})







