
let Mis_juegos =[];

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
let Tzolkin = new Boardgame("Tzolkin",5,"Devir",18000,4);
let tickettoride = new Boardgame("Ticket to Ride",2,"Days of Wonder",20000,5);
let clank = new Boardgame("clank",18,"Devir",21000,4);
let truco = new Boardgame("truco",22,"N/A,",2500,6);
Mis_juegos.push(Takenoko);
Mis_juegos.push(Carcassone);
Mis_juegos.push(Uno);
Mis_juegos.push(Tzolkin);
Mis_juegos.push(tickettoride);
Mis_juegos.push(clank);
Mis_juegos.push(truco);



function mostrarJuegos(){
    for(let i = 0; i < Mis_juegos.length; i ++){
        let mis_productos = document.getElementById("Productos");
        let div = document.createElement("div");
        //TEMPLATE
        div.innerHTML = `<p>${Mis_juegos[i].nombre}</p>
        <img class="productSize" src="../entregaseis/img/cajita.png" alt="producto">
        <button type="button" class="btn btn-primary">Agregar al carrito</button>
                        `
        div.className = "bordeTemporal divSize"
        mis_productos.append(div);
    }
}

mostrarJuegos();