//funcao
function soma(num1, num2, num3) { //parametros
            // 2,    3,    2
    var num1 
    var num2 
    var num3

    return num1 + num2 + num3; //5
}
console.log(soma(2, 3, 2))//com
// console.log(soma)// sem parentese


//crie uma funcao que receba 4 valores e retorne apenas a media desses valores

// console.clear()

function media(n4,n5,n6,n7){
    return(n4 + n5 + n6 + n7) /4;
}

console.log(media(8, 8, 8, 8));

// console.clear()

const media2 = (n4,n5,n6,n7) => {
    return(n4 + n5 + n6 + n7) /4;
}

console.log(media2(5,5,5,5))



function onloadTela(){
    alert("Sua tela está carregada Bem-Vindo")
    console.log("Recarregou a tela")
}


const clique = () => {
    alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão")
}

