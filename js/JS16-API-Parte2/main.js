let cep = document.querySelector('#cep');
let message = document.querySelector('#erroMessage')
let Rua = document.querySelector('#Rua')
let Complemento = document.querySelector('#Complemento')
let Bairro = document.querySelector('#Bairro')
let Cidade = document.querySelector('#Cidade')
let Estado = document.querySelector('#Estado')

cep, addEventListener('focusout', async () => {
    // sabemos que api pode retormar successso e erro
    try{
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;

        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){
            console.log("CEP invalido")
            throw{cep_error: 'CEP invalido'}

        }

    let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

    console.log(retornoAPI)

    if(!retornoAPI.ok){
        throw await retornoAPI.json();
    }

    let response = await retornoAPI.json();

    console.log(response)
    cep.value = response.cep;

    }catch(error){
        if(error?.cep_error){
            message.textContet = error.cep_error;
        setTimeout(() => {
           message.textContet = '';
            
        },5000);        }
        console.log(error)

    }
} )
