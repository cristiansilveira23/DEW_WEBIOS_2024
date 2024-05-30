// metodo ForEach
let frutas =["Maçã", "limão", "tomate", "banana", "melão", "abacaxi"];

frutas.forEach (retornaInfo);
function retornaInfo(nomeFruta, indice){
     console.log(`nomeFruta: ${nomeFruta}`)
     console.log(`Indice: ${indice}`)
}
// for(var i = 0; i < frutas.length ; i++){
//     console.log('Nome: ')
// }
console.clear()

frutas.forEach(teste = (nomeFruta, indice) => {
    console.log(`nomeFruta: ${nomeFruta}`)
     console.log(`Indice: ${indice}`)
})


frutas.forEach((teste) = () => console.log(teste))
//ele vai retornar apenas o nome e não vai retornar o indice
console.clear()

let tarefa = [ //array de objetos
    {
        id: 1,
        ispronta: true,
        nomeTarefa: "dormir"
    },
    {
        id: 2,
        ispronta: true,
        nomeTarefa: "Comer"
    },
    {
        id: 3,
        ispronta: false, //
        nomeTarefa: "lavar a louça"
    }

]
//Array Fuction
tarefa.forEach((tarefa) => console.log(tarefa.nomeTarefa) )
console.clear()


let nummeros = [4, 9, 16, 25]
let novoArray = nummeros.map(Math.sqrt)

console.log("Array antigo" + nummeros)
console.log("Novo Array" + novoArray)

let maptext = tarefa.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})
console.clear()


let nummeros2 = [3, 13, 24, 36, 37, 50, 60, 78, 89]

let resultado = nummeros2.filter(retornaFiltro)


function retornaFiltro(nummeros2){
    return nummeros2 > 30
}

console.log(resultado)

let tarefaFiltro = tarefa.filter((retornaFiltro) => {
    return retornaFiltro.ispronta === false

})

console.log(tarefaFiltro)
console.clear()



let sapatos = [
    {marca: "Nike", quantidade: 20},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]
console.log(sapatos.find((retornaFind) => {
    return(retornaFind.marca = "Nike")
})
)
// sapatos.find((retornaFind) => {
//     return(retornaFind.marca = "Nike")
// })

