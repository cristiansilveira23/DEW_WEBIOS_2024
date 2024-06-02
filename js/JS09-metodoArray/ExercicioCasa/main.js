//Exercicio 01

let valores = [17, 43, 8, 4, 97, 56, 29];
mfnjnkcnl
valores.forEach (parouimpar);
function parouimpar (valores){
    if (valores % 2 ==0 ) {
        console.log (valores, "É par");
    } else{
        console.log (valores, "É impar");
    };
}


//Execricio 02

let valores02 = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61];

let valores03 = valores02.filter((num) =>
    { return num >= 20 && num <=80})

console.log(valores)