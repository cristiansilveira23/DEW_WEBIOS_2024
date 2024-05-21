// Array
var numeros = [-2,  40,  16,  111,  33,  64]

console.log(numeros)
console.log(numeros[3])

// cria um array unidimesional com 7 posições em todas 
// as posições insira o nome de 7 pessoas especiais em sua vida 

var Nomes = ["Dinha", "Domigos", "Kelly", "Melissa", "Breno", "Samuel", "Ricardo", "Marcio",]

console.log(Nomes) 
console.log(`${Nomes[3]} \n ${Nomes[1]}`)


console.clear()

var bidi  = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350, 4566 ]
 //  0     1      2     3
]
// para acessar info utilizando array bidi passamos no
//  colchetes o indice da linha e depois coluna
console.log(bidi)
console.log(bidi[1][1])
console.log(bidi[2][2])


// Array bidi >> Crie um array bidimensional que contenha itens de mercado,
//  o array deve ser feito com 4 linhase em cada linha deve ter 4 produtos
var produtos = [

["Pipoca", "arroz", "fejão", "batata"],
["molho de tomate", "alface", "leite em pó", "detergente"],
["leite de coco", "candida", "maçã", "vinagre"],
["bolacha", "azeite", "limão", "shampoo"]
]

console.log(`${produtos[3][5]} \n ${produtos[1]}`)

// quebra linha \n (:

console.clear()

let moeda = ["Real","Euro","Coroa", "Dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8, 10,]
console.log(numArray)

var mudar = numArray.toString();
console.log(mudar)

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudar2 = teste1.join(" ?? ")
var mudar3 = teste1.toString()

console.log("Com o join")
console.log(mudar2)
console.log("Com o toString")
console.log(mudar3)

// // transforma array em string e muda o
// separador dos valores

console.clear()

let array = [0, 1, 2, 3, 4]
console.log(array.length)

console.clear()

let utilizaPop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "Lude Mila"]

console.log(utilizaPop)
var mudar4 = utilizaPop.pop() //removi no final array
console.log(mudar4)
console.log(utilizaPop)


var mudar5 = utilizaPop.push("Saraiva") //insere no finaldo array 
console.log(mudar5)
console.log(utilizaPop)
console.clear()
var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]

console.log(nomesCarros)
var mudar6 = nomesCarros.shift() 

console.log(mudar6)
console.log(nomesCarros)

console.clear()

var insereNoinicio = [true, 34, "Mano Scorro", "JS"]

var mudar7 = insereNoinicio.unshift("Nice")
console.log(mudar7)
console.log(insereNoinicio)
