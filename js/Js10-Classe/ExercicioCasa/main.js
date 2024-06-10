class contaBancaria{
    constructor (nome, idade, conta, salario, sexo, agencia, numeroConta){
        this.nome = nome;
        this.idade = idade;
        this.conta = conta;

        if (this.conta == "Poupança") {
            salario = salario - salario * 0.015}
        else if (this.conta == "Corrente") {
            salario = salario - salario * 0.036}
        else if (this.conta == "Estudante") {
            salario = salario - salario * 0.012};

        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
    };
};

var Poupanca = new contaBancaria("Felippe", 17, "Poupança", 4000, "Masculino", 1234, 1234567890);
var Corrente = new contaBancaria("Elias", 45, "Corrente", 3000, "Masculino", 5678, 9876543210);
var Estudante = new contaBancaria("Ana", 44, "Estudante", 1000, "Feminino", 9101, 1133557700);

console.log("Conta Poupança:", Poupanca);
console.log("Conta Corrente:", Corrente);
console.log("Conta Estudante:", Estudante);