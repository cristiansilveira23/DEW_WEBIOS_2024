// 
var todosDeCracha = false

if(todosDeCracha == true){

    console.log("todos recebem nota 10 em JS")
    
}else{
    console.log("todos recebem nota 0 em JS")
}
 
console.clear()

var numero1 = 6                            
var numero2 = 3

// numero1 > numero2 ? console.log("numero1 é maior")


if(numero1 > numero2){
    console.log("variavel numero1 é maior que a variavel numero2")
}else{
    console.log("variavel numero1 é menor que a variavel numero2")
}

console.clear()

let mes = "JANEIRO"

if(mes =="JANEIRO"){
    console.log("É verão")
}else if (mes == "JUNHO"){
    console.log("É outono")
}else if(mes == "OUTUBRO"){
    console.log("É primavera")
}else{
    console.log("É inverno")
}

console.clear()

switch(mes){
    case  "JANEIRO":
        console.log ("É verão")
    break;

    case "JUNHO" :
        console.log("É outono")
    break;

    case  "OUTUBRO":
        console.log("É primavera")
    break;

    default:
        console.log("É inverno")
    break;
        
}