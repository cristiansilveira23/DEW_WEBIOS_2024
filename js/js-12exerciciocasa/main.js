let Imagem = () =>{

    let imagem = document.createElement('imagem');
    img.src='./JS/JS12-DOM-Parte2/ExercicioCasa/umbrellaacadem.jpg'
    body.appendChild(imagem)
    document.body.style.backgroundColor = "#262525"
 }

//Botão02

    const Usuario = window.prompt("Seu nome");
    if(Usuario){
        let nome = document.createElement('U')
        nome.innerText = "Olá " +  Usuario + "!" + " Bem-vindo(a) à nossa academia!"
        document.body.appendChild(nome)
        nome.style.color = 'purple'
    }


//Botão03


function Numero(){
    let num = window.prompt('Informe um número')
    if(num <= 10){
        for(let i = 1; i <= 10;i++){
            let Tabuada = document.createElement('h1')
            Tabuada.innerText = ' ${num} x ${i} = ${num * i} '
            document.body.appendChild(Tabuada)}
    }
}