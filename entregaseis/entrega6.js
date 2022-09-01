
let Mis_juegos =[];

//OBJETO BOARDGAME Y FUNCIONES
class Boardgame {
    constructor(nombre,cant_jugadores,editorial,precio,stock,imagen){
        this.nombre = nombre;
        this.cant_jugadores = cant_jugadores;
        this.editorial = editorial;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
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
let takenoko = new Boardgame("Takenoko",4,"Devir",13900,4,'./img/takenoko.png');
let carcassone = new Boardgame("Carcassone",4,"Devir",11200,7,'./img/carcassone.png');
let uno = new Boardgame("Uno",8,"Mattel",1500,10,'./img/uno.png');
let tzolkin = new Boardgame("Tzolkin",4,"Devir",12500,2,'./img/tzolkin.png');
let tickettoride = new Boardgame("Ticket to Ride",5,"Days of Wonder",13650,15,'./img/tickettoride.png');
let clank = new Boardgame("Clank",4,"Devir",14600,20,'./img/clank.png');
let museum = new Boardgame("Museum",5,"Devir",11300,16,'./img/museum.png');
Mis_juegos.push(takenoko);
Mis_juegos.push(carcassone);
Mis_juegos.push(uno);
Mis_juegos.push(tzolkin);
Mis_juegos.push(tickettoride);
Mis_juegos.push(clank);
Mis_juegos.push(museum);


// No se si es necesario creo una funcion. lo hice de esta manera primero para poder controlar cuando se ejecutaba
function mostrarJuegos(){
    for(let i = 0; i < Mis_juegos.length; i ++){
        // captar section dentro del main y crear un div para crear dentro
        let mis_productos = document.getElementById("Productos");
        let div = document.createElement("div");
        //TEMPLATE DEL DIV
        div.innerHTML = `<p>${Mis_juegos[i].nombre}</p>
        <img class="productSize" src="${Mis_juegos[i].imagen}" alt="producto">
        <button type="button" class="btn btn-primary marginButton">Agregar al carrito</button>
                        `
        div.className = "bordeTemporal divSize mostrarDetalle";
        mis_productos.append(div); // ajuntar el template al section 
        //  EVENTO PARA MOSTRAR DETALLES
        div.addEventListener("mouseover",function(){
            // capturar el aside donde se van a mostrar los detalles e incorporar un div 
            let columna = document.getElementById("detalles");
            let divdetalles = document.createElement("div");
            //TEMPLATE DEL DIV
            divdetalles.innerHTML = `
            <h2> ${Mis_juegos[i].nombre}</h2>
            <img class="productSize" src="${Mis_juegos[i].imagen}" alt="producto">
            <p>${Mis_juegos[i].editorial}</p>
            <p>Jugadores:${Mis_juegos[i].cant_jugadores}</p>
            <p>${Mis_juegos[i].precio}</p>
            <p>Stock: ${Mis_juegos[i].stock}</p>
                                    `
           
            columna.append(divdetalles);// ajuntar el template con el aside
        })
        // EVENTO PARA BORRAR
        // Para cuando el usuario sale del div donde se llama al evento mouseover se reemplaze por un innerHTML vacio y "borre" la informacion anterior
        div.addEventListener("mouseout",function(){
            let columna = document.getElementById("detalles");
            columna.innerHTML = "";
            // console.log("salio");
        })
    }

}

mostrarJuegos();