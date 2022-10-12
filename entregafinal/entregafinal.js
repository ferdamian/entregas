
let Mis_juegos =[];
let Mis_Productos = [];

let cantidad_en_stock = 0;
let monto = document.createElement("p");

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
//OBJETO CARRITO
class Carrito{
    constructor(cantidad,imagen,nombre,precio){
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}



// AGREGO ESTOS ELEMENTOS EN LA LISTA PARA CORREGIR Y PROBAR SI TODO FUNCIONA SIN TENER QUE AGREGAR EN CADA MOMENTO MANUALMENTE UN NUEVO OBJETO "BOARDGAME".
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






// MOSTRAR PRODUCTOS EN LA TIENDA
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
            <p>Jugadores: ${Mis_juegos[i].cant_jugadores}</p>
            <p>$ ${Mis_juegos[i].precio}</p>
            <p>Stock: ${Mis_juegos[i].stock}</p>
                                    `
            columna.append(divdetalles);// ajuntar el template con el aside
        })
        // EVENTO PARA BORRAR
        // Para cuando el usuario sale del div donde se llama al evento mouseover se reemplaze por un innerHTML vacio y "borre" la informacion anterior
        div.addEventListener("mouseout",function(){
            let columna = document.getElementById("detalles");
            columna.innerHTML = "";
        })
    }

    // AGREGAR PRODUCTO AL CARRITO
    // se capturan todos los botones agregar al carrito y se crea el evento agregar al carrito
    let boton_Agregar_Carrito = document.querySelectorAll(".botonAgregarCarrito");
    //evento agregar carrito
    for (let boton of boton_Agregar_Carrito){
        boton.addEventListener("click", agregar_carrito);
    }
    // funcion GetDATA API de Chuck Norris
    async function ChuckNorrisDice(){
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
    function agregar_carrito(e){
        let hijo = e.target;
        let padre = hijo.parentNode;
      
    //  selecion del contenedor para agregar nuevo obejto carrito al array Mis_Productos
        let cantidad_de_juegos = 1; 
        let nombre = padre.querySelector("h2").textContent;
        let precio = padre.querySelector("p").textContent;
        let imagen = padre.querySelector("img").src;
        for (let juego of Mis_juegos){
            if(nombre ==  juego.nombre){
                cantidad_en_stock = juego.stock;
            }
        }
        for(let juego of Mis_Productos){
            if(nombre == juego.nombre){
                // division para mantener el costo del juego original
                let precio_a_pagar = juego.precio/juego.cantidad;
                if(cantidad_en_stock > juego.cantidad){
                    juego.cantidad++;
                    juego.precio = precio_a_pagar*juego.cantidad;
                    mostrar_carrito();
                    mostrar_monto();
                    // notificacion de toasty de producto agregado al carrito
                    Toastify({
                        text: "Agregado al carrito",
                        duration: 1500,
                        style:{
                            background:"green"
                        }
                        }).showToast();
                        // llamado a la funcion de chucknorris
                        ChuckNorrisDice();
                }else if (cantidad_en_stock <= juego.cantidad){
                    Toastify({
                        text: "No hay stock",
                        duration: 1000,
                        style:{
                            background:"red"
                        }
                        }).showToast();
                
                    console.log("SIN STOCK")
                }
                return
            }
        }
        //agregando al array Mis_Productos el nuevo objeto "agregar_juego_al_carrito"
        let agregar_juego_al_carrito = new Carrito(cantidad_de_juegos,imagen,nombre,precio);
        Mis_Productos.push(agregar_juego_al_carrito);
        // notificacion en toasty del producto agregado
        Toastify({
            text: "Agregado al carrito",
            duration: 1500,
            style:{
                background:"green"
            }
            }).showToast();
            //llamado a la funcion de chuck norris
            ChuckNorrisDice();
        
        mostrar_carrito();
        mostrar_monto();
    }
    //FUNCION MOSTRAR CARRITO
    function mostrar_carrito(){
        //Captar dom del carrito
        let mi_carrito = document.getElementById("productosCarrito");
        //Template del carrito 
        mi_carrito.innerHTML= "";
        for(let juego of Mis_Productos){
            let mi_carrito = document.getElementById("productosCarrito");
            let divCarrito = document.createElement("div");
            divCarrito.innerHTML = `
            <p>${juego.cantidad}</p>
            <img class="productSizeCarrito" src="${juego.imagen}">
            <h6>${juego.nombre}</h6>
            <p>${juego.precio}</p>
            <button type="button" class="btn-danger marginButton borrar">Borrar</button>
                                    `
            divCarrito.className = "bordeTemporal carritoFlex";
            mi_carrito.appendChild(divCarrito);
        }
        //seleccionar todos los botones "borrar" creados
        let boton_borrar_carrito = document.querySelectorAll(".borrar");
        //Evento para los botones borrar
        for (let boton of boton_borrar_carrito){
            boton.addEventListener("click",borrar_carrito);
            }
    }
    //FUNCION BORRAR CARRITO
    function borrar_carrito(e){
        let hijo = e.target;
        let padre = hijo.parentNode;
        let nombre = padre.querySelector("h6").textContent;
        console.log(nombre);
        let i = 0;
        for(let juego of Mis_Productos){
            if(nombre == juego.nombre){
                juego.precio = juego.precio/juego.cantidad; // Volver el precio transformado al precio original
                juego.cantidad = 0; // volver a setear la cantidad de ese juego a 0
                Mis_Productos.splice(i,1); // eliminar del array el objeto borrado
                e.target.parentNode.remove(); // eliminar de la pantalla el objeto
                mostrar_monto();
            }else{
                i++;// aumentar i para hacer Mis_Productos.splice y borre el objeto correctamente
            }
        }
    }
    //FUNCION MOSTRAR MONTO
function mostrar_monto(){
let venta_total = Mis_Productos.reduce(calcular_total,0);// reducir el array mis productos
let resumen_de_la_compra = document.getElementById("resumenCompra");// captando el dom donde se muestra el monto a pagar
// template de la venta
monto.innerHTML= "";
monto.innerHTML =   `
   Total: ${venta_total}
                    `
monto.className = "monto_final"
resumen_de_la_compra.appendChild(monto);
}
// FUNCION CALCULAR TOTAL 
function calcular_total (acu, producto){
    acu = acu + parseInt(producto.precio);
    return acu
}

let boton_comprar = document.getElementById("btn_realizar_compra");
boton_comprar.addEventListener("click",realizar_compra);

function realizar_compra(){
    let venta_total = Mis_Productos.reduce(calcular_total,0);
    if (venta_total > 0){
    Mis_Productos.length = 0;
    venta_total = 0;
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
    mostrar_monto();
    mostrar_carrito();
    }else if(venta_total <= 0){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No hay productos en el carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }
    

}

mostrar_monto(); // llamando a la funcion mostrar monto para cuando el usuario ingrese ya vea renderizada el total de la compra aunque sea de 0

let showUser = document.getElementById("usuarioLogueado");
showUser.innerHTML = localStorage.getItem("usuario");
    
    
    


