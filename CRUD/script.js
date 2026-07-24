const carros=[]

function cadastrarCarro(){
    const novoCar = {
    nome: document.getElementById('input-nome').value,
    ano: Number(document.getElementById("input-ano").value),
    cor: document.getElementById("input-cor").value,
    custo: Number(document.getElementById("input-custo").value),
    placa: document.getElementById('input-placa').value,
    }
carros.push(novoCar)

console.log(carros)

limparFormulario()
mostrarTodos()
}
function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-ano').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''
    document.getElementById('input-placa').value = ''

    document.getElementById('input-nome').focus()
}
function mostrarTodos(){
    document.getElementById('painel-Resultado').innerHTML = '' 

    for(let i=0; i<carros.length; i++){
        document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Custo: ${carros[i].custo}</p>
            <p>${carros[i].placa}</p>
        </div>
        ` 
    }
}
