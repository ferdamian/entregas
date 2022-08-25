



let salir;
let opcion_de_pago;
let Mis_juegos =[];
let Carrito = [];

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
}
// OBJETO EN CARRITO
class Juego_carrito{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}


// AGREGO ESTOS 3 ELEMENTOS EN LA LISTA PARA CORREGIR Y PROBAR SI TODO FUNCIONA SIN TENER QUE AGREGAR EN CADA MOMENTO MANUALMENTE UN NUEVO OBJETO "BOARDGAME".
let Takenoko = new Boardgame("takenoko",4,"Devir",15000,4);
let Carcassone = new Boardgame("carcassone",4,"Devir",12000,7);
let Uno = new Boardgame("uno",8,"Toptoys",2000,10);
Mis_juegos.push(Takenoko);
Mis_juegos.push(Carcassone);
Mis_juegos.push(Uno);

// AGREGO 3 ELEMENTOS EN LA LISTA DE CARRITO PARA CORREGIR Y PROBAR FUNCIONAMIENTOS PARA NO HACERLO MANUELMENTE
let takenoko_carrito = new Juego_carrito("takenoko",15000,1);
let carcassone_carrito = new Juego_carrito("carcassone",12000,2);
let uno_carrito = new Juego_carrito("uno",2000,3)
Carrito.push(takenoko_carrito);
Carrito.push(carcassone_carrito);
Carrito.push(uno_carrito);



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

/*
CAMBIOS DE LA ULTIMA ENTREGA:
- en vez de un boton en cada articulo para modificar el stock, precio o quitar un juego de mesa se modifica a una parte en pantalla donde el usuario busca ese articulo en un campo y lo modifica desde ahi con el metodo Mis_juegos.find()
- se agrego un nuevo arrglo "Carrito"
- funcion para ver lo que lleva el carrito
*/


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
// boton para ver el listado de mi carrito
function ver_listado_del_Carrito(){
    for(let juegos of Carrito){
        console.log ("Juego :", juegos.nombre);
        console.log ("Precio: ", juegos.precio);
        console.log ("Cantidad: ", juegos.cantidad);
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
            return true;
        }  
    }
    // MODIFICAR CONSOLE CON ALERT CUANDO LLEGUE EL MOMENTO
    console.log("no se encontro el juego");//este mensaje sera anunciado con un Alert
    return true;// retorno true para que no haga un bucle llamando a find por cada elemento del arreglo. la idea es que haya un campo en donde el usuario pueda colocar el nombre del juego que busca y el nuevo stock. si encuentra ese juego en el arreglo lo modifica sino sale el mensaje que no se ha encontrado.
}



// boton para modificar el precio
function modificar_precio(){
    let eljuego = prompt("ingerse el juego que quiere buscar");
    for (let juegos of Mis_juegos){
        if(juegos.nombre == eljuego){
            let nuevo_precio = parseInt(prompt("Ingrese el nuevo precio"));
            juegos.precio = nuevo_precio;
            return true;
        }
    }
    console.log("no se encontro el juego");
    return true;
}
//boton para quitar juego de la lista
function quitar_juego(){
    let eljuego = prompt("Nombre del juego a quitar");
    let i = 0;
        for (let juegos of Mis_juegos){
            if (juegos.nombre == eljuego){
                Mis_juegos.splice(i,1);
                console.log("se ha removido el juego: ", eljuego);
                return true;
            }else{
                i++;
            }
        }
        console.log("no se encontro el juego");
        return true;    
}


//lo pongo en un bucle pero la idea es que se agregue ingresando datos en campos desde la web
/*
while (salir !== "salir"){
    Agregar_Juego();
    salir = prompt("Si no quiere agregar otro juego escriba salir");
}
*/


//ver_listado_de_Mis_juegos();

/* <-------BORRAR ESTO

// MODIFICAR STOCK
console.log("-------------------------------------------");
console.log("-------------------------------------------");
Mis_juegos.find(modificar_stock);
ver_listado_de_Mis_juegos();


// MODIFICAR PRECIO
console.log("-------------------------------------------");
console.log("-------------------------------------------");
Mis_juegos.find(modificar_precio);
ver_listado_de_Mis_juegos();

// ELIMINAR PRODUCTO
console.log("-------------------------------------------");
console.log("-------------------------------------------");
Mis_juegos.find(quitar_juego);
ver_listado_de_Mis_juegos();

BORRAR ESTO---->*/


// SIMULADOR DE COMPRA - 


//                                                         ETAPA 1 - AGREGAR AL CARRITO
//la idea es que el usuario coloque un numero y le de el boton agregar para saber cuantas copias de ese juego agrega a su carrito

function Agregar_al_carrito(){
    let nombre_juego = prompt("Agregar al carrito el nombre del juego");
    for (let juegos of Mis_juegos){
        if(juegos.nombre == nombre_juego){
            let nombre = juegos.nombre; 
            let precio = juegos.precio; 
            let cantidad = parseInt(prompt("Cuantas cantidades quiere?"));
            let nuevo_juego = new Juego_carrito(nombre,precio,cantidad);
            Carrito.push(nuevo_juego);
            return true;
        }
    }
    console.log("no se encontro el juego");
    return true;
    
}
/*
while (salir !== "salir"){
    Mis_juegos.find(Agregar_al_carrito);
    salir = prompt("Si no quiere agregar otro juego al carrito escriba salir");
}
ver_listado_del_Carrito();
*/

