// Array Objetos
let pessoa = {
    corDosOlhos: "verde",
    altura: "1.70",
    corCabelo: "preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: ["Futebol", "LOL", "tocar guitarra"],
    //          0         1       2      3 
    // cria outro objeto
    endereco: {
        rua: "jao madeiro",
        numero: 234,
        cidade: " São Paulo",
        estado: "SP"
    }
}

console.log(pessoa)
console.log(pessoa.corCabelo)//retornar apenas uma priopriedade
console.log(pessoa.hobbie)//retorna todos os hobbie
console.log(pessoa.hobbie[2])//retona apenas um hobbie
console.log(pessoa.endereco)//retorna todo endrereço
console.log(pessoa.endereco.estado)//retorna apenas uma informacao dentro do endereço

console.clear()

let tarefa = [
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
        ispronta: false,
        nomeTarefa: "lavar a louça"
    }

]

console.log(tarefa)
console.log(tarefa[1])//retorna um objeto
console.log(tarefa[0].nomeTarefa)  //retorna uma unica propriedade de um objeto

console.clear()

let recebeJAISON = JSON.stringify(pessoa)//transforma objetos em JSON

console.log(pessoa)
console.log(recebeJAISON)
console.clear()


var JSONITO = '{ "corDosOlhos": "verde", "altura": "1.70", "corCabelo": "preto", "nome": "Caio", "sobrenome": "Maciel", "hobbie": ["Futebol", "LOL", "tocar guitarra"], "endereco": { "rua": "jao madeiro", "numero": 234, "cidade": " São Paulo", "estado": "SP" } }'


console.log(JSONITO)
console.log(JSON.parse(JSONITO))// transformar JSON em objetos