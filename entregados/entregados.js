

// precio de los productos
let precio_producto_uno = 10900;
let precio_producto_dos = 11200;
let precio_producto_tres = 13900;
let precio_producto_cuatro = 17800;
// cantidad de productos en el carrito
let cant_producto_uno = 0;
let cant_producto_dos = 0;
let cant_producto_tres = 0;
let cant_producto_cuatro = 0;

let salir;
let opcion_de_compra;
let opcion_de_pago;
let precio_de_las_compras; 


function precio_del_producto (precio, cantidad){
    let resultado = parseInt(precio * cantidad);
    return resultado;
}
function precio_final (opcion_pago, precio_compras){
    let resultado;
    if(opcion_pago == 1){
        descuento = precio_compras * 0.05;
        resultado =parseInt(precio_compras-descuento);
        return resultado;
    }
    else if(opcion_pago == 2){
        interes = precio_compras * 0.05;
        resultado =parseInt(precio_compras + interes);
        return resultado;
    }
    else if(opcion_pago == 3){
        interes = precio_compras * 0.10;
        resultado =parseInt(precio_compras + interes);
        return resultado;
    }else if(opcion_pago == 4){
        interes = precio_compras * 0.15;
        resultado =parseInt(precio_compras + interes);
        return resultado;
    }
}

while(salir !== "salir"){
    opcion_de_compra = parseInt(prompt(" Ingrese el numero del producto que desea llevar ?  1- Cacao 2- Carcassone 3- Takenoko 4- Frescoo "));
    if(opcion_de_compra == 1){
        cant_producto_uno++;
        salir = prompt("escriba salir si no quiere agregar nada mas a su carrito");
    }
    else if(opcion_de_compra == 2){
        cant_producto_dos++;
        salir = prompt("escriba salir si no quiere agregar nada mas a su carrito");
    }
    else if (opcion_de_compra == 3){
        cant_producto_tres++;
        salir = prompt("escriba salir si no quiere agregar nada mas a su carrito");
    }
    else if (opcion_de_compra == 4){
        cant_producto_cuatro++;
        salir = prompt("escriba salir si no quiere agregar nada mas a su carrito");
    }
    else{
        salir = prompt("opcion invalida, escriba salir si no quiere seguir comprando");
    }
}

console.log("compro:", cant_producto_uno, "articulos de este producto y cuesta: ",precio_del_producto(precio_producto_uno,cant_producto_uno));
console.log("compro:", cant_producto_dos, "articulos de este producto y cuesta: ",precio_del_producto(precio_producto_dos,cant_producto_dos));
console.log("compro:", cant_producto_tres, "articulos de este producto y cuesta: ",precio_del_producto(precio_producto_tres,cant_producto_tres));
console.log("compro:", cant_producto_cuatro, "articulos de este producto y cuesta: ",precio_del_producto(precio_producto_cuatro,cant_producto_cuatro));

precio_de_las_compras =("su compra total es de: ", (precio_del_producto(precio_producto_uno,cant_producto_uno))+(precio_del_producto(precio_producto_dos,cant_producto_dos))+(precio_del_producto(precio_producto_tres,cant_producto_tres))+(precio_del_producto( precio_producto_cuatro,cant_producto_cuatro)));
console.log("el precio total es de:", precio_de_las_compras);

while(opcion_de_pago !== 1 && opcion_de_pago !== 2 && opcion_de_pago !== 3 && opcion_de_pago !==4){
    opcion_de_pago = parseInt(prompt("Ingrese el numero segun corresponda 1- efectivo descuento del 5%, 2- 3 cuotas 5% interes, 3- 6 cuotas 10% interes, 4- 12 cuotas 15% interes"))
}

console.log("el precio final es de: ", (precio_final(opcion_de_pago,precio_de_las_compras)));
