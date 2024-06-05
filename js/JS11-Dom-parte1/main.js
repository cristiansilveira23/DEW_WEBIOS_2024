// Dom 
// Link com o arquivo HTML
// Acessa o dom 
document.title = "Times"
//ser for 1 > São Paulo(cor de fundo vermelho) senão 0 Corinthians (cor de fundo preto)

var time = prompt ("Qual o nome do time")

if(time == "Sao Paulo" ||  time == "São Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "Red"

    let nometime = document.createElement('h1')
    nometime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nometime)
    
}else if (time == "Corinthians"){
    alert("O time é Corinthians")
    document.body.style.backgroundColor = "Black"


    let nometime = document.createElement('h1')
    nometime.innerHTML = "Corinthians - Cássio"


}else if (time == "Palmeiras"){
    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "Grenn"
} 

window.alert("Bem Vindo")

window.alert("Deseja realmente sair desse jogo")
