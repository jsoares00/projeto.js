function salvarDados(){
    localStorage.setItem('carros', JSON.stringify(carros))
}

function carregarDados(){
    carros = JSON.parse(localStorage.getItem('carros')) || []
}

let carros=[]

function cadastrarCarro(){
carregarDados()    

    const novoCar = {
    nome: document.getElementById('nome').value,
    ano: Number(document.getElementById("ano").value),
    cor: document.getElementById("cor").value,
    custo: Number(document.getElementById("custo").value),
    placa: document.getElementById('placa').value,
    }
   
carros.push(novoCar)

console.log(carros)

salvarDados()
limparFormulario()
mostrarTodos()
}
function limparFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('ano').value = ''
    document.getElementById('cor').value = ''
    document.getElementById('custo').value = ''
    document.getElementById('placa').value = ''
}
function mostrarTodos(){
carregarDados()

    for(let i=0; i<carros.length; i++){
        document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Divida: R$${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
    }
}
function retirarCarro(){
    let placa = document.getElementById('pesquisa').value
    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
            console.log(carros[i]);
            carros.splice(i, 1);
            console.log(i);
        }
    }
    salvarDados()
    mostrarTodos()
    limparFormulario()
    
}

function testar(){
 carregarDados()

 document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>Civic</h2>
            <p>ano: 2022</p>
            <p>Cor: Preta</p>
            <p>Divida: 500</p>
            <p>Placa: 7FA7WS2</p>
        </div>
        `+
        `<div>
            <h2>Corolla</h2>
            <p>ano: 2021</p>
            <p>Cor: Prata</p>
            <p>Divida: 5000</p>
            <p>Placa: 7M4S1T2</p>
        </div>
        ` +
        `<div>
            <h2>Onix</h2>
            <p>ano: 2020</p>
            <p>Cor: Branco</p>
            <p>Divida: 300</p>
            <p>Placa: FH8S9G</p>
        </div>
        `+
        `<div>
            <h2>Gol G3</h2>
            <p>ano: 2016</p>
            <p>Cor: Preta</p>
            <p>Divida: 200</p>
            <p>Placa: 72DTE8</p>
        </div>
        ` 
console.log(carros)

mostrarTodos()
}
function pesquisar(){
    let placa = document.getElementById('pesquisa').value
    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
           document.getElementById('resultadoPes').innerHTML = 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Divida: R$${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
        }
    }
}
