
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

    for(let i = 0; i < Mis_juegos.length; i ++){
        // captar section dentro del main y crear un div para crear dentro
        let mis_productos = document.getElementById("Productos");
        let div = document.createElement("div");
        //TEMPLATE DEL DIV
        div.innerHTML = `<h2>${Mis_juegos[i].nombre}</h2>
        <img class="productSize" src="${Mis_juegos[i].imagen}" alt="producto">
        <p>${Mis_juegos[i].precio}</p>
        <button type="button" class="btn btn-primary marginButton botonAgregarCarrito">Agregar al carrito</button>
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
    // AGREGAR PRODUCTO AL CARRITO
    // se capturan todos los botones agregar al carrito y se crea el evento agregar al carrito
    let boton_Agregar_Carrito = document.querySelectorAll(".botonAgregarCarrito");
    
    //evento agregar carrito
    for (let boton of boton_Agregar_Carrito){
        boton.addEventListener("click", agregar_carrito);
    }
    // funcion GetDATA API 
    async function getData(){
        try{
            const data = await fetch('https://api.chucknorris.io/jokes/random');
            const json = await data.json();
            Toastify({
                text: "Chuck Norris: "+ json.value,
                duration: 3500,
                position: "left",
                gravity: "bottom",
                style:{
                    background:"orange"
                }
                }).showToast();
        }
        catch(e){
            console.error(e);
        }
    }
    //funcion agregar carrito
    function agregar_carrito( e, Boardgame){

        let cantidad_de_juegos = 0;
        let mi_carrito = document.getElementById("productosCarrito");
        let divCarrito = document.createElement("div");

        let hijo = e.target;
        let padre = hijo.parentNode;
      
    //  selecion de nombre del contenedor  
        let nombre = padre.querySelector("h2").textContent;


    // recorrido del array Mis_juegos para modificar stock. 
        for(let juego of Mis_juegos){
            if (nombre == juego.nombre && juego.stock > 0){
                cantidad_de_juegos++;
                divCarrito.innerHTML = `
                <p>${cantidad_de_juegos}</p>
                <img class="productSizeCarrito" src="${juego.imagen}" alt="tzolkin">
                <p>${juego.nombre}</p>
                <p>${juego.precio}</p>
                <button type="button" class="btn-danger marginButton botonBorrarCarrito">Borrar</button>
                                        `
                divCarrito.className = "bordeTemporal carritoFlex";
                mi_carrito.append(divCarrito);
                juego.stock--;
                Toastify({
                    text: "Agregado al carrito",
                    duration: 1500,
                    style:{
                        background:"green"
                    }
                    }).showToast();
                    getData();
                
                // <----- ACA FUNCIONA EL LLAMADO A TODOS LOS BOTONES DE BORRAR CARRITO
                function delete_productos(){
                    let boton_Borrar_Carrito = document.querySelectorAll(".botonBorrarCarrito");
                    for (let boton_borrar of boton_Borrar_Carrito){
                        boton_borrar.addEventListener("click",borrar_producto);
                    }
                
                     function borrar_producto(e){ 
                        e.target.parentNode.remove();
                        juego.stock++;
                        
                    }
                    }
                    delete_productos();
                
            }
            else if(nombre == juego.nombre && juego.stock <= 0){
                Toastify({

                    text: "No hay stock",
                    duration: 1000,
                    style:{
                        background:"red"
                    }
                    }).showToast();
            }
        }
    }

let showUser = document.getElementById("usuarioLogueado");


showUser.innerHTML = localStorage.getItem("usuario");
console.log(showUser.value);

    
    
   
    
    
    
    


