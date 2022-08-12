

let vida = 100;
let salir = "";
let nombre = prompt("bienvenido a la aventura, cuando quieras irte con tus recompensas escribe salir. ingresa tu nombre de aventurero");
let ataque;
let damage = 5;
let vida_monstruo = 10;
let nivel = 1;

console.log (nombre);
while(salir !== "salir"){
    while(vida_monstruo > 0){
        ataque = parseInt(prompt("ingrese 1: ataque normal, 2: ataque defenderse"));
        if(ataque == 1){
            vida_monstruo = vida_monstruo - damage;
            console.log("al monstruo le quedan", vida_monstruo, "puntos de vida");
        }
        else if (ataque == 2){  
            vida_monstruo = vida_monstruo - (damage *2);
            console.log("al monstruo le quedan", vida_monstruo, "puntos de vida");
        } 
        else{
        console.log("no ingresaste ningun comando aceptable");
        } 
        console.log ("al monstruo le quedan", vida_monstruo, "puntos de vida");
}
    salir = prompt("Has ganado, si desea salir del combate escriba salir, sino seguira peleando con otro monstruo");
    vida_monstruo = 10;  
    nivel++;
    vida_monstruo = vida_monstruo * nivel;
    console.log("te enfrentas a un monstruo nivel:", nivel, "y tiene:", vida_monstruo, "puntos de vida"); 
}


