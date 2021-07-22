const cep = document.querySelector("#cep")


// Automatic way

const showData = (result) => {
    for (const field in result) { // Percorre os campos do objeto result
        if (document.querySelector("#" + field)) { // Se existe esse campo no meu formulario (busca pelo ID)
            let aux = document.querySelector("#" + field)
            aux.value = result[field]
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then(response => {
        response.json().then(
            data => showData(data)
        )
    }).catch((error) => {
        alert("Ocorreu um erro, tente novamente!" + error.messsage)
    })
})


//Hand way

// const bairro = document.querySelector("#bairro")
// const logradouro = document.querySelector("#logradouro")
// const localidade = document.querySelector("#localidade")
// const uf = document.querySelector("#uf")

// cep.addEventListener("blur", (e) => {
//     let search = cep.value.replace("-", "")
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }

//     fetch(`https://viacep.com.br/ws/${search}/json/`, options).then(response => {
//         response.json().then(
//             data => {
//                 console.log(data)
//                 bairro.value = data['bairro']
//                 logradouro.value = data['logradouro']
//                 localidade.value = data['localidade']
//                 uf.value = data['uf']
//             }
//         )
//     }).catch((error) => {
//         alert("Ocorreu um erro, tente novamente!" + error.messsage)
//     })
// })