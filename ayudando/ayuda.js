/*let producto = prompt("Escoja su producto");
    let precio_producto = parseInt(prompt("Precio de producto"));  
    let cantidad_de_productos = parseInt(
        prompt("Ingrese la cantidad de productos " + producto + " que va a comprar")); 

    let cuota_producto = parseInt(prompt("Indique las cuotas que desea 3/6/9"));
    
    function precio_final(precio_producto, cantidad_de_productos) {
       let precio = precio_producto * cantidad_de_productos;
        return precio
    }

    function precio_en_cuotas() {
        if(cuota_producto == 3) {
            let porcentaje_en_3_cuotas = ((precio_final(precio_producto, cantidad_de_productos) * 12) /100);
            let precio_final_final = precio_final(precio_producto, cantidad_de_productos) + porcentaje_en_3_cuotas;
            return ("El precio total " + producto + " es de $" + precio_final_final);
        }

    }

console.log(precio_en_cuotas());


let producto = prompt("Escoja su producto");
    let precio_producto = parseInt(prompt("Precio de producto"));  
    let cantidad_de_productos = parseInt(
        prompt("Ingrese la cantidad de productos" + producto + "que va a comprar")); 

    let cuota_producto = parseInt(prompt("Indique las cuotas que desea 3/6/9"));
    
    function precio_final(precio_producto, cantidad_de_productos) {
       let precio = precio_producto * cantidad_de_productos;
        return precio
    }

    function precio_en_cuotas() {
        if(cuota_producto == 3) {
            let porcentaje_en_3_cuotas = ((precio_final(precio_producto, cantidad_de_productos) * 12) /100);
            let precio_final = precio_final(precio_producto, cantidad_de_productos) + porcentaje_en_3_cuotas;
            return ("El precio total" + producto + "es de $" + precio_final);
        }

    }

console.log(precio_en_cuotas());*/

let producto = prompt("Escoja su producto");
    let precio_producto = parseInt(prompt("Precio de producto"));  
    let cantidad_de_productos = parseInt(
        prompt("Ingrese la cantidad de productos" + producto + "que va a comprar")); 

    let cuota_producto = parseInt(prompt("Indique las cuotas que desea 3/6/12"));
    
    function precio_final(precio_producto, cantidad_de_productos) {
       let precio = precio_producto * cantidad_de_productos;
        return precio
    }

    function precio_en_cuotas() {
        if(cuota_producto == 3) {
            let porcentaje_en_3_cuotas = ((precio_final(precio_producto, cantidad_de_productos) * 12) /100);
            let final_final = precio_final(precio_producto, cantidad_de_productos) + porcentaje_en_3_cuotas;
            return ("El precio total" + producto + "es de $" + final_final);
            
        }
        
        else if(cuota_producto == 6){

            let porcentaje_en_6_cuotas = ((precio_final(precio_producto, cantidad_de_productos) * 30) /100);
            let final_final = precio_final(precio_producto, cantidad_de_productos) + porcentaje_en_6_cuotas;
            return ("El precio total" + producto + "es de $" + final_final)
        }
         
        else if(cuota_producto == 12){
            let porcentaje_en_12_cuotas = ((precio_final(precio_producto, cantidad_de_productos) * 50) /100);
            let final_final = precio_final(precio_producto, cantidad_de_productos) + porcentaje_en_12_cuotas;
            return ("El precio total" + producto + "es de $" + final_final);
            
        }
        while(cuota_producto <=2){
            return ("no puede realizar la compra")
        }
    }
    console.log(precio_en_cuotas());