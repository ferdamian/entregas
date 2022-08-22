



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
function Agregar_Juego(){
    let nombre = prompt ("ingrese nombre del juego");
    let cant_jugadores = prompt("ingerse la cantida de jugadores");
    let editorial = prompt("ingrese la editorial");
    let precio = prompt("ingrese el precio");
    let stock = prompt("ingrese stock");

    let nuevo_juego = new Boardgame(nombre,cant_jugadores,editorial,precio,stock);
    Mis_juegos.push(nuevo_juego);
}
// boton para ver el listado de todos los juegos
function ver_listado_de_Mis_juegos(){
    for(let juegos of Mis_juegos){
        console.log (" <--- Juego de Mesa ", juegos.nombre, " --->");
        console.log ("cantidad de jugadores: ",juegos.cant_jugadores);
        console.log ("editorial: ", juegos.editorial);
        console.log ("el precio es de: ", juegos.precio);
        console.log ("Hay en stock: ", juegos.stock);
        console.log("------------------------------------------------");
        console.log("");
    }
}
// boton para cambiar el stock
function modificar_stock(){
    let eljuego = prompt("ingerse el juego que quiere buscar");
    for (let juegos of Mis_juegos){
        if(juegos.nombre == eljuego){
            let nuevo_stock = parseInt(prompt("Ingrese el nuevo stock"));
            juegos.stock = nuevo_stock;
        }      
    }
}
// boton para modificar el precio
function modificar_precio(){
    let eljuego = prompt("ingerse el juego que quiere buscar");
    for (let juegos of Mis_juegos){
        if(juegos.nombre == eljuego){
            let nuevo_precio = parseInt(prompt("Ingrese el nuevo precio"));
            juegos.precio = nuevo_precio;
        }      
    }
}
//boton para quitar juego de la lista
function quitar_juego(){
    let eljuego = prompt("Nombre del juego a quitar");
    let i = 0;
        for (let juegos of Mis_juegos){
            if (juegos.nombre == eljuego){
                Mis_juegos.splice(i,1);
            }else{
                i++;
            }
            
        }
}


//lo pongo en un bucle pero la idea es que se agregue ingresando datos en campos desde la web

while (salir !== "salir"){
    Agregar_Juego();
    salir = prompt("Si no quiere agregar otro juego escriba salir");
}

console.log(Mis_juegos);

ver_listado_de_Mis_juegos(); 

// la idea aca es que desde la pagina elija modificar ycambie el precio en caso de que quede desactualizado, agregar/modificar el stock por razones que no son una venta y dar de baja o sacar un juego que ya no vaya a vender.

// MODIFICAR STOCK
console.log("-------------------------------------------");
console.log("-------------------------------------------");
modificar_stock();
ver_listado_de_Mis_juegos();

// MODIFICAR PRECIO
console.log("-------------------------------------------");
console.log("-------------------------------------------");
modificar_precio();
ver_listado_de_Mis_juegos();

// ELIMINAR PRODUCTO
console.log("-------------------------------------------");
console.log("-------------------------------------------");
quitar_juego();
ver_listado_de_Mis_juegos();







