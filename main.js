const form = document.getElementById('form-contatos');
const totalClientes = [];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

   
    adicionaLinha();
    atualizaTabela();
    atualizaClientes();

});


function adicionaLinha(){
    const inputNomeCliente = document.getElementById('nome-contato');
    const inputTelefoneCliente = document.getElementById('telefone-contato');

    if (totalClientes.includes(inputNomeCliente.value)) {
        alert(`Esse Contato Ja Foi inserida`);
    }else{
        totalClientes.push(inputNomeCliente.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeCliente.value}</td>`;
    linha += `<td>${inputTelefoneCliente.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    }



    inputNomeCliente.value = '';
    inputTelefoneCliente.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaClientes() {
    const resultadoFinal = calculaContato();

    document.getElementById('numero-contato').innerHTML = resultadoFinal;


   
}

function calculaContato() {
    let totalContato = totalClientes.length;

    for (let i = totalClientes; i < totalClientes.length; i++) {
        totalContato += totalClientes[i];
    }

    return total = totalContato;
}