//                                                         ETAPA 2 - METODO DE PAGO

/* explicacion funcion: 
1) se recibe un parametro que hace referencia al metodo de pago (efectivo/3,6 o 12 cuotas)(de momento eso esta en un bucle)
2) se guarda en una variable el mapeo del arreglo del carrito aplicando respectivo descuento o interes
3) se hace un reduce del nuevo arreglo para saber el monto a pagar

PD: lo intente hacer directamente desde el arreglo del carrito el reduce junto con el descuento o interes pero me daba mal el numero, por ejemplo puse un descuento del 100% y aun asi arrastraba numeros anteriores por eso le agregue un .map antes e hice el reduce de ese nuevo arreglo. 
*/
function metodo_de_pago(opcion_de_pago){
    //------------------------------> MOTODO EFECTIVO
    function descuento_efectivo(carrito){
        let descuento = carrito.precio *1;
        return{
            nombre: carrito.nombre,
            precio: carrito.precio - descuento,
            cantidad: carrito.cantidad
        }
    }
    function efectivo(acu,Carrito){
        acu = acu + (Carrito.cantidad * Carrito.precio);
        return acu
    }

    //------------------------------> METODO 3 CUOTAS
    function interes_tres_cuotas(carrito){
        let interes = carrito.precio * 0;
        return{
            nombre: carrito.nombre,
            precio: carrito.precio + interes,
            cantidad: carrito.cantidad
        }
    }
    function tres_cuotas(acu,Carrito){
        acu = acu + (Carrito.cantidad * Carrito.precio);
        return acu
    }
    //------------------------------> METODO 6 CUOTAS
    function interes_seis_cuotas(carrito){
        let interes = carrito.precio * 0.10;
        return{
            nombre: carrito.nombre,
            precio: carrito.precio + interes,
            cantidad: carrito.cantidad
        }
    }
    function seis_cuotas(acu,Carrito){
        acu = acu + (Carrito.cantidad * Carrito.precio);
        return acu
    }
    //------------------------------> METODO 12 CUOTAS
    function interes_doce_cuotas(carrito){
        let interes = carrito.precio * 2;
        return{
            nombre: carrito.nombre,
            precio: carrito.precio + interes,
            cantidad: carrito.cantidad
        }
    }
    function doce_cuotas(acu,Carrito){
        acu = acu + (Carrito.cantidad * Carrito.precio);
        return acu
    }
    //                                      OPCIONES DE PAGO
    // OPCION EFECTIVO
    if(opcion_de_pago == 1){
        let pago_efectivo = Carrito.map(descuento_efectivo);
        let pago = pago_efectivo.reduce(efectivo,0);
        return console.log("Monto a pagar = ", pago);   
    // OPCION 3 CUOTAS
    }else if(opcion_de_pago == 2){
        let pago_tres_cuotas = Carrito.map(interes_tres_cuotas);
        let pago = pago_tres_cuotas.reduce(tres_cuotas,0);
        return console.log("Monto a pagar = ", pago);
    // OPCION 6 CUOTAS
    }else if(opcion_de_pago == 3){
        let pago_seis_cuotas = Carrito.map(interes_seis_cuotas);
        let pago = pago_seis_cuotas.reduce(seis_cuotas,0);
        return console.log("Monto a pagar = ", pago);
    // OPCION 12 CUOTAS
    }else if(opcion_de_pago == 4){
        let pago_doce_cuotas = Carrito.map(interes_doce_cuotas)
        let pago = pago_doce_cuotas.reduce(doce_cuotas,0);
        return console.log("Monto a pagar = ", pago);
    }
}

ver_listado_del_Carrito();

// idealmente el usuario elige de una lista desplegable y confirma el metodo de pago, el bucle de momento es para representar esas opciones.

/*
while(opcion_de_pago !== 1 && opcion_de_pago !== 2 && opcion_de_pago !== 3 && opcion_de_pago !==4){
    opcion_de_pago = parseInt(prompt("Ingrese el numero segun corresponda 1- efectivo descuento del 5%, 2- 3 cuotas 5% interes, 3- 6 cuotas 10% interes, 4- 12 cuotas 15% interes"))
}
metodo_de_pago(opcion_de_pago);
ver_listado_del_Carrito();
*/

//                                           FUNCIONES DE FILTRADO

// ---> un buscar juegos con un monton mayor a "x"
function mayor_a(juego){
    return juego.precio >= 3000;// la idea es que el usuario ingrese estos datos por pantalla.
}
let filter_mayor_a = Mis_juegos.filter(mayor_a);
console.log("mayor a 3000",filter_mayor_a);
// ---> un buscar juegos con un monton menor a "x"
function menor_a(juego){
    return juego.precio <= 14000;
}
let filter_menor_a = Mis_juegos.filter(menor_a);
console.log("menor a 14000",filter_menor_a);

// ---> filtrar juegos por una cantidad "x" en mi inventario para saber de cual pedir stock
function mi_stock(juego){
    return juego.stock < 5;
}
let filter_stock = Mis_juegos.filter(mi_stock);
console.log("stock menor a 5",filter_stock);