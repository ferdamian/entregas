

let vida = 100;
let salir = "";
let nombre = prompt("bienvenido a la aventura, ingresa tu nombre de aventurero");
let ataque;
let damage = 5;
let vida_monstruo = 10;
let nivel = 1;
let oro = 0;

console.log (nombre);
while(vida > 0){
while(salir !== "salir"){
    while(vida_monstruo > 0 && vida >0){
        ataque = parseInt(prompt("ingrese 1: ataque normal, 2: ataque defenderse"));
        if(ataque == 1){
            vida_monstruo = vida_monstruo - damage;
            vida = vida - 3;
            console.log("al monstruo le quedan", vida_monstruo, "puntos de vida");
            console.log("te queda", vida, "puntos de vida");
        }
        else if (ataque == 2){  
            vida_monstruo = vida_monstruo - (damage *2);
            vida = vida - parseInt(Math.random()*10);
            console.log("al monstruo le quedan", vida_monstruo, "puntos de vida");
            console.log("te queda", vida, "puntos de vida");
        } 
        else{
        vida = vida - 7;    
        console.log("no ingresaste ningun comando aceptable y recibiste 7 puntos de daño");
     }    
}
if (vida > 0){
    oro = oro + parseInt(Math.random()*100);
    console.log( "tienes", oro, "oro en esta aventura");
    console.log("te vas a enfrentar a un monstruo nivel:", nivel); 
    vida_monstruo = 10;  
    nivel++;
    vida_monstruo = vida_monstruo * nivel;
    salir = prompt("Has ganado, si desea salir del combate escriba salir, sino seguira peleando con otro monstruo");
}
else{
    console.log("Has sido derrotado");
    salir = "salir";
}  
}
}


