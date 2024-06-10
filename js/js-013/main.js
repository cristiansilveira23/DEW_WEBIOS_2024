const criaSalario = () =>{
    var salario = 2000;
    var porcentagem = 17;
    var reajuste = (porcentagem / 100) * salario + 215
    console.log(reajuste)
    var salarioReajuste = salario + reajuste
    document.querySelector("#botao")
    let contaFinal = document.createElement('h1')
    document.body.appendChild(contaFinal)
    contaFinal.innerText = "Seu novo salário com reajuste é  " + salarioReajuste
}
