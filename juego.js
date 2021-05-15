alert ("¡INICIA UNA NUEVA PARTIDA!")
var pc;
var movpc;
var human;
var movhuman;
var resultado;

function aleatorio(min,max) {
  return Math.random()*(max-min)+min;
}
pc=Math.floor(aleatorio(1,3))

if (pc==1){
  movpc= "Piedra"
}

if (pc==2){
  movpc= "Papel"
}

if (pc==3){
  movpc= "Tijera"
}

human= parseInt(prompt("Por favor seleccione una opcion: \n 1.Piedra \n 2.Papel \n 3.Tijera"))

if (human==1){
  movhuman= "Piedra"
}

if (human==2){
  movhuman= "Papel"
}

if (human==3){
  movhuman= "Tijera"
}

while (human>=4) {
  /*alert("ingresar volors entre 1 y 3")*/
  console.log(human)
  human = parseInt(prompt("Por favor seleccione una opcion: \n 1.Piedra \n 2.Papel \n 3.Tijera"))
  
}

movhuman = human;

document.write("El PC saca: "+movpc + "<br>");
document.write("El Humano saca: "+movhuman + "<br>");

if  (movpc=="Piedra" && movhuman=="Papel") {
  resultado = "Papel le gana a Piedra, ¡GANA HUMANO!"
  document.write(resultado)
}

else if (movpc=="Piedra" && movhuman=="Piedra") {
  resultado = "¡EMPATE!"
  document.write(resultado)
}

else if (movpc=="Piedra" && movhuman=="Tijera") {
  resultado = "Piedra le gana a Tijera ¡GANA PC!"
  document.write(resultado)
}

else if  (movpc=="Papel" && movhuman=="Papel") {
  resultado = "¡EMPATE!"
  document.write(resultado)
}

else if  (movpc=="Papel" && movhuman=="Piedra") {
  resultado = "Papel le gana a Piedra ¡GANA PC!"
  document.write(resultado)
}

else if  (movpc=="Papel" && movhuman=="Tijera") {
  resultado = "Tijera le gana a Papel ¡GANA HUMANO!"
  document.write(resultado)
}

else if  (movpc=="Tijera" && movhuman=="Papel") {
  resultado = "Tijera le gana a Papel ¡GANA PC!"
  document.write(resultado)
}

else if  (movpc=="Tijera" && movhuman=="Piedra") {
  resultado = "Piedra le gana a Tijera ¡GANA HUMANO!"
  document.write(resultado)
}

else if  (movpc=="Tijera" && movhuman=="Tijera") {
  resultado = "¡EMPATE!"
  document.write(resultado)
}

else {
  document.write("El numero no esta dentro de las opciones, ingrese un valor correcto entre 1 y 3")
}