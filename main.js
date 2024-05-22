const form = document.getElementById("form-contatos")
const nomes = []
const tell = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
})

function adicionarLinha(){
    const nomeCliente = document.getElementById('nome-ctt')
    const tellCliente = document.getElementById('tell-ctt')

    if (nomes.includes(nomeCliente.value)){
        alert(`O nome ${nomeCliente.value} já foi inserido`)
    } else {
        nomes.push(nomeCliente.value)
        tell.push(parseFloat(tellCliente.value))

        let linha = '<tr>';
        linha += `<td>${nomeCliente.value}</td>`
        linha += `<td>${tellCliente.value}</td>`
        linha += '<tr>'
    
        linhas += linha
    }
    nomeCliente.value = ''
    tellCliente.value = ''

}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